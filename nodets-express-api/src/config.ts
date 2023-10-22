export default {
	app: {
		name: "RRHH20",
		url: "http://localhost:8060",
		frontendUrl: "http://localhost:8050",
		secret: "7d133980c28cf813c416e776e0aa0fa6",
		language: "spanish",
		publicDir: "public",
	},
	meta: {
		author:"",
		description: "__metadescription",
		charset: "UTF-8",
	},
	auth: {
		jwtDuration: 60, //in minutes
		otpDuration: 5, //in minutes
	},
	database: {
		name:"SisMingobDB",
		type: "postgres",
		host: "35.183.90.69",
		username: "postgres",
		password: "Roacorp48",
		port: "5432",
		charset: "utf8",
		recordlimit: 10,
		ordertype: "DESC"
	},
	mail: {
		username:"",
		password: "",
		senderemail:"",
		sendername:"",
		host: "",
		secure: true,
		port: ""
	},
	upload: {
		tempDir: "uploads/temp/",
		import_data: {
			filenameType: "timestamp",
			extensions: "json,csv",
			maxFiles: "10",
			maxFileSize: "3",
			returnFullpath: "false",
			filenamePrefix: "",
			uploadDir: "uploads/files/"
		},
		
		foto: {
			filenameType: "random",
			extensions: "jpg,png,gif,jpeg",
			maxFiles: "1",
			maxFileSize: "3", // in MB
			returnFullpath: false,
			filenamePrefix: "",
			uploadDir: "uploads/files",
			imageResize:  [ 
				{name: "small", width: 100, height: 100, mode: "cover"}, 
				{name: "medium", width: 480, height: 480, mode: "inside"}, 
				{name: "large", width: 1024, height: 760, mode: "inside"}
			],

		},

	},
	s3: {
		secretAccessKey: "",
		accessKeyId: "",
		region: "",
		bucket: "",
	},
	
}