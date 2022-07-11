function photographerFactory(data) {
    const { name, portrait,city, country, tagline, price,id} = data;

    const picture = `assets/photographers/${portrait}`;



    function getUserCardDOM() {
        const article = document.createElement( 'article');
        const link = document.createElement('a');
        link.innerHTML = `
            <article class ="photographer__card">
                <a href="photographer.html?id=${data.id}"> 
                    <img class="photographer__portrait" src="${picture}">
                </a>
                <div class="photographer__info">
                    <h2>${data.name}</h2>
                    <h3 class="photographer__info__localisation">${data.city}, ${data.country}</h3>
                    <p class="photographer__info__tagline">${data.tagline}</p>
                    <p class="photographer__info__price">${data.price}€/jour</p>
                </div>
                </article>
            `
/*
        // PICTURE
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        // CITY
        const card = document.createElement('h3'); 
        card.textContent= city + " ," + country ;
        card.classList.add ("oui");

        card.style.margin = "0";
        // TAGLINE
        const nTag = document.createElement('h3'); 
        nTag.textContent = tagline;
        nTag.style.margin = "0";
        //PRICE    
        const nPrice = document.createElement('h3'); 
        nPrice.textContent = price + "€/jour";
        nPrice.style.margin = "0";
        nPrice.style.color = "lightgray";

        console.log(data.id);
*/
        // DISPLAY
        article.appendChild(link);
        /*
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(card);
        article.appendChild(nTag);
        article.appendChild(nPrice);

*/
        return (article);
    }
    return { name, picture, getUserCardDOM }
   /*
    function photographerCard() {
    const card =`
        <article clas="photographer>
            <a href="photographer.html?id=${data.id}">
                <img src="${data.picture}">
                </a>
        </article>        
    `
    }
    */
}

