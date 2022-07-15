//link form from html file to pull book info from (july 15, 2022-Roq)
let myLibrary =[];

//Object Constructor for book
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
      console.log(title, author, pages, read);
    }

}

//Connect to button NewBook click in Html File to Books to screen

function addBookToLibrary () {
    //prompts user for books information
    //adds book to viewers screen
    let newTitle = prompt("Enter book's title");

    let newAuthor = prompt("Enter book's author");

    let newPages = prompt("Enter number of pages in the book");

    let newRead = prompt("Did you read the book, type yes or no");

   let newBook = new Book (newTitle, newAuthor, newPages, newRead);
    newBook.info();
    //adds new book info to myLibrary array
    myLibrary.push(newBook);
    displayLibrary();   
}

//function that loops book info to display
function displayLibrary () {
    for (let i = 0; i <myLibrary.length; i++) {

        let bookInfo = document.querySelector('.bookInfo');
        let title = document.createElement('h2');
        let author = document.createElement('p');
        let pages = document.createElement('p');
        let read = document.createElement('p');

        let bookTitle = myLibrary[i].title;
        let bookAuthor = myLibrary[i].author;
        let bookPages = myLibrary[i].pages;
        let bookRead = myLibrary[i].read;

        title.textContent = bookTitle;
        author.textContent = bookAuthor;
        pages.textContent = bookPages;
        read.textContent = bookRead;

        // if (bookInfo.hasChildNodes = true){
        //     removePreviousBookEntries(bookInfo);
            bookInfo.appendChild(title);
            bookInfo.appendChild(author);
            bookInfo.appendChild(pages);
            bookInfo.appendChild(read);
    }
}

//removes all child nodes of the bookInfo div
function removePreviousBookEntries (parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
