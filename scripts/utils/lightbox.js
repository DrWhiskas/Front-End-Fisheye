let p = 0;

function lightbox() {
  const images = document.querySelectorAll(".portfolio__image");
  let arrayImage = Array.from(images); // convertisseur en tableau
  const lightbox = document.createElement("section");
  lightbox.id = "lightbox";
  const lightboxContent = document.createElement("section");
  lightboxContent.id = "lightboxButton";
  lightboxContent.innerHTML = `
      <button class="lightbox__close" id="lightbox__close"><i class="fa-solid fa-xmark fa-4x" aria-pressed="Close dialog"></i></button>
      <button class="lightbox__next" id="lightbox__next"><i class="fa-solid fa-angle-right fa-4x" aria-pressed="Next image"></i></button>
      <button class="lightbox__prev" id="lightbox__prev"><i class="fa-solid fa-angle-left fa-4x" aria-pressed="Previous image"></i></button>
  `;
  document.body.appendChild(lightboxContent);
  const lightboxNext = document.getElementById("lightbox__next");
  const lightboxPrev = document.getElementById("lightbox__prev");
  const lightboxClose = document.getElementById("lightbox__close");
  document.body.appendChild(lightbox);
  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      console.log(images);
      lightbox.classList.add("active");
      lightboxContent.classList.add("active");

      const img = document.createElement("img");
      img.classList.add("lightbox__image");
      p = arrayImage.indexOf(e.target);
      console.log(e.target.src);
      if (e.target.src === "") {
        const video = document.createElement("video");
        const source = document.createElement("source");
        video.setAttribute("controls", "true");
        source.src = image.firstElementChild.src;
        video.classList.add("lightbox__video");
        lightbox.innerHTML = ``;
        lightbox.appendChild(video);
        video.appendChild(source);
      } else {
        img.src = image.src;
        lightbox.innerHTML = ``;
        lightbox.appendChild(img);
      }
    });
  });
  // EVENEMENT IMAGE SUIVANTES

  lightboxNext.addEventListener("click", (e) => {
    p++;
    lightbox.innerHTML = ``;
    if (arrayImage[p].nodeName == "VIDEO") {
      const newVideo = document.createElement("video");
      const newSource = document.createElement("source");
      newVideo.classList.add("lightbox__video");
      let mediaSource = arrayImage[p].firstElementChild.getAttribute("src");
      newSource.setAttribute("src", mediaSource);
      // splt pour l'alt de la video
      const splitSource = arrayImage[p].src.split("/");
      const sourcePath = splitSource[splitSource.length - 1];
      newSource.setAttribute("alt", sourcePath);
      lightbox.appendChild(newVideo);
      newVideo.appendChild(newSource);
    } else {
      const newImg = document.createElement("img");
      let newArray = arrayImage[p].getAttribute("src");
      newImg.setAttribute("src", newArray);
      newImg.classList.add("lightbox__image");
      // splt pour l'alt de l'image
      const splitSource = arrayImage[p].src.split("/");
      const sourcePath = splitSource[splitSource.length - 1];
      newImg.setAttribute("alt", sourcePath);
      lightbox.appendChild(newImg);
    }

    if (p == images.length - 1) {
      p = 0;
    }
  });

  // EVENEMENT IMAGE PRECEDENTE
  lightboxPrev.addEventListener("click", (e) => {
    p--;
    lightbox.innerHTML = ``;
    if (arrayImage[p].nodeName == "VIDEO") {
      const newVideo = document.createElement("video");
      const newSource = document.createElement("source");
      newVideo.classList.add("lightbox__video");
      let mediaSource = arrayImage[p].firstElementChild.getAttribute("src");
      newSource.setAttribute("src", mediaSource);
      console.log(arrayImage[p]);
      lightbox.appendChild(newVideo);
      newVideo.appendChild(newSource);
    } else {
      const newImg = document.createElement("img");
      let newArray = arrayImage[p].getAttribute("src");
      newImg.setAttribute("src", newArray);
      newImg.classList.add("lightbox__image");
      lightbox.appendChild(newImg);
      console.log(arrayImage[p].nodeName);
    }
    if (p == 0) {
      p = images.length;
    }
  });
  // EVENEMENT FERMETURE DE LA LIGHTBOX
  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
    lightboxContent.classList.remove("active");
  });
  // EVENT BOUTON DE FERMETURE
  lightboxClose.addEventListener("click", (e) => {
    lightbox.classList.remove("active");
    lightboxContent.classList.remove("active");
  });

  document.addEventListener("keydown", (e) => {
    const touchPress = e.key;
    console.log(touchPress);
    if (touchPress === "ArrowRight") {
      p++;
      console.log(touchPress);
      arrayImage[p++];
    }
  });
}
