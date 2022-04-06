const toggleReadStatus = document.querySelectorAll('.read-status');
const deleteBtns = document.querySelectorAll('.delete-book');
const newBook = document.querySelector('#add-book');
const dialog = document.querySelector('#new-book-dialog');
const submitButton = document.querySelector('#new-book-submit');
const cancelBtn = document.querySelector('#cancel-input');
const cardContainer = document.querySelector('.card-container');
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');

function Book(title, author) {
  this.title = title;
  this.author = author;
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien");

const myLibrary = [];

myLibrary.push(hobbit);

toggleReadStatus.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.target.classList.toggle('read');
    if (Array.from(e.target.classList).includes('read')) {
      e.target.textContent = "Read";
    } else {
      e.target.textContent = "Unread";
    }
  });
});

deleteBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });
});

newBook.addEventListener('click', () => dialog.showModal());
cancelBtn.addEventListener('click', () => dialog.close());

submitButton.addEventListener('click', () => {
  let newBook = new Book(titleInput.value, authorInput.value);
  myLibrary.push(newBook);
  dialog.close()
});