function createMedia(src, cible, array, count, isVideo) {
  // Crée un élément vidéo ou image en fonction du paramètre isVideo
  const mediaElement = isVideo ?
  document.createElement('video'):
  document.createElement('img')
  if (isVideo) {
    // crée un élément source et configure les attributs nécessaires
    const source = document.createElement('source');
    mediaElement.setAttribute('controls', 'true');
    source.src = src;
    mediaElement.classList.add('lightbox__video');
    mediaElement.appendChild(source);
  } else {
    // configure le src de l'élément image et ajoute une classe CSS
    mediaElement.src = src;
    mediaElement.classList.add('lightbox__image');
  }

  // Efface le contenu précédent de la cible
  cible.innerHTML = '';
  // Crée un élément pour le titre de la lightbox
  const newTitle = document.createElement('div');
  newTitle.className = 'lightbox__title';
  const lightboxTitle =
array[p].closest('div').nextElementSibling.firstElementChild.innerText;
  // Insère le titre dans l'élément créé
  newTitle.innerHTML = `<h1 class='${
  isVideo ? 'video' : 'image'
  }__title'>${lightboxTitle}</h1>`;
  mediaElement.setAttribute('alt', lightboxTitle);
  // Ajoute l'élément multimédia et le titre à la cible
  cible.appendChild(mediaElement);
  cible.appendChild(newTitle);
  // Renvoie l'élément multimédia créé
  return mediaElement, newTitle;
}
function closeLightbox(lightbox, content) {
  lightbox.classList.remove('active');
  content.classList.remove('active');
}
