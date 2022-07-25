function portfolioFactory(data) {
    const { name, portrait,title, country, tagline, price,id} = data;

    const picture = `assets/photographers/${portrait}`;



    function getPhotographersPortfolio() {
        const link = document.createElement('a');
        link.innerHTML = `
            <article class ="photographer__card">
                <a href="photographer.html?id=${data.id}"> 
                    <img class="photographer__portrait" src="${picture}">
                </a>
                <div class="photographer__info">
                    <h2>${data.name}</h2>
                    <h3 class="photographer__info__localisation">${data.title}, ${data.title}</h3>
                    <p class="photographer__info__tagline">${data.likes}</p>
                    <p class="photographer__info__price">${data.likes}€/jour</p>
                </div>
                </article>
            `

        return (link);
    }
    return { name, picture, getPhotographersPortfolio }

}
