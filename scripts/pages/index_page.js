function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  let myRequest = new Request("../data/photographers.json");
  fetch(myRequest)
    .then((res) => res.json())
    .then((data) => {
      displayData(data.photographers);
    });
}

function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer__container");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
