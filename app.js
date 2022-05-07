let library = [];
let newBook;
const container = document.querySelector('.container');
const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', () => {
    addBookToLibrary();
});



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
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');

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

    readBtn.setAttribute('type', 'button');
    readBtn.classList.add('readBtn', 'button');
    readBtn.setAttribute('id', library.indexOf(book));
    if(book.read) {
        readBtn.textContent = 'Read'
    } else {
        readBtn.textContent = 'Not yet read'
    }
    card.appendChild(readBtn);

    container.appendChild(card);


    removeBtn.addEventListener('click', removeBook);
    readBtn.addEventListener('click', toggleRead);

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
    let id = e.target.id;
    library.splice(id, 1);
    displayBooks();
}

function toggleRead(e) {
    let id = e.target.id;
    library[id].read = !library[id].read;
    displayBooks();
}