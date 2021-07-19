// console.log('This is notes app')
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let addTitle = document.getElementById("addTitle");
  let addText = document.getElementById("addText");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  var myObj = {
    title: addTitle.value,
    text: addText.value,
  };
  if (myObj.title === "" || myObj.text === "") {
    alert("Plz fill something");
  } else {
    noteObj.push(myObj);
  }
  localStorage.setItem("notes", JSON.stringify(noteObj));
  addText.value = "";
  addTitle.value = "";
  console.log(noteObj);
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  let html = "";
  noteObj.forEach((element, index) => {
    html += `
        <div class="card-container">
                <h4>${element.title}</h4>
                <p>${element.text}</p>
                <button id=${index} onClick="deleteNote(this.id)" ><i class="fas fa-trash"></i></button>
        </div>
      `;
  });
  let cards = document.getElementById("cards");
  if (noteObj.length != 0) {
    cards.innerHTML = html;
  } else {
    cards.innerHTML = `<div class="card-text">Nothing To Show. Please Use Add Note</div>`;
  }
}

function deleteNote(index) {
  //   console.log(`i m deleting ${index}`);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  noteObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  showNotes();
}

//serach function
const searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", () => {
  var inputVal = searchTxt.value;
  let notesCard = document.getElementsByClassName("card-container");
  Array.from(notesCard).forEach((element, index) => {
    // console.log(element);
    let cardTxt = document.getElementsByTagName("p")[index].innerText;
    console.log(cardTxt);
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

//hamburger code
let ham = document.getElementById("ham");
let header = document.getElementsByTagName("header");
let navItem = document.getElementsByClassName("nav-item");
let navRight = document.getElementsByClassName("nav-right");
ham.addEventListener("click", () => {
  header.classList.toggle('header')
});