/**
 * Upload controller module
 * @category  Controller / Route
*/
import express from 'express';
import multer, { Multer } from 'multer';
import path from 'path';
import fs from 'fs'
import config from '../config';
import { UploadSettings } from '../helpers/interfaces';
import { HttpRequest, HttpResponse } from '../helpers/http';

const router = express.Router();

const allowedExtensions = ['png', 'jpg', 'gif', 'jpeg', 'pdf', 'txt', 'csv', 'doc', 'docx', 'ppt', 'xls', 'xsp', 'xml', 'json'];

const publicDir = config.app.publicDir;
const tempDir = config.upload.tempDir;

let uploadSettings = {} as UploadSettings

const storage = multer.diskStorage({
	destination: function (req, file, callback) {
		let dir = path.join(publicDir, tempDir);
		// if (!fs.existsSync(dir)){
		// 	fs.mkdirSync(dir);
		// }
		callback(null, dir);
	},
	filename: function (req, file, callback) {
		//save filname type.
		let newFilename = "";
		let filenameType = uploadSettings.filenameType || 'random';
		if (filenameType == 'date') {
			//save file in date format e.g 2018-09-24-02-30-40.jpg
			newFilename = new Date().toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/\:/g, '-')
		}
		else if (filenameType == 'timestamp') {
			//save file in unix timestamp e.g 20180924023040.jpg
			let ticks = Number(new Date());
			newFilename = Math.floor(ticks / 1000).toString();
		}
		else if (filenameType == 'original') {
			//save file with original filename form the user computer e.g mycv.docx
			newFilename = path.parse(file.originalname).name
		}
		else if (filenameType == 'filecount') {
			//save file by incrementing the dirctory file count e.g 40.jpg prefix can be added to file on upload
			let uploadDir = uploadSettings.uploadDir || '';
			let dir = path.join(publicDir, uploadDir);
			let files = fs.readdirSync(dir);
			newFilename = files.length.toString();
		}
		else {
			//save file with random string
			const crypto = require("crypto");
			newFilename = crypto.randomBytes(16).toString("hex");
		}
		//adding prefix to file name example profile_pic_20.jpg
		let filenamePrefix = uploadSettings.filenamePrefix || ''

		let fileExt = path.extname(file.originalname).substr(1).toLowerCase();
		newFilename = filenamePrefix + newFilename + '.' + fileExt;
		callback(null, newFilename);
	}
});

function fileFilter(req, file, callback) {
	let ext = path.parse(file.originalname).ext.replace('.', '').toLowerCase();
	let allowed = allowedExtensions;
	if (uploadSettings.extensions) {
		allowed = uploadSettings.extensions.replace(/\s/g, '').split(','); //replace any white space and convert to array
	}
	if (allowed.indexOf(ext) === -1) {
		//return callback('file extension not allowed', false);
		return callback(null, false);
	}
	callback(null, true);
}

router.post('/upload/:fieldname', function (req: HttpRequest, res: HttpResponse) {
	let uploadField = req.params.fieldname;
	uploadSettings = config.upload[uploadField];
	if (!uploadSettings) {
		return res.badRequest('No Upload settings found for ' + uploadField);
	}
	let upload = multer({
		storage,
		fileFilter,
		limits: {
			fileSize: Number(uploadSettings.maxFileSize) * 1000000, // convert mb to bytes
			files: Number(uploadSettings.maxFiles)
		}
	}).array("file");

	upload(req, res, function (err) {
		if (err instanceof multer.MulterError) {
			return res.badRequest(err.message);
			// A Multer error occurred when uploading.
		} else if (err) {
			return res.serverError(err);
			// An unknown error occurred when uploading.
		}

		const uploadedFiles = req.files as any[];
		if (uploadedFiles.length) {
			let uploadedPaths = uploadedFiles.map(file => {
				let filePath = file.path.replace(/\\/g, "/");
				filePath = filePath.replace(`${publicDir}/`, "");
				return filePath;
			});

			const allPaths = uploadedPaths.toString();
			return res.ok(allPaths);
		}
		else {
			return res.badRequest('File not accepted');
		}
	});
});


/**
 * remove temporary uploaded file when deleted by client
 * @category  Controller / Route
*/
router.post('/remove_temp_file', function (req: HttpRequest, res: HttpResponse) {
	let file = req.body.temp_file;
	if (file) {
		let filename = path.basename(file);
		let tmpDir = config.upload.tempDir;
		let fullname = path.join(publicDir, tmpDir, filename);
		if (fs.existsSync(fullname)) {
			fs.unlinkSync(fullname);
		}
		return res.send("File Deleted");
	}
	return res.badRequest("Invalid temp file")
});

export default router;