function Book(title, author, haveRead = false) {
  this.title = title;
  this.author = author;
  this.haveRead = haveRead
}

const myLibrary = [];

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", true);
const giver = new Book("The Giver", "Lois Lowry", true);

myLibrary.push(hobbit);
myLibrary.push(giver);

const dialog = document.querySelector('#new-book-dialog');
const cardContainer = document.querySelector('.card-container');
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');

function populateBookList() {
  cardContainer.innerHTML = '';
  
  myLibrary.forEach(book => {
    let card = document.createElement('div');
    card.classList.add('card');
    let xButton = document.createElement('button');
    xButton.type = 'button';
    xButton.classList.add('delete-book');
    xButton.textContent = 'delete';
    let titleText = document.createElement('span');
    titleText.classList.add('title');
    titleText.textContent = book.title;
    let authorText = document.createElement('span');
    authorText.classList.add('author');
    authorText.textContent = book.author;
    let readButton = document.createElement('button');
    readButton.type = 'button';
    readButton.classList.add('read-status');
    if (book.haveRead) {
      readButton.classList.add('read');
      readButton.textContent = "Read";
    } else {
      readButton.textContent = 'Unread';
    }
    card.appendChild(titleText);
    card.appendChild(authorText);
    card.appendChild(readButton);
    card.appendChild(xButton);
    cardContainer.appendChild(card);
  });
  
  const toggleReadStatus = document.querySelectorAll('.read-status');
  
  toggleReadStatus.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.classList.toggle('read');
      let childIndex = Array.from(toggleReadStatus).indexOf(e.target);
      myLibrary[childIndex].haveRead = !myLibrary[childIndex].haveRead;
      // console.log(myLibrary[childIndex].haveRead);
      if (Array.from(e.target.classList).includes('read')) {
        e.target.textContent = "Read";
      } else {
        e.target.textContent = "Unread";
      }
    });
  });
  
  const deleteBtns = document.querySelectorAll('.delete-book');
  
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let childIndex = Array.from(deleteBtns).indexOf(e.target);
      myLibrary.splice(childIndex, 1);
      console.table(myLibrary);
      populateBookList();
    });
  });
  
}

const newBook = document.querySelector('#add-book');
newBook.addEventListener('click', () => dialog.showModal());

const cancelBtn = document.querySelector('#cancel-input');
cancelBtn.addEventListener('click', () => dialog.close());

const submitButton = document.querySelector('#new-book-submit');
submitButton.addEventListener('click', () => {
  let newBook = new Book(titleInput.value, authorInput.value);
  myLibrary.push(newBook);
  populateBookList();
  titleInput.value = '';
  authorInput.value = '';
  dialog.close()
});

populateBookList();