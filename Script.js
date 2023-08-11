console.log("It is working !");

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Modal box

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Modal validation
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  let xx = document.getElementById("vfname");
  if (x == "") {
    xx.style.display="block";
    return false;
  }

  let y = document.forms["myForm"]["lname"].value;
  let yy=document.getElementById("vlname");
  if (y == "") {
    yy.style.display="block";
    return false;
  }

  let z = document.forms["myForm"]["comment"].value;
  let zz=document.getElementById("vcomment");
  if (z == "") {
    zz.style.display="block";
    return false;
  }
  alert("Comment submited successfuly");
}

function changefname(){
  let xx= document.getElementById("vfname");
  xx.style.display="none";
}

function changelname(){
  let xx= document.getElementById("vlname");
  xx.style.display="none";
}

function changecomment(){
  let xx= document.getElementById("vcomment");
  xx.style.display="none";
}

function addToChart(){
  alert("Product added successfuly !")
}

//Contact validation
function validContact(){
  let x3= document.getElementById("fname").value;
  if (x3 == "") {
    alert("invalid");
    return false;
  }
}

//Search Bar
function search_animal() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('animals');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}

//Carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}