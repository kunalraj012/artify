import res from "express/lib/response";
// import { Result } from "postcss";
import { createApi } from "unsplash-js";
// import { photos } from "unsplash-js/dist/internals";

const main = document.querySelectorAll('#main');
const unsplash = createApi({
  accessKey:'000DvTexIa5o0rfXHeKlY66ZdmBh9xqnFNIlOqmmULU',
});

unsplash.search.getPhotos({
  query:'Classic Art',
  page:1,
  perPage:12,
  orientation:'portrait'
}).then(result => {
  if(result.type === 'success'){
    const photos = result.response.results;
    const getUrls = photos.map((i) => {
      return `<img src = "${i.urls.small}" />`;
    });
    main.innerhtml = getUrls.join('');

  }
});

