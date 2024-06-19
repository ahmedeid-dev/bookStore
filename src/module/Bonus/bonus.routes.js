app.get('/books', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const books = await Book.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();
        const count = await Book.countDocuments();
        res.status(200).send({
            books,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/authors', async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const authors = await Author.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .populate('books')
            .exec();
        const count = await Author.countDocuments();
        res.status(200).send({
            authors,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (err) {
        res.status(500).send(err);
    }
});
