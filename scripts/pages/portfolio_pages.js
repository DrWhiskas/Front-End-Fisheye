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
          console.log(likeTotal);
        }
      });
      data.media.forEach((media) => {
        if (media.photographerId == photographerId) {
          likeTotal += media.likes;
          incrementValues(likeTotal);
          console.log(likeTotal);
        }
      });
      oui()

            //likeTotal+=P
      document.getElementById("photograph_likes").innerHTML = `
        <div class = "photograph_likes-content"">
          <p value="${likeTotal}" id="pls" onclick="sah()"> ${likeTotal} <i class="fa-solid fa-heart"></i></p>
          <p> ${pricePhotograph}€ /jour</p>
          </div>
      `;


    });
}

getNewMedia();

async function displayData(media) {
  const mediaSection = document.querySelector(".photograph_portfolio");
  const portfolioPicture = portfolioFactory(media);
  const userPictureDOM = portfolioPicture.getPhotographersPortfolio();
  mediaSection.appendChild(userPictureDOM);
}
