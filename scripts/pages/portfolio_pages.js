function getNewMedia() {
  //fetch
  let myRequest = new Request("../data/photographers.json");
  fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
      const queryString = window.location.search;
      const urlParam = new URLSearchParams(queryString);
      const photographerId = urlParam.get("id");
      let likeTotal = 0;
      let pricePhotograph = 0;

      data.media.forEach((media) => {
        if (media.photographerId == photographerId) {
          displayData(media); // affiche les photos
        }
      });

      data.photographers.forEach((photographers) => {
        if (photographers.id == photographerId) {
          displayPhotographer(photographers);
          pricePhotograph += photographers.price;
          return pricePhotograph;
        }
      });
      data.media.forEach((media) => {
        if (media.photographerId == photographerId) {
        }
      });
      data.media.forEach((media) => {
        if (media.photographerId == photographerId) {
          likeTotal += media.likes;
        }
      });
      lightbox();

      // TRIER LES IMAGES
      const filterPhoto = document.querySelector("#filter-photo");
      filterPhoto.addEventListener("change", (e) => {
        const testT = e.target.value;
        if (testT == "popularity") {
          data.media.sort(function (a, b) {
            return a.likes - b.likes;
          });
        } else if (testT == "title") {
          // trier par titre
          data.media.sort(function (a, b) {
            if (a.title < b.title) {
              return -1;
            }
          });
        }
        else if(testT == "date"){
          data.media.sort((function (a,b){
            return new Date(b.date) - new Date(a.date)
          }))
        }
        const mediaList = document.querySelector(".photograph_portfolio");
        mediaList.innerHTML =``
        data.media.forEach((media)=>{
               if (media.photographerId == photographerId) {
                 displayData(media); // affiche les photos
                 //totallike(media);
               }
        })
          lightbox();
      });
      const totallikeContent = (document.getElementById(
        "photograph_likes"
      ).innerHTML = `
        <div class = "photograph_likes-content"">
          <p class="like-number" value="${likeTotal}" id="totallike"> ${likeTotal} </p>
          <i class="fa-solid fa-heart"></i>
          <p> ${pricePhotograph}€ /jour</p>
          </div>
      `);

    });

}
getNewMedia();
function displayData(media) {
  const mediaSection = document.querySelector(".photograph_portfolio");
  const portfolioPicture = portfolioFactory(media);
  const userPictureDOM = portfolioPicture.getPhotographersPortfolio();
  mediaSection.appendChild(userPictureDOM);
}
