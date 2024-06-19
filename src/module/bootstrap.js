import AuthorRouter from './Author/author.routes.js';
import bookRouter from './Book/book.routes.js';
const bootstrap = (app) => {
const port = 3000

app.get('/', (req, res) => res.status(200).json({ message: "Hello There ..." }))

app.use('/books',bookRouter)
app.use('/authors', AuthorRouter)

app.use('*', (req, res) =>res.status(404).json({message:" 4 0 4 Route not found !!!"}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
export default bootstrap;