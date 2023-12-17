const accessKey = "RSCD7MWzGD-ExXxaSQvIk3iR8JDXyWejSucGw73HGqQ";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const defaultContent = document.getElementById("search-result");

let keyword = "";
let page = 1;


// Function to fetch and display random images on page load
async function showRandomImages() {
  const randomUrl = `https://api.unsplash.com/photos/random?count=30&client_id=${accessKey}`;

  try {
    const response = await fetch(randomUrl);
    const data = await response.json();

    data.forEach((result) => {
      const randomImage = document.createElement("img");
      randomImage.src = result.urls.small;
      defaultContent.appendChild(randomImage);
    });
  } catch (error) {
    console.error("Error fetching random images:", error);
  }
}

// Function to search and display images
async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=30`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
    console.log(searchResult);
  });
  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});


// Call the function to show random images on page load
showRandomImages();
