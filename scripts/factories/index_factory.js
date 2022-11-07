function photographerFactory(data) {
  const { name, portrait, city, country, id } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const link = document.createElement("article");
    link.className = "photographer__card";
    link.innerHTML = `
                <a href="photographer.html?id=${data.id}"> 
                    <div class="photographer__portrait">
                        <img src="${picture}" alt="${data.name}">
                    </div>
                    <h2 class="photographer__name">${data.name}</h2>
                </a>
                <div class="photographer__info">
                    <h3 class="photographer__info__localisation">${data.city}, ${data.country}</h3>
                    <p class="photographer__info__tagline">${data.tagline}</p>
                    <p class="photographer__info__price">${data.price}€/jour</p>
                </div>
        `;
    return link;
  }
  return { name, picture, getUserCardDOM };
}
