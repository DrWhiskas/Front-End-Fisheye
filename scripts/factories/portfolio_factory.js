/*function getPhotographersId(data) {
    const { name, portrait, city,country,id } = data;
    console.log("oui",id);

}
getPhotographersId();
*/

function portfolioFactory(media) {
    const { portrait,title, date, price,likes,photographerId,image} = media;
    const picture = `assets/Sample Photos/${photographerId}/${image}`;
    console.log(picture)

    function getPhotographersPortfolio() {
        const link = document.createElement('article');
       link.innerHTML = `
            <div class ="portfolio">
                <img class = "portfolio__image" src="${picture}">
                <div class="portfolio__info">
                    <h2>${media.title}</h2>
                    <h2>${media.likes}</h2>
                </div>
            </div>
            `
        return (link);
    }
    return {media , getPhotographersPortfolio }

}
/*
class Portfolio {
    constructor(data){
        this.__photographerId = data.photographerId
        this.__title = data.title
        this.__image = data.image
        this.__likes = data.like
        this.__price = data.price
    }
    get title(){
        return this.__title
    }
    get photographerId(){
        return this.__photographerId
    }
    get likes(){
        return this.__likes
    }
    get image (){
        return `/asset/Sample Photos/${this.__photographerId}/${this.__image}`
    } 

    get price (){
        return this.__price
    }
}
*/