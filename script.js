const myLibrary = [];

const addNewBookBtn = document.querySelector('.addNewBook');
const formModal = document.querySelector('.formModal');
const outputBox = document.querySelector('output');
const submitBtn = formModal.querySelector('.submitBtn');
const table = document.querySelector('#tableID');

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
    
    let tr = document.createElement('tr');
   
    let titleTd = document.createElement('td');
    titleTd.innerText = `Title: ${newBook.title}`;
    tr.appendChild(titleTd); 

    let authorTd = document.createElement('td');
    authorTd.innerText = `Author: ${newBook.author}`;
    tr.appendChild(authorTd); 

    let pagesTd = document.createElement('td');
    pagesTd.innerText = `Pages: ${newBook.pages}`;
    tr.appendChild(pagesTd); 

    let statusTd = document.createElement('td');
    statusTd.innerText = `Status: ${newBook.status}`;
    tr.appendChild(statusTd); 
    
    table.appendChild(tr);
}

const book1 = new Book('Misery', 'Stephen King', '200', 'Read');
const book2 = new Book('The Stand', 'Stephen King', '300', 'Unread');
const book3 = new Book('Lord of the Rings', 'J.R.R. Tolkien', '500', 'Read');

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

    let tr = document.createElement('tr');
   
    let titleTd = document.createElement('td');
    titleTd.innerText = `Title: ${book.title}`;
    tr.appendChild(titleTd); 

    let authorTd = document.createElement('td');
    authorTd.innerText = `Author: ${book.author}`;
    tr.appendChild(authorTd); 

    let pagesTd = document.createElement('td');
    pagesTd.innerText = `Pages: ${book.pages}`;
    tr.appendChild(pagesTd); 

    let statusTd = document.createElement('td');
    statusTd.innerText = `Status: ${book.status}`;
    tr.appendChild(statusTd); 
    
    table.appendChild(tr);

    // RESET AND CLOSE THE FORM
    this.reset();
    formModal.close();
});






