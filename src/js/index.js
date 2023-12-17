// import { response } from "msw";
import { createApi } from "unsplash-js";

const home = document.querySelector('#maincontent');
const category = document.querySelectorAll('.category');
const selected = document.querySelector('.selected');

let topic = "";
// function searchimg(){
//   const searchinput = document.getElementById('searchimg');
//   topic = searchinput.value;
//   console.log(topic);

//   getData();
// }

async function getData(){
  const responseData = await fetch('https://api.unsplash.com/search/photos/?query=' + input.value + '&per_page=20&client_id=000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU');
  const mainData = await responseData.JSON();
  const hits = mainData.hits;
  allimg.innerHTML = ``;

  document.getElementById('img_changer').innerHTML = `<img src="${hits[1].largeimageURL}" alt = "main-post/>`;

  for(let i=0;i<hits.length;i++){
    console.log(hits[i]);
    allimg.insertAdjacentHTML("afterbegin",
    `<li>
        <a href="${hits[i].largeImageURL}">
         <span id="tags">${hits[i].Tags}</span>
         <img src="${hits[i].previewURL}" alt="${hits[i].Tags}"/>
        </a>
      </li>`);
  }
}
getData();
console.log("function");

// picture selection
// const picture = [
//   {
//     url:
//     `https://api.unsplash.com/search/photos/?query=' +${Photography} + '&per_page=20&client_id=000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU`,
//     category:'Photography'
//   },
//   {
//     url:
//     `https://api.unsplash.com/search/photos/?query=' +${Animals} + '&per_page=20&client_id=000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU`,
//     category:'Animals'

//   },
//   {
//     url:
//     `https://api.unsplash.com/search/photos/?query=' +${Flower} + '&per_page=20&client_id=000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU`,
//     category:'Flower'

//   },
//   {
//     url:
//     `https://api.unsplash.com/search/photos/?query=' +${Nature} + '&per_page=20&client_id=000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU`,
//     category:'Nature'

//   },
//   {
//     url:
//     `https://api.unsplash.com/search/photos/?query=' +${Mountain} + '&per_page=20&client_id=000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU`,
//     category:'Mountain'
//   },
//   {
//     url:
//     `https://api.unsplash.com/search/photos/?query=' +${Daylight} + '&per_page=20&client_id=000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU`,
//     category:'Daylight'

//   },
//   {
//     url:
//     `https://api.unsplash.com/search/photos/?query=' +${NightOut} + '&per_page=20&client_id=000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU`,
//     category:'NightOut'
    
//   },
//   {
//     url:
//     `https://api.unsplash.com/search/photos/?query=' +${Computer} + '&per_page=20&client_id=000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU`,
//     category:'Computer'

//   },
// ];


const unsplash = createApi({
  accessKey: '000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU',
});
unsplash.search.getPhotos({
  query: 'modern art',
  page: 1,
  perPage: 50,
  orientation: 'portrait',
}).then(result => {
  if (result.type === 'success') {
    const photos = result.response.results;
    console.log(photos)
    const getUrls = photos.map((i) => {
      return `<img src="${i.urls.small}" />`;
    });
    // getUrls();
    console.log(getUrls);
    maincontent.innerHTML = getUrls.join('');
  }
});


//render picture based on category
const renderPicture = category => {
  picture.forEach(picture => {
    if(picture.category === category){
      const img = document.createElement('img');
      img.src = picture.url;
      img.srcset = picture.url;
      grid.appendChild(img);
    }
  });
};

renderPicture(selectedCategory);

//menu filter
category.forEach(category => {
  category.addEventListener('click',()=>{
    selectedCategory = category.innerText.toLowerCase();
    category.classList.add('selected');

    //rerender picture
    grid.innerHTML = '';
    renderPicture(selectedCategory);


  })
})



// import { Unsplash } from "./src/unsplash/Unsplash.js";
// import dotenv from 'dotenv';
// dotenv.config();

// const unsplash = new Unsplash(process.env.UNSPLASH_KEY);
// await unsplash.getPhoto('file', 'coding on laptop');











































const input = document.getElementById('input');
input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter')
    loadImg();

})

function loadImg() {
  removeImg();

  const url = 'https://api.unsplash.com/search/photos/?query=' + input.value + '&per_page=20&client_id=000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU';


  fetch(url)

    .then(response => {
      if (response.ok) {
        console.log(response);
        return response.json();
      }
      else
        alert(response.status)
    })


    .then(data => {
      const imageList = [];
      console.log(imageList);
      for (let i = 0; i < data.results.length; i++) {
        imageList[i] = document.createElement('div');
        imageList[i].className = 'img';
        imageList[i].style.backImg = 'url(' + data.results[i].urls.raw + ')';
        imageList[i].addEventListener('dblclick', function () {
          window.open(data.results[i].links.download, '_blank');
        })
        maincontent.appendChild(imageList[i]);
      }
    })

}


function removeImg() {
  maincontent.innerHTML = '';
}


const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formEl = document.querySelector("maincontent");
const searchInputEl = document.getElementById("input");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = searchInputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResultsEl.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultsEl.appendChild(imageWrapper);
  });

  page++;

  if (page > 1) {
    showMoreButtonEl.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMoreButtonEl.addEventListener("click", () => {
  searchImages();
});
