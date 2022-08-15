function portfolioFactory(media) {
  const { portrait, title, date, price, likes, photographerId, image } = media;
  const picture = `assets/Sample Photos/${photographerId}/${image}`;
  const video = `assets/Sample Photos/${photographerId}/${image}`;
  let oui = 0;

  console.log(picture);
  function getPhotographersPortfolio() {
    const link = document.createElement("article");
    link.innerHTML = `
            <div class ="portfolio">
                <a href="#" class ="portfolio__link">
                    <img class = "portfolio__image" src="${picture}">
                </a>
                <div class="portfolio__info">
                    <h2>${media.title}</h2>
                    <div class="likes">
                        <h2>${media.likes}</h2>
                        <div class="like__heart" onclick="incrementLikesValue(n)">
                            <i class="fa-solid fa-heart fa-2x"></i>
                        </div>
                    </div>
            </div>
            `;

    return link;
  }
  return {
    media,
    getPhotographersPortfolio,
    likes,
    price,
    date,
    title,
    portrait,
    picture,
  };
}


