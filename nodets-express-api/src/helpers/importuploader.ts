/**
* Upload contoller module
* @category  Controller / Route
*/
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import config from '../config';

const uploadSettings = config.upload.import_data;

const allowedExtensions = ['csv'];
const uploadDir = path.join(config.app.publicDir, uploadSettings.uploadDir);

const Storage = multer.diskStorage({
	destination: function (req, file, callback) {
		if (!fs.existsSync(uploadDir)) {
			fs.mkdirSync(uploadDir);
		}
		callback(null, uploadDir);
	},
	filename: function (req, file, callback) {
		//save file with original filename form the user computer e.g mycv.docx
		var fdate = new Date().toISOString().replace(/T/, '-').replace(/\..+/, '').replace(/\:/g, '-');
		var newfilename = fdate + '_' + file.originalname
		callback(null, newfilename);
	}
});
const upload = multer({
	storage: Storage,
	fileFilter: function (req, file, callback) {
		let ext = path.parse(file.originalname).ext.replace('.', '').toLowerCase();
		if (allowedExtensions.indexOf(ext) === -1) {
			return callback(new Error('file extension not allowed'));
		}
		callback(null, true)
	},
	limits: {
		fileSize: Number(uploadSettings.maxFileSize) * 1000000, // convert mb to bytes
		files: Number(uploadSettings.maxFiles)
	}
});
export default upload;