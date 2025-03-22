const myLibrary = [];

function Book(title, author, pages) {
    if (!new.target) {
        throw Error ('use "new" when creating new book');
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.addBookToLibrary = function() {
    let newBook = {
        title: this.title,
        author: this.author,
        pages: this.pages,
    }
    
    myLibrary.push(newBook);
    console.log(myLibrary);
}

const book1 = new Book('Misery', 'Stephen King', '200');
const book2 = new Book('The Stand', 'Stephen King', '300');
const book3 = new Book('Lord of the Rigs', 'J.R.R. Tolkien', '500');

book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();


