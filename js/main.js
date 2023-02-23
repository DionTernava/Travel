
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

function myFunction() {
  alert("You have been logged in");
}

anime.timeline({loop: true})
  .add({
    targets:'.list .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 1000,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.list',
    opacity: 0,
    duration: 2500,
    easing: "easeOutExpo",
    delay: 1000
  });



const images = document.querySelector(".images");
firstImg = images.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".scroll-icons i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = images.scrollWidth - images.clientWidth;

const showHideIcons = () => {
  arrowIcons[0].style.display = images.scrollLeft == 0 ? "none":"block";
  arrowIcons[0].style.display = images.scrollLeft == scrollWidth ? "none":"block"
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", ()=>{
     images.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
     setTimeout(()=> showHideIcons(),60);
  })
})
 
 // const DragStart = (e) =>{
 //  isDragStart = true;
 //  prevPageX = e.pageX;
 //   isDragStart = true;
 //   prevScrollLeft = images.scrollLeft;
 // }

 // const dragging = (e) =>{
 //  if (!isDragStart) return;
 //  e.preventDefault();
 //  images.classList.add("dragging");
 //  images.scrollLeft = e.pageX;
 //  let positionDiff = e.pageX - prevPageX;
 //  images.scrollLeft = prevScrollLeft - positionDiff;
 //   showHideIcons();
 //   }
 
 //   const DragStop = ()=>{
 //    isDragStart = false;
 //     images.classList.remove("dragging");
 //   }

 //   images.addEventListener("mousedown",DragStart);
 //   images.addEventListener("mousemove",dragging);
 //   images.addEventListener("moseup", DragStop);

