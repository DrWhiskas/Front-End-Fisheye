function photographerFactory(data) {
    const { name, portrait,city, country, tagline, price,id} = data;

    const picture = `assets/photographers/${portrait}`;



    function getUserCardDOM() {
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

        return (link);
    }
    return { name, picture, getUserCardDOM }

}