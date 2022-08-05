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

/*
function portfolioFactory(oui) {
    const { portrait,title, date, price,likes,photographerId,image} = oui;
    const picture = `assets/Sample Photos/${photographerId}/${image}`;
    console.log(picture)

    function getPhotographersPortfolio() {
        const link = document.createElement('article');
       link.innerHTML = `
            <div class ="portfolio">
                <a href="#" class ="portfolio__link">
                    <img class = "photograph_portfolio" src="${picture}">
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
/*
import * as indexPage from "./pages/index_page.js"
import * as indexFactory from "./index_factory.js"


indexPage.getPhotographers();


console.log("uwu",data.photographers)


*/

/*  async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        let myRequest = new Request("../data/photographers.json");
            fetch(myRequest)
            .then(res => res.json())
            .then(data => {
                const queryString = window.location.search;
                const urlParam = new URLSearchParams(queryString); 
                const newPhotographerId = urlParam.get('id');
                console.log(newPhotographerId);
                console.log(data);

                data.photographers.forEach(photographers => {
                    if(newPhotographerId == data.id){
                        displayData(data.photographers);
                }
                else{
                    console.log("2");
                }
                    
                });
                data.displayData(data.photographers);
            });

        //

    }*/

function photographFa(data2) {
  const { name, portrait, id, tagline, city, country } = data2;
  const userPicure = `assets/photographers/${portrait}`;

  function getContact() {
    const link = document.createElement("section");
    link.innerHTML = `
    <div class="contact">
        <div class="contact__information">
            <h2 class="contact__information__name">${data2.name}</h2>
            <h3 class="contact__information__city">${data2.city},${data2.country}</h3>
            <p class="contact__information__tag">${data2.tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        <div class="contact__picture">
            <img src="${portrait}>
    </div>
    

        `;
    return link;
  }
  return { getContact };
}
