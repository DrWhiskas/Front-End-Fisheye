async function displayPhotographer(photographers) {
  const contactSection = document.querySelector('.photograph-header');
  const contactPicture = photographFa(photographers);
  const contactDOM = contactPicture.getContact();
  contactSection.appendChild(contactDOM);
}
