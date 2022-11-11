function photographFa(data2) {
  const {name, portrait, tagline, city, country} = data2;
  const userPicure = `assets/photographers/${portrait}`;

  function getContact() {
    const link = document.createElement('section');
    link.innerHTML = `
    <div class="contact">
        <div class="contact__information">
            <h2 class="contact__information__name">${name}</h2>
            <h3 class="contact__information__city">${city},${country}</h3>
            <p class="contact__information__tag">${tagline}</p>
        </div>
        <button
          id="contact__modal" 
          class="contact_button" 
          tabindex="1"
          onclick="displayModal()"
          aria-pressed="Contact me">
          Contactez-moi
        </button>
        <div class="contact__picture photographer__portrait">
            <img src="${userPicure}" alt="${name}">
    </div>
        `;
    const modalTitle = document.querySelector('.contact_modal__name');
    modalTitle.innerText = `Contactez-moi ${name}`;
    return link;
  }
  return {portrait, getContact};
}
