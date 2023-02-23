 // Log-in popup form submit
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

// Get the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to each navigation link to highlight the active link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove the active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the active class to the clicked link
    link.classList.add('active');
  });
});

// Get the blog post images
const postImages = document.querySelectorAll('article img');

// Add an event listener to each post image to display a lightbox when clicked
postImages.forEach(image => {
  image.addEventListener('click', function() {
    // Create a new lightbox element
    // const lightbox = document.createElement('div');
    // lightbox.classList.add('lightbox');

    // Create a new image element inside the lightbox
    const lightboxImage = document.createElement('img');
    lightboxImage.src = image.src;
    lightbox.appendChild(lightboxImage);

    // Add the lightbox to the page
    document.body.appendChild(lightbox);

    // Add an event listener to the lightbox to remove it when clicked
    lightbox.addEventListener('click', function() {
      document.body.removeChild(lightbox);
    });
  });
});

// Get the Google Maps iframes
const maps = document.querySelectorAll('article iframe');

// Add an event listener to each Google Map iframe to zoom in when clicked
maps.forEach(map => {
  map.addEventListener('click', function() {
    // Increase the zoom level of the map
    const zoomLevel = map.getAttribute('src').includes('?') ? '&z=14' : '?z=14';
    map.src += zoomLevel;
  });
});