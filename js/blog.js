 // login popup
 $(document).ready(function() {
 	var form = $(".login-form");
 	var status = false;
 	$("#login").click(function(event) {
 		event.preventDefault();
 		if (status == false) {
 			form.fadeIn();
 			status = true;
 		} else {
 			form.fadeOut();
 			status = false;
 		};
 	});
 })

 // Get nav links
 const navLinks = document.querySelectorAll('nav a');

 //event listener to all nav links to mark active links
 navLinks.forEach(link => {
 	link.addEventListener('click', function() {
 		// remove the active class from all links
 		navLinks.forEach(link => link.classList.remove('active'));

 		// active class to clicked link
 		link.classList.add('active');
 	});
 });

 // blog post images
 const postImages = document.querySelectorAll('article img');

 // google maps iframe
 const maps = document.querySelectorAll('article iframe');

 // event listener for google maps on click
 maps.forEach(map => {
 	map.addEventListener('click', function() {
 		// zoom in-out
 		const zoomLevel = map.getAttribute('src').includes('?') ? '&z=14' : '?z=14';
 		map.src += zoomLevel;
 	});
 });