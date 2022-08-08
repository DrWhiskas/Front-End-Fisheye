function getNewMedia() {
  //fetch
  let myRequest = new Request("../data/photographers.json");
  fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
      const queryString = window.location.search;
      const urlParam = new URLSearchParams(queryString);
      const photographerId = urlParam.get("id");
      let i = 0;
      data.media.forEach((media) => {
        if (media.photographerId == photographerId) {
          displayData(media); // affiche les photos         
          //displayLikes(media); // affiche le nombre de like total
        }
       /* if (media.photographerId !== photographerId) {
          console.log("sad");
        } else {
          console.log("ERROR");
        }*/
      });
      data.photographers.forEach((photographers) => {
        if (photographers.id == photographerId) {
          displayPhotographer(photographers);
        }

      });
      data.media.forEach((media => {
       if(media.photographerId == photographerId){
         console.log(likeTotal)
       }
      }))

    });
}

getNewMedia();

async function displayData(media) {
  const mediaSection = document.querySelector(".photograph_portfolio");
  const portfolioPicture = portfolioFactory(media);
  const userPictureDOM = portfolioPicture.getPhotographersPortfolio();
  mediaSection.appendChild(userPictureDOM);
}

// LIKES

async function displayLikes(media) {
  const likesSection = document.querySelector(".photograph_likes");
  const likesMultimedia = photographLikes(media);
  const likeDOM = likesMultimedia.getLikes();
  likesSection.appendChild(likeDOM);
}
