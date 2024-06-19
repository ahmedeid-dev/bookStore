import { Author } from "./../../../database/model/author.model.js";

const addAuthor = async (req, res) => {
const author = await Author.insertMany(req.body);
res.status(201).json({ message: "Added successfully ", author });
};

// Add pagination to the GET endpoints for retrieving all books and authors:
const getAllAuthors = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const authors = await Author.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .populate('books')
            .exec();
        const count = await Author.countDocuments();
        res.status(200).json({
            message: "success",
            authors,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Add a relationship so that when retrieving an author, the response includes a list of books written by them:
const getAuthor = async (req, res) => {
const author = await Author.findById(req.params.id).populate("Book");
    res.status(200).json({ message: "success", author });
};
const editAuthor = async (req, res) => {
const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
    Author: true,
});
res.status(200).json({ message: "edited Successfully ", author });
};
const deleteAuthor = async (req, res) => {
const author = await Author.findByIdAndDelete(req.params.id);
res.status(200).json({ message: "deleted Successfully", author });
};

// Implement search functionality to filter books by title or author, and authors by name or bio:
const searchAuthor= async (req, res) => {
    const { name, bio } = req.query;
    let query = {};
    if (name) query.name = { $regex: name, $options: 'i' };
    if (bio) query.bio = { $regex: bio, $options: 'i' };
    try {
        const authors = await Author.find(query).populate('books');
        res.status(200).send(authors);
    } catch (err) {
        res.status(500).send(err);
    }
}
export { addAuthor, getAllAuthors, getAuthor, editAuthor, deleteAuthor ,searchAuthor};
