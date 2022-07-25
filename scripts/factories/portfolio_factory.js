/*function getPhotographersId(data) {
    const { name, portrait, city,country,id } = data;
    console.log("oui",id);

}
getPhotographersId();
*/

/*
function portfolioFactory(media) {
    const { portrait,title, date, price,likes,photographerId,image} = media;
    const myPhotographerId = photographerId;
    console.log("non",myPhotographerId)

    function getPhotographersPortfolio() {
        const link = document.createElement('article');
       link.innerHTML = `
            <div class ="portfolio">
                <div class="image__info">
                    <h2>${media.title}</h2>
                    <h2>${media.likes}
                </div>
            </div>
            `

        return (link);
    }
    return {photographerId , getPhotographersPortfolio }

}
*/

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