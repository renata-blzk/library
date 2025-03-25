const myLibrary = [];

const addNewBookBtn = document.querySelector('.addNewBook');
const formModal = document.querySelector('.formModal');
const outputBox = document.querySelector('output');
const submitBtn = formModal.querySelector('.submitBtn');

// ADD FEW BOOKS FOR DISPLAY
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
    document.querySelector('#tableID').innerHTML = myLibrary.map(book => 
        `<tr><td>Title: ${book.title}</td><td>Author: ${book.author}</td><td>Pages: ${book.pages}</td><td>Status: ${book.status}</td></tr>`).join('');
}

const book1 = new Book('Misery', 'Stephen King', '200', 'read');
const book2 = new Book('The Stand', 'Stephen King', '300', 'unread');
const book3 = new Book('Lord of the Rigs', 'J.R.R. Tolkien', '500', 'read');

book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();

// OPEN TABLE TO ADD NEW BOOK
addNewBookBtn.addEventListener('click', () => {
    formModal.showModal();
});

// SUMBIT BUTTON TAKES VALUES AND STORES THEM AS OBJECTS IN AN ARRAY
document.querySelector('.mainForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.getElementById('status').value;

    // CREATE BOOK 
    const book = { title, author, pages, status };
    
    book.id = crypto.randomUUID();
        
    // ADD BOOK TO ARRAY
    myLibrary.push(book);

    // DISPLAY BOOK IN A TABLE WITH NEW TABLE ROW

    ///// this one works, but also includes ID /////
    /*let tr = document.createElement('tr');
   
    Object.entries(book).forEach(value => {
        let td = document.createElement('td');
        td.innerText = value;
        tr.appendChild(td); 
    });
    table.appendChild(tr);*/

    ///// this one uses innerHTML - not the best option /////
    document.querySelector('#tableID').innerHTML = myLibrary.map(book => 
        `<tr><td>Title: ${book.title}</td><td>Author: ${book.author}</td><td>Pages: ${book.pages}</td><td>Status: ${book.status}</td></tr>`).join('');

    // RESET AND CLOSE THE FORM
    this.reset();
    formModal.close();
});






