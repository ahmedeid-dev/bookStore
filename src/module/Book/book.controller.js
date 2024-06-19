import { Book } from './../../../database/model/book.model.js';

const addBook = async (req, res) => {
    const book = await Book.insertMany(req.body);
    res.status(201).json({ message: "Added successfully ",book });
}

const getAllBooks = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const books = await Book.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        const count = await Book.countDocuments();
        res.status(200).json({
            message: "success",
            books,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        res.status(500).send(err);
    }
}

const getBook =async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.status(200).json({ message: "success", book });
}

const editBook =async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: "edited Successfully ", book });
}

const deleteBook = async(req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"deleted Successfully",book})
}

// Implement search functionality to filter books by title or author, and authors by name or bio:
const searchBook= async (req, res) => {
    const { title, author } = req.query;
    let query = {};
    if (title) query.title = { $regex: title, $options: 'i' };
    if (author) query.author = { $regex: author, $options: 'i' };
    try {
        const books = await Book.find(query);
        res.status(200).send(books);
    } catch (err) {
        res.status(500).send(err);
    }
}
export {
    addBook,
    getAllBooks,
    getBook,
    editBook,
    deleteBook,
    searchBook
}