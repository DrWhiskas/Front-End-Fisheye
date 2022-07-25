
function portfolioFactory(data) {
    const { id, portrait,title, date, price,likes,photographerId,image} = data;
    


    const picture = `assets/Sample Photos/${photographerId}/${image}`;



    function getPhotographersPortfolio() {
        const link = document.createElement('article');
       link.innerHTML = `
            <div class ="portfolio">
                    <img class="portfolio__picture" src="${picture}">
                <div class="image__info">
                    <h2>${data.title}</h2>
                    <h2>${data.likes}
                </div>
            </div>
            `

        return (link);
    }
    return {photographerId , picture, getPhotographersPortfolio }

}
