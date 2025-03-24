const myLibrary = [];

const table = document.querySelector('#tableID');
const addNewBookBtn = document.querySelector('.addNewBook');
const formModal = document.querySelector('.formModal');
const outputBox = document.querySelector('output');
const submitBtn = formModal.querySelector('.submitBtn');

addNewBookBtn.addEventListener('click', () => {
    formModal.showModal();
});

document.querySelector('.mainForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const status = document.getElementById('status').value;


    const book = { title, author, pages, status };
    
    book.id = crypto.randomUUID();
        
    myLibrary.push(book);

    let tr = document.createElement('tr');
    Object.entries(book).forEach(value => {
        let td = document.createElement('td');
        td.innerText = value;
        tr.appendChild(td); 
    });
    table.appendChild(tr);

    this.reset();
    formModal.close();
});




