
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


import {createApi} from 'unsplash-js'

const maincontent = document.querySelector('#main');
const unsplash = createApi({
  accessKey: '000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU',
});
unsplash.search.getPhotos({
  query:'Classic Art',
  page:1,
  perPage:50,
  orientation:'portrait',
}).then(result => {
  if (result.type === 'success') {
    const photos = result.response.results;
    console.log(photos);
    const getUrls = photos.map((i) => {
      return `<img src="${i.urls.small}" />`;
    });
    console.log(getUrls);
    maincontent.innerHTML = getUrls.join('');
  }
});

 const accessKey = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your actual access key

    const searchImages = async () => {
      const query = document.getElementById('searchInput').value;
      const gallery = document.getElementById('gallery');

      try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`);
        const data = await response.json();

        if (data.results) {
          gallery.innerHTML = ''; // Clear previous results

          data.results.forEach(result => {
            const imageElement = document.createElement('div');
            imageElement.classList.add('image');
            imageElement.innerHTML = `<img src="${result.urls.small}" alt="${result.alt_description}">`;
            gallery.appendChild(imageElement);
          });
        } else {
          console.error('No results found');
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
