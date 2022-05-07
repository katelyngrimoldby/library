let library = [];
let newBook;
const container = document.querySelector('.container');
const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', () => {
    addBookToLibrary();
})

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
    displayCard();
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

    container.appendChild(card);
}

function resetDisplay() {
    container.textContent = '';
}

function displayCard() {
    resetDisplay()

    for (i = 0; i<library.length; i++) {
        createCard(library[i]);
    }
}