var slideIndex = 1;

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");

	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}

<<<<<<< HEAD
	if(n > slides.length){
=======
	if(n >  slides.length){
>>>>>>> 11e2b278a966abd1861d2b6b71319d679440f696
		slideIndex = 1;
	}

	if(n<1){
		slideIndex = slides.length;
	}

	slides[slideIndex - 1].style.display = "block";

}

showSlides(1);

function pulseSlides(n){
	slideIndex +=n;
	showSlides(slideIndex);
}

setInterval(pulseSlides, 2000, 1);