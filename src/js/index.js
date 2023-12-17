import {createApi} from 'unsplash-js'

const accessKey = "vQMsVs2qIFA-STFTyhRgnYCOUL2UauZqwLotPJR6z8Q";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn"); 
const defaultcontent = document.getElementById("defaultcontent");




const unsplash = createApi({
  accessKey: '000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU',
});
unsplash.search.getPhotos({
  query:'Classic Art',
  page:1,
  perPage:20,
  orientation:'portrait',
}).then(result => {
  if (result.type === 'success') {
    const photos = result.response.results;
    console.log(photos);
    const getUrls = photos.map((i) => {
      return `<img src="${i.urls.small}" />`;
    });
    console.log(getUrls);
    defaultcontent.innerHTML = getUrls.join('');
  }
});


let keyword = "";
let page = 1;

async function searchImages(){
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=30`;

  const response = await fetch(url);
  const data = await response.json();

  if(page === 1){
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
  })
  showMoreBtn.style.display = "block";

}

searchForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  page = 1;
  searchImages();
})

showMoreBtn.addEventListener("click", ()=>{
  page++;
  searchImages();
})





const maincontent = document.querySelector('#main');





