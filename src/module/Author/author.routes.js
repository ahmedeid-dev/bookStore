import { Router } from "express";
import { addAuthor, deleteAuthor, editAuthor, getAllAuthors, getAuthor, searchAuthor } from "./author.controller.js";

const AuthorRouter = Router();
AuthorRouter.route('/')
    .post(addAuthor)
    .get(getAllAuthors)

AuthorRouter.route('/:id')
    .get(getAuthor)
    .patch(editAuthor)
    .delete(deleteAuthor)

app.route('/search')
    .get(searchAuthor);

export default AuthorRouter