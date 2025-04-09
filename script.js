const myLibrary = [];

const addNewBookBtn = document.querySelector('.addNewBook');
const formModal = document.querySelector('.formModal');
const outputBox = document.querySelector('output');
const submitBtn = formModal.querySelector('.submitBtn');
const table = document.querySelector('#tableID');

// CREATE OBJECT CONSTRUCTOR FOR BOOKS DISPLAY
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
        id: crypto.randomUUID(),
    }

    myLibrary.push(newBook);
    
    // DISPLAY BOOKS IN A TABLE
    let tr = document.createElement('tr');
    tr.setAttribute('data-uniqueid', newBook.id);
   
    let titleTd = document.createElement('td');
    titleTd.innerText = `Title: ${this.title}`;
    tr.appendChild(titleTd); 

    let authorTd = document.createElement('td');
    authorTd.innerText = `Author: ${this.author}`;
    tr.appendChild(authorTd); 

    let pagesTd = document.createElement('td');
    pagesTd.innerText = `Pages: ${this.pages}`;
    tr.appendChild(pagesTd); 

    let statusTd = document.createElement('td');
    statusTd.innerText = `Status: ${this.status}`;
    tr.appendChild(statusTd); 
    
    // ADD 'X' BUTTON THAT SHOULD DELETE BOOK FROM DISPLAY
    let rmBtn = document.createElement('div');
    rmBtn.className = 'rmBtn';
    rmBtn.innerText = 'x';
    rmBtn.setAttribute('data-btnattr', tr.dataset.uniqueid);
    tr.appendChild(rmBtn);

    table.appendChild(tr);

    // ADD FUNCTION TO 'X' BUTTON TO DELETE BOOK FROM DISPLAY 
    rmBtn.addEventListener('click', () => {
        tr.remove();

        // FIND BOOK IN ARRAY WITH SAME ID AS 'X' BUTTON AND REMOVE IT 
        let found = myLibrary.find((book) => book.id === rmBtn.dataset.btnattr);
        myLibrary.splice((myLibrary.indexOf(found)), 1);
        console.log(myLibrary);

    });
}

// CREATE FEW BOOKS FOR DISPLAY
const book1 = new Book('Misery', 'Stephen King', '200', 'Read');
const book2 = new Book('The Stand', 'Stephen King', '300', 'Unread');
const book3 = new Book('Lord of the Rings', 'J.R.R. Tolkien', '500', 'Read');

book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();

// OPEN TABLE IN A MODAL TO ADD NEW BOOK
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
    const book = new Book (title, author, pages, status);
            
    // ADD BOOK TO ARRAY
    book.addBookToLibrary();

    // RESET AND CLOSE THE FORM
    this.reset();
    formModal.close();
});






