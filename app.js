let library = [];
let newBook;

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
    form.reset()
}