<--------------------------------------Artify Image Gallery-------------------------------------># 
Team Name ----------------Enemy of Syntax
--------------------------------------------Team Member-----------------
 1-> Gaurav Shukla (Team Leader) 
             linkdin : [https://www.linkedin.com/in/gaurav-shukla-1656a728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app]
              github:[https://github.com/gauravshukla111]

 2->Kunal Raj        
  linkdin:[https://www.linkedin.com/in/kunal-raj-64156a236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app]
    github:[https://github.com/kunalraj012]


<<<<<<< Updated upstream
 3->shubham kumar      
          linkdin:[https://www.linkedin.com/in/shubham-kumar-783581166/]
          github:[https://github.com/starchastag]

 4-> Naman Singh 
          linkdin:[https://www.linkedin.com/in/naman-singh-852b58291/]
          Github: [https://github.com/Lawliet-19?fbclid=PAAaYQtid4R1oXSQT0oy9K6qG8Sy12QjAZVT3IGvFMyElkadT_DOOjWJnRxB4]
=======
 3->Shubham kumar      
          linkdin:[https://www.linkedin.com/in/shubham-kumar-783581166/]
          github:[https://github.com/starchastag]

4->Naman Singh 
               linkdin:[]
               github:[]
>>>>>>> Stashed changes

<---------------------------------------Check out the live Demo-------------------------------------->  

- (https://visionary-stardust-dc6858.netlify.app/)




<-------------------------------------------Overview--------------------------------------------------->

1. [Installation](#installation)
2. [Usage](#usage)
3. [Hosting](#hosting)
4. [Configuration](#configuration)



<---------------------------------------------Features:----------------------------------------------->                              
* Responsive layout suitable for any device .
* Search any type of images.
* Download the images.
* Home page contains Randomly Images.

## Installation
  
This is the official base template for Create Knowledgehut JS Library.

If you don't specify a template (for example, --template typescript), this template will be used by default.

For more information, please refer to:

    Getting Started – How to create a new app.
    User Guide – How to develop apps bootstrapped with Create React App.


<---------------------------------Example Usage-------------------------------------------------------> 

you can clone this repo on github  [https://github.com/kunalraj012/artify.git]  
and follow these step--
* npm install or [npm @knowledgehut/create-js-app]
* npm install unsplash-js
* npm run dev



<---------------------------------------------unsplsh api --------------------------------------------->
1.open unsplash developer or used this link [https://unsplash.com/developers]
2.signup 
3.create your api on your apps 
4.get access key


<---------------------------------------------get url from unsplash api ------------------------------->

const accessKey = "RSCD7MWzGD-ExXxaSQvIk3iR8JDXyWejSucGw73HGqQ";  //store access in variable
<<<<<<< Updated upstream
 const url = https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=30;
=======
 const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=30`;
>>>>>>> Stashed changes
  >>>>>>>fetching url              
  const response = await fetch(url);

  >>>>>>>>>>>>>>>>>>>>> get data from api in json format
  const data = await response.json();

<<<<<<< Updated upstream
<---------------------------------------------------------------Random Image Loaded------------------------------------------------------------>
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
<---------------------------------------------------------------Search Box Function------------------------------------------------------------>
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
=======

> Your photos are copied in `src/images/photos`.
>>>>>>> Stashed changes

4. Optionally, you can directly publish the gallery on surge [surge] or [Netlify](https://www.netlify.com/), which offers a free plan. surge instalation by commond
                       -- npm install --global surge

and open commond prompt with project path - then type      - surge
1.input email
2.input password
3.verify project path
4.get ip to your projects


## Hosting

You can automatically upload the gallery to [Netlify](https://www.netlify.com/).

For Netlify you just need a free account and then you can run the following command to upload to a new website.
<<<<<<< Updated upstream

gallery-upload netlify

=======
```
gallery-upload netlify
```
>>>>>>> Stashed changes


You can upload your gallery manually on any static hosting provider,[GitHub Pages](https://pages.github.com/), [Netlify](https://www.netlify.com/) or others. Some scripts for automatic upload of the gallery are under work.


<------------------------------------------------About-------------------------------------------------> 

This is a  Image Gallery Website Named - Artify 

its created using HTML5 and CSS3 Also JavaScript . Images data comes from unsplash api 

User search images on topic or catgeory based and get results

User also download the images or save the images .

<<<<<<< Updated upstream
This is Responsive website
=======
This is Responsive website 



















>>>>>>> Stashed changes
