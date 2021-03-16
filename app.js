//var titles = document.getElementsByClassName("title");

//console.log(Array.isArray(titles));
//console.log(Array.isArray(Array.from(titles)));

//Array.from(titles).forEach(function(item){
//    console.log(item);
//})

//const wmf = document.querySelector("#book-list li:nth-child(2) .name");
//console.log(wmf);

//var books = document.querySelector("#book-list li .name");
//console.log(books);

//books = document.querySelectorAll("#book-list li .name");
//console.log(books);

//Array.from(books).forEach(function(book){
//    book.textContent += " (book title)";
//});

//const bookList = document.querySelector("#book-list");
//bookList.innerHTML = "<h2>Books and more books...</h2>";
//bookList.innerHTML += "<p>This is how you add HTML</p>";

//const banner = document.querySelector("#page-banner");

//console.log("page-banner node type is:", banner.nodeType);
//console.log("page-banner node name is:", banner.nodeName);
//console.log("page-banner has child nodes:", banner.hasChildNodes());

//const clonedBanner = banner.cloneNode(true);
//console.log(clonedBanner);

//const bookList = document.querySelector("#book-list");

//console.log("the perent node is:", bookList.parentNode);
//console.log("the perent element is:", bookList.parentElement.parentElement);

//console.log(bookList.children);

//const bookList = document.querySelector("#book-list");

//console.log("book-list next sibling is:", bookList.nextSibling);
//console.log("book-list next element sibling is:", bookList.nextElementSibling);

//console.log("book-list previous sibling is:", bookList.previousSibling);
//console.log("book-list previous element sibling is:", bookList.previousElementSibling);

//bookList.previousElementSibling.querySelector("p").innerHTML += "<br />Too cool for everyone else!";

//const listItems = document.querySelectorAll('#book-list ul li');

//Array.from(listItems).forEach(function(item){
//  item.addEventListener('click', (e) => {

//    const li = e.target.parentElement;
//    console.log('child element to remove:', li);
//    console.log('parent element to remove child from:', li.parentElement);
//    li.parentNode.removeChild(li);

//  });
//});


// prevent default behaviour

//const link = document.querySelector('#page-banner a');

//link.addEventListener('click', function(e){
//  e.preventDefault();
//  console.log('Navigation to', e.target.textContent, 'was prevented');
//});

//const list = document.querySelector('#book-list ul');

// delete books
//list.addEventListener('click', (e) => {
//  if(e.target.className == 'delete'){
//    const li = e.target.parentElement;
//    li.parentNode.removeChild(li);
//  }
//});

//const forms = document.forms;
//console.log(forms);
//console.log(forms['add-book']);

//Array.from(forms).forEach(function(form){
//  console.log(form);
//});

//const addForm = forms['add-book'];
//addForm.addEventListener('submit', function(e){
//  e.preventDefault();
//  const value = addForm.querySelector('input[type="text"]').value;
//  console.log(value);
//});

//const list = document.querySelector('#book-list ul');
//const forms = document.forms;

// delete books
//list.addEventListener('click', (e) => {
//  if(e.target.className == 'delete'){
//    const li = e.target.parentElement;
//    li.parentNode.removeChild(li);
//  }
//});

// add books
//const addForm = forms['add-book'];
//addForm.addEventListener('submit', function(e){
//  e.preventDefault();

  // create elements
//  const value = addForm.querySelector('input[type="text"]').value;
//  const li = document.createElement('li');
//  const bookName = document.createElement('span');
//  const deleteBtn = document.createElement('span');

  // add text content
//  bookName.textContent = value;
//  deleteBtn.textContent = 'delete';

  // append to DOM
//  li.appendChild(bookName);
//  li.appendChild(deleteBtn);
//  list.appendChild(li);
  //list.insertBefore(li, list.querySelector('li:first-child'));
//});
/////

const list = document.querySelector('#book-list ul');
const forms = document.forms;

// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});