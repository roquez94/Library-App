//link form from html file to pull book info from (july 15, 2022-Roq)
//voided out and unused, using library2.js file instead

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
let btn = document.getElementById('submit');

btn.addEventListener('click', addBookToLibrary);

function addBookToLibrary (e) {
    e.preventDefault();
    //prompts user for books information
    //adds book to viewers screen
    let newTitle = document.getElementById('title').value;

    let newAuthor = document.getElementById('author').value;

    let newPages =  document.getElementById('pages').value;

    let newRead =  document.getElementById('read').value;

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
