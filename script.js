const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    let newBook = {
        title: book.title,
        author: book.author,
        pages: book.pages,
    }
    
    myLibrary.push(newBook);
    console.log(myLibrary);
}

const book = new Book('Misery', 'Stephen King', '200');

addBookToLibrary(book);
