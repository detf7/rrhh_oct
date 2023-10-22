export interface UploadSettings {
	maxFileSize: number,
	maxFiles: number,
	filenameType: string,
	filenamePrefix: string,
	uploadDir: string,
	extensions: string,
	returnFullpath: string,
	imageResize: ImageResize[],
}
export interface ImageResize {
	name: string,
	mode: string,
	width: number,
	height: number,
}