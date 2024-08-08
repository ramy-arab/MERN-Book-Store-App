import express from 'express';
import {
	saveBook,
	getallBooks,
	getbyidBook,
	updateBook,
	deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();


router.post("/save", saveBook);
router.get("/getall", getallBooks);
router.get("/getbyid/:id", getbyidBook);
router.put("/edit/:id", updateBook);
router.delete("/delete/:id", deleteBook);

export default router;
