import { Router } from "express";
import { addBook, deleteBook, editBook, getAllBooks, getBook, searchBook } from "./book.controller.js";

const bookRouter = Router();
bookRouter.route('/')
    .post(addBook)
    .get(getAllBooks)
    
bookRouter.route('/:id')
    .get(getBook)
    .patch(editBook)
    .delete(deleteBook)

bookRouter.route('/search')
    .get(searchBook);
export default bookRouter
