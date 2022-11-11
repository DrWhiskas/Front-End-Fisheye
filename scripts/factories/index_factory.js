/**
 * 
 * @param {*} data 
 * @returns 
 */
function photographerFactory(data) {
  const {name, portrait, city, country, tagline, price, id} = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const link = document.createElement('article');
    link.className = 'photographer__card';
    link.innerHTML = `
                <a href="photographer.html?id=${id}"> 
                    <div class="photographer__portrait">
                        <img src="${picture}" alt="${name}">
                    </div>
                    <h2 class="photographer__name">${name}</h2>
                </a>
                <div class="photographer__info">
                    <h3 class="photographer__info__localisation">
                      ${city}, ${country}
                    </h3>
                    <p class="photographer__info__tagline">${tagline}</p>
                    <p class="photographer__info__price">${price}€/jour</p>
                </div>
        `;
    return link;
  }
  return {name, picture, getUserCardDOM};
}
