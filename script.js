const myLibrary = [];

function Book(title, author, pages, status) {
    if (!new.target) {
        throw Error ('use "new" when creating new book');
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.addBookToLibrary = function() {
    let newBook = {
        title: this.title,
        author: this.author,
        pages: this.pages,
        status: this.status,
    }
    newBook.id = crypto.randomUUID();
    
    myLibrary.push(newBook);
}

const book1 = new Book('Misery', 'Stephen King', '200', 'read');
const book2 = new Book('The Stand', 'Stephen King', '300', 'unread');
const book3 = new Book('Lord of the Rigs', 'J.R.R. Tolkien', '500', 'read');

book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();

let table = document.querySelector('#tableID');

myLibrary.forEach(book => {
    let tr = document.createElement('tr');
    Object.entries(book).forEach(value => {
        let td = document.createElement('td');
        td.innerText = value;
        tr.appendChild(td); 
    });
    table.appendChild(tr);
});

const addNewBookBtn = document.querySelector('.addNewBook');
const formModal = document.querySelector('.formModal');
const outputBox = document.querySelector('output');
const submitBtn = formModal.querySelector('.submitBtn');

addNewBookBtn.addEventListener('click', () => {
    formModal.showModal();
});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
});




