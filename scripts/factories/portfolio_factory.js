function portfolioFactory(media) {
  const { portrait, title, date, price, likes, photographerId, image, video } =
    media;
  const picture = `assets/Sample Photos/${photographerId}/${image}`;
  let like = media.likes;

  const videos = `assets/Sample Photos/${photographerId}/${video}`;

  function getPhotographersPortfolio() {
    const link = document.createElement("article");
    if (media.video) {
      link.innerHTML = `
            <div class ="portfolio">
                <div class ="portfolio__link">
                   <video class="portfolio__image" tabindex="3"><source src="${videos}" alt="${media.title}"></source></video> 
                </div>
                <div class="portfolio__info">
                    <h2>${media.title}</h2>
                    <div class="likes">
                        <h2>${like}</h2>
                        <div class="like__heart">
                            <i class="fa-solid fa-heart fa-2x" aria-label="likes" tabindex="3"></i>
                        </div>
                    </div>
            </div>
            `;
    } else {
      link.innerHTML = `
            <div class ="portfolio">
                <div class ="portfolio__link">
                    <img class = "portfolio__image" src="${picture}"alt="${media.title}" tabindex="3">
                </div>
                <div class="portfolio__info">
                    <h2>${media.title}</h2>
                    <div class="likes">
                        <h2 class="portfolio__likes">${like}</h2>
                        <div class="like__heart">
                            <i class="fa-solid fa-heart fa-2x" aria-label="likes" tabindex="3"></i>
                        </div>
                    </div>
            </div>
            `;
    }
    const godBless = link.querySelector(".like__heart");
    godBless.addEventListener("click", (e) => {
      let newLike = e.target.closest("div").previousElementSibling;
      const testLike = Number(newLike.innerText) + 1;
      newLike.innerText = testLike;
    });

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
    video,
  };
}
