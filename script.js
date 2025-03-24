const myLibrary = [];

const table = document.querySelector('#tableID');
const addNewBookBtn = document.querySelector('.addNewBook');
const formModal = document.querySelector('.formModal');
const outputBox = document.querySelector('output');
const submitBtn = formModal.querySelector('.submitBtn');

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
    Object.entries(book).forEach(value => {
        let td = document.createElement('td');
        td.innerText = value;
        tr.appendChild(td); 
    });
    table.appendChild(tr);

    // RESET AND CLOSE THE FORM
    this.reset();
    formModal.close();
});






