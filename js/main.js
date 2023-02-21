
$(document).ready(function() {
  var form = $(".login-form");
  var status = false;
  $("#login").click(function(event){
    event.preventDefault();
    if(status == false){
      form.fadeIn();
      status = true;
    }else {
      form.fadeOut();
      status = false;
    };  
  });
})

//   var slideIndex = 1;

// function showSlides(n){
// var i;
// var slides = document.getElementsByClassName(".child");

// for(i = 0; i < slides.length; i++){
// slides[i].style.display = "block";
// }

// if(n > slides.lenth){
// slideIndex = 1;
// }

// if(n<1){
// slideIndex = slides.length;
// }

// slides[slideIndex - 1].style.display = "block";

// }

// showSlides(1);

// function pulseSlides(n){
// slideIndex +=n;
// showSlides(slideIndex);
// }

// setInterval(pulseSlides, 3000, 1);

const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none":"block";
  arrowIcons[0].style.display = carousel.scrollLeft == scrollWidth ? "none":"block"
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", ()=>{
     carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
     setTimeout(()=> showHideIcons(),60);
  })
})

 
 const DragStart = (e) =>{
  isDragStart = true;
  prevPageX = e.pageX;
   isDragStart = true;
   prevScrollLeft = carousel.scrollLeft;
 }

 const dragging = (e) =>{
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  carousel.scrollLeft = e.pageX;
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
   showHideIcons();
   }

   const DragStop = ()=>{
    isDragStart = false;
     carousel.classList.remove("dragging");
   }

   carousel.addEventListener("mousedown",DragStart);
   carousel.addEventListener("mousemove",dragging);
   carousel.addEventListener("moseup", DragStop);

const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

const showHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none":"block";
  arrowIcons[0].style.display = carousel.scrollLeft == scrollWidth ? "none":"block"
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", ()=>{
     carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
     setTimeout(()=> showHideIcons(),60);
  })
})

 
 const DragStart = (e) =>{
  isDragStart = true;
  prevPageX = e.pageX;
   isDragStart = true;
   prevScrollLeft = carousel.scrollLeft;
 }

 const dragging = (e) =>{
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  carousel.scrollLeft = e.pageX;
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
   showHideIcons();
   }

   const DragStop = ()=>{
    isDragStart = false;
     carousel.classList.remove("dragging");
   }

   carousel.addEventListener("mousedown",DragStart);
   carousel.addEventListener("mousemove",dragging);
   carousel.addEventListener("moseup", DragStop);


