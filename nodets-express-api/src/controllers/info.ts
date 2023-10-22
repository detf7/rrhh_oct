/**
 * Info Contoller Class
 * @category  Controller
 */
import express from 'express';
import { HttpRequest, HttpResponse } from '../helpers/http';

const router = express.Router();

// Handles the render of any info page.
// just put any page in the info directory and navigate to view page
// example /info/mynewpage
router.get('/:page?',  (req, res) => {
	let page =  "info/" +  req.params.page || 'info/about';
	res.render('layouts/info.ejs', {page});
});

// when contact us submit form is posted
router.post('/sendcontact',  (req: HttpRequest, res:HttpResponse) => {
	let email = req.body.email;
	let name = req.body.name;
	let msg = req.body.msg;
	let title = `New contact us message from ${name}`;
	let mailer = require('../helpers/mailer.js');
	
	if (email && name && msg){
		mailer.sendMail(email, title, msg);
		return res.redirect("/info/contact_sent");
	}
	else{
		res.render('layouts/info.ejs', { page: 'info/contact',error:['Missing required fields']});
	}
});
export default router;