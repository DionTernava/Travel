const articles = [
  {
    title: "Exploring Tokyo",
    location: "Japan",
    content: "Japan is a country that is rich in culture and history, and one of its most vibrant cities is Tokyo. If you’re planning a trip to Tokyo, there are a number of things that you should consider doing. For instance, you can visit the famous Tsukiji Fish Market and experience a live tuna auction, or take a stroll through the serene Shinjuku Gyoen National Garden."
  },
  {
    title: "Hiking in Patagonia",
    location: "Argentina",
    content: "Patagonia is a region located in the southern part of South America, and is known for its rugged terrain and stunning natural beauty. One of the best ways to experience this area is by going on a hiking adventure. You can trek through the Torres del Paine National Park and see breathtaking mountain vistas, or hike to the Grey Glacier and witness the awe-inspiring beauty of ice fields and snowy peaks."
  }
];

function displayAllArticles() {
  const articlesContainer = document.querySelector("main");
  articlesContainer.innerHTML = "";

  articles.forEach((article) => {
    const articleElement = document.createElement("article");

    const titleElement = document.createElement("h2");
    titleElement.textContent = article.title;
    articleElement.appendChild(titleElement);

    const locationElement = document.createElement("h3");
    locationElement.textContent = article.location;
    articleElement.appendChild(locationElement);

    const contentElement = document.createElement("p");
    contentElement.textContent = article.content;
    articleElement.appendChild(contentElement);

    articlesContainer.appendChild(articleElement);
  });
}

function filterArticlesByLocation(location) {
  const filteredArticles = articles.filter((article) => article.location === location);

  const articlesContainer = document.querySelector("main");
  articlesContainer.innerHTML = "";

  filteredArticles.forEach((article) => {
    const articleElement = document.createElement("article");

    const titleElement = document.createElement("h2");
    titleElement.textContent = article.title;
    articleElement.appendChild(titleElement);

    const locationElement = document.createElement("h3");
    locationElement.textContent = article.location;
    articleElement.appendChild(locationElement);

    const contentElement = document.createElement("p");
    contentElement.textContent = article.content;
    articleElement.appendChild(contentElement);

    articlesContainer.appendChild(articleElement);
  });
}

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const location = event.target.textContent;
    filterArticlesByLocation(location);
  });
});

displayAllArticles();