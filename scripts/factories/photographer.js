function photographerFactory(data) {
    const { name, portrait,city, country, tagline, price} = data;

    const picture = `assets/photographers/${portrait}`;



    function getUserCardDOM() {
        const article = document.createElement( 'article');
        // PICTURE
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        // CITY
        const card = document.createElement('h3'); 
        card.textContent= city + " ," + country ;
        card.style.color = "darkred";

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

        // DISPLAY
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(card);
        article.appendChild(nTag);
        article.appendChild(nPrice);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}

