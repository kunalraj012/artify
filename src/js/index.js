import { createApi } from "unsplash-js";

const maincontent = document.querySelectorAll('#maincontent');
const unsplash = createApi({
  accessKey:"000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU",
});

unsplash.search.getPhotos({
  query:'Classic Art',
  page:1,
  perPage:12,
  orientation:'portrait',
}).then(result => {
  if(result.type === 'success'){
    const photos = result.response.results;
    const getUrls = photos.map((i) => {
      return `<img src="${i.urls.small}" />`;
    });
    maincontent.innerHTMl = getUrls.join('');
  }
});
