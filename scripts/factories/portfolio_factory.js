 function portfolioFactory(media) {
    const { portrait,title, date, price,likes,photographerId,image} = media;
    const picture = `assets/Sample Photos/${photographerId}/${image}`;
    console.log(picture)

    function getPhotographersPortfolio() {
        const link = document.createElement('article');
       link.innerHTML = `
            <div class ="portfolio">
                <a href="#" class ="portfolio__link">
                    <img class = "portfolio__image" src="${picture}">
                </a>
                <div class="portfolio__info">
                    <h2>${media.title}</h2>
                    <div class="likes">
                        <h2>${media.likes}</h2>
                        <div class="like__heart">
                            <i class="fa-regular fa-heart fa-2x standard"></i>
                            <i class="fa-solid fa-heart actif fa-2x"></i>

                        </div>
                    </div>
            </div>
            `
        return (link);
    }
    return {media , getPhotographersPortfolio }

}
