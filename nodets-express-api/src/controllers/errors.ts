/**
 * Info Contoller Class
 * @category  Controller
 */
import express from "express";
const router = express.Router();
router.get('/:page', (req, res) => {
	const page = "errors/" + req.params.page || 'errors/general';
	res.render('layouts/info.ejs', { page });
});

export default  router;