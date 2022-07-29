//converted to use classes instead of object constructors

let myLibrary =[];

//Object Constructor for book
class Book {
     constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    
        this.info = function () {
          console.log(title, author, pages, read);
        }
    
    }
}


//Toggle Read method for checkbox -- added in displayLibrary function
Book.prototype.toggleRead = function (){
    this.read = this.read? false : true ;
}

//Connect to button NewBook click in Html File to Books to screen
let btn = document.getElementById('submit');

btn.addEventListener('click', addBookToLibrary);

function addBookToLibrary (e) {
    e.preventDefault();
    //prompts user for books information
    //adds book to viewers screen
    let title = document.getElementById('title').value;

    let author = document.getElementById('author').value;

    let pages =  document.getElementById('pages').value;

    let read =  document.getElementById('read').checked;

   let newBook = new Book(title, author, pages, read);
    //adds new book info to myLibrary array
    myLibrary.push(newBook);
    displayLibrary(newBook);      
    newBook.info();
    clearForm(); //or use document.getElementById('form').reset();
}

let elementUl = document.getElementById('book-list');

//function that loops book info to display
function displayLibrary (newBook) {
        let title = document.createElement('h2');
        let author = document.createElement('p');
        let pages = document.createElement('p');
        let read = document.createElement('button');

        //The list element that will hold all book info w/ data-set 
        let bookElement = document.createElement('li');
        bookElement.setAttribute('data-value', newBook);

        let bookTitle = document.createTextNode("Title: " + newBook.title);
        let bookAuthor = document.createTextNode("Author: " + newBook.author);
        let bookPages = document.createTextNode("Pages: " + newBook.pages);
        let bookRead = document.createTextNode("Read: " + newBook.read);

        title.appendChild(bookTitle);
        author.appendChild(bookAuthor);
        pages.appendChild(bookPages);
        read.appendChild(bookRead);

        bookElement.appendChild(title);
        bookElement.appendChild(author);
        bookElement.appendChild(pages);
        bookElement.appendChild(read);

        //toggle for read checkbox - button
        read.addEventListener('click', function() {
            newBook.toggleRead();
            read.textContent = "Read: " + newBook.read;
        });

        //remove book from library button - takes away from display
        let removeButton = document.createElement('button');
        removeButton.innerText = "Remove Book";
        removeButton.className = "remove-btn";
        removeButton.addEventListener('click', removeItem);

        bookElement.appendChild(removeButton);

        elementUl.appendChild(bookElement);  
}

//removes all child nodes of the bookInfo div
function removePreviousBookEntries (parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//clears form inputs once Button is pressed 
function clearForm() {
    let inputs = document.querySelectorAll("#title, #author, #pages, #read");
    
    inputs.forEach(input =>{
        input.value = '';
    });
}

//remove book function
let removeItem = (e) => {
    let item = e.currentTarget.parentNode;
    let userInput = item.dataset.value //extracting the data attribute
    item.remove();
    let itemIndex = item.indexOf(userInput);
    item.splice(itemIndex, 1);
}
