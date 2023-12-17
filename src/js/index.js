
import { createApi } from "unsplash-js";

const maincontent = document.querySelector('.container');
const unsplash = createApi({
  accessKey: '000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU',
});
unsplash.search.getPhotos({
  query:'All Types',
  page:1,
  perPage:100,
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


