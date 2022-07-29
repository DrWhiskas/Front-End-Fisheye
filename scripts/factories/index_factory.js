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