/*import * as non from "../pages/index_page.js"

non.getPhotographers();

async function displayData(photographers) {
    const photoSelc
}*/
/*
    function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        let myRequest = new Request("../data/photographers.json");
            fetch(myRequest)
            .then(res => res.json())
            .then(data => {
                const queryString = window.location.search;
                const urlParam = new URLSearchParams(queryString); 
                const photographerId = urlParam.get('id');
                console.log(photographerId,"uwu");

                data.photographers.forEach(photographers => {
                    if(photographers.id == photographerId){
                        console.log("owo")
                        displayData(photographers)
                    }
                    else{
                        console.log("lol")
                    }
                    
                });
            });

        // et bien retourner le tableau photographers seulement une fois

    }
    getPhotographers();

     async function displayData(photographers) {
        const photographersSection = document.querySelector(".photograph_portfolio");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };



// PARTIE AFFICHAGE DU HTML

function photographerFactory(data) {
    const { name, portrait, city,country,id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const link = document.createElement('a');
        link.innerHTML = `
            <article class ="photographer__card">
                <a href="photographer.html?id=${data.id}"> 
                    <div class="photographer__portrait">
                        <img src="${picture}">
                    </div>
                    <h2 class="photographer__name">${data.name}</h2>
                </a>
                <div class="photographer__info">
                    <h3 class="photographer__info__localisation">${data.city}, ${data.country}</h3>
                    <p class="photographer__info__tagline">${data.tagline}</p>
                    <p class="photographer__info__price">${data.price}€/jour</p>
                </div>
            </article>        
        `
        return (link)
    }
    return { name, picture, getUserCardDOM }
}
*/
/*
    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        let myRequest = new Request("../data/photographers.json");
            fetch(myRequest)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                 displayData(data.photographers);
            });

        // et bien retourner le tableau photographers seulement une fois

    }

     async function displayData(photographers) {
        const photographersSection = document.querySelector(".photograph_portfolio");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

     async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();


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
                    <h2>${media.likes}</h2>
                </div>
            </div>
            `
        return (link);
    }
    return {media , getPhotographersPortfolio }

}

*/
