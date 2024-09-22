# Book and Author Management Application

This project is a simple application to manage a collection of books and their authors, built using Node.js and Express.js. The application allows users to create, read, update, and delete books and authors, with 

additional features for pagination and search functionality.

# Features

-    Models

Book Model:

-     title (String, required)

-    content (String, required)

-    author (String, required)

-    publishedDate (Date, default to the current date)


Author Model:

-    name (String, required)
  
-    bio (String)

-    birthDate (Date)

-    books (Array of ObjectIds referencing Book model)


# API Endpoints

Book Endpoints

-     POST /books: Create a new book.

-    GET /books: Retrieve all books (supports pagination).

-     GET /books/

: Retrieve a single book by its ID.

-    PATCH /books/

: Update a book by its ID.
-    DELETE /books/
: Delete a book by its ID.


# Author Endpoints

-    POST /authors: Create a new author.

-    GET /authors: Retrieve all authors (supports pagination).

-    GET /authors/
: Retrieve a single author by its ID.

-    PATCH /authors/

: Update an author by its ID.

-    DELETE /authors/

: Delete an author by its ID.

#    Bonus Features    

-    Pagination for GET requests to improve performance.

-    Search functionality to filter books by title or author, and authors by name or bio.

-    Relationship retrieval to display all books written by an author.


# Installation

Clone the repository:

git clone https://github.com/yourusername/book-author-management.git


# Install dependencies:

npm install


Start the application:

npm start


# Testing

Use Postman to test the API endpoints. The Postman documentation is included in the repository.

# Future Improvements

Implement frontend integration for a complete user interface.

Enhance search capabilities and add filters for more granular data retrieval.

Acknowledgments

Feel free to explore the code and documentation. Contributions and feedback are welcome!




<!-- 
    !Postman Documentation Link
        https://documenter.getpostman.com/view/32857096/2sA3XTfL6T
    
    ! Github Code Link 
    https://github.com/ahmedeid-dev/bookStore
