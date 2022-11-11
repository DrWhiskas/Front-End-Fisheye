function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  const myRequest = new Request('../data/photographers.json');
  fetch(myRequest)
      .then((res) => res.json()) // convertisseur json => js
      .then((data) => {
        displayData(data.photographers);
      });
  return 0;
}

function displayData(photographers) {
  const photographersSection = document.querySelector(
      '.photographer__container');
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
getPhotographers();
