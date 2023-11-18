
import excel from 'exceljs';
import utils from '../helpers/utils';
import ejs from 'ejs';
import pdf from 'html-pdf';
import config from '../config';
import { HttpRequest, HttpResponse } from '../helpers/http';

export default async function exportPageData(records, req:HttpRequest, res:HttpResponse) {
	try{
		let format = String(req.query.export).toLowerCase();
		let columns =  [
				{header: "Idunidad", key: "idunidad"},
				{header: "Nivel", key: "nivel"},
				{header: "Descripcion", key: "descripcion"},
				{header: "Dependencia", key: "dependencia"},
				{header: "Ley", key: "ley"}
		]
		let filename = "estructuraorglist-report";
		if(format == "excel"){
			let workbook = new excel.Workbook();
			let worksheet = workbook.addWorksheet("");
			worksheet.columns = columns;
			worksheet.addRows(records);
			res.setHeader("Content-Disposition", `attachment; filename=${filename}.xlsx`);
			return workbook.xlsx.write(res).then(function () {
				res.status(200).end();
			})
		}
		else if(format == "csv"){
			let workbook = new excel.Workbook();
			let worksheet = workbook.addWorksheet("");
			worksheet.columns = columns;
			worksheet.addRows(records);
			res.setHeader("Content-Disposition", `attachment; filename=${filename}.csv`);
			return workbook.csv.write(res).then(function () {
				res.status(200).end();
			})
		}
		else if(format == "pdf"){
			let page = "estructuraorglist.ejs";
			let html = await ejs.renderFile("src/views/layouts/report.ejs", {records, page, config});
			pdf.create(html).toStream((err, pdfStream) => {
				if(err){
					return res.serverError("Error creating pdf")
				}
				else{
					res.statusCode = 200
					pdfStream.on('end', () => {
						return res.end()
					})
					pdfStream.pipe(res);
				}
			});
		}
		else if(format == "print"){
			let page = "estructuraorglist.ejs";
			let html = await ejs.renderFile("src/views/layouts/report.ejs", {records, page, config});
			return res.send(html);
		}
	}
	catch(err){
		return res.serverError(err);
	}
}
