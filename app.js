let library = [];
let newBook;
const container = document.querySelector('.container');
const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submit');
const removeBtn = document.createElement('button');

submitBtn.addEventListener('click', () => {
    addBookToLibrary();
});

removeBtn.addEventListener('click', removeBook)

class Book {
    constructor (title, author, genre, read) {
        this.title = form.title.value;
        this.author = form.author.value;
        this.genre = form.genre.value;
        this.read = form.read.checked;
    }
}

function addBookToLibrary(){
    newBook = new Book(title, author, genre, read);
    library.push(newBook);
    form.reset();
    displayBooks();
}

function createCard(book) {
    const card = document.createElement('div');
    const title = document.createElement('h2');
    const author = document.createElement('h3');
    const genre = document.createElement('span');
    

    card.classList.add('card');
    card.setAttribute('id', library.indexOf(book));

    title.textContent = book.title;
    card.appendChild(title);

    author.textContent = book.author;
    card.appendChild(author);

    genre.textContent = book.genre;
    card.appendChild(genre);

    removeBtn.setAttribute('type', 'button');
    removeBtn.classList.add('remove', 'button');
    removeBtn.setAttribute('id', library.indexOf(book));
    removeBtn.textContent = 'Remove';
    card.appendChild(removeBtn);


    container.appendChild(card);
}

function resetDisplay() {
    container.textContent = '';
}

function displayBooks() {
    resetDisplay()

    for (i = 0; i<library.length; i++) {
        createCard(library[i]);
    }
}

function removeBook(e) {
    library.splice(e, 1);
    displayBooks();
}