let eventListener = false 
let eventListenerPrev = false
let eventListenerKeyPrev = false
let p = 0;
/* CREATION DE LA LIGHTBOX */
function lightbox() {
  const lightbox = document.getElementById("lightbox");
  let images = document.querySelectorAll(".portfolio__image");
  let arrayImage = Array.from(images); // convertisseur en tableau
  const lightboxContent = document.getElementById("lightboxButton");
  const lightboxNext = document.getElementById("lightbox__next");
  const lightboxPrev = document.getElementById("lightbox__prev");
  const lightboxClose = document.getElementById("lightbox__close");
  document.body.appendChild(lightbox);
  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      lightbox.classList.add("active");
      lightboxContent.classList.add("active");
      const img = document.createElement("img");
      img.classList.add("lightbox__image");
      p = arrayImage.indexOf(e.target);
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
        const newTitle = document.createElement("div");
        newTitle.className = "lightbox__title";
        let lightboxTitle =
          arrayImage[p].closest("div").nextElementSibling.firstElementChild
            .innerText;
        newTitle.innerHTML = `<h1>${lightboxTitle}</h1>`;
        lightbox.appendChild(newTitle);
        lightbox.appendChild(img);
      }
    });
  });
  if(eventListenerKeyPrev != true){
    eventListenerKeyPrev = true
  document.addEventListener("keydown", (e) => {
    const touchPress = e.key;
    if (touchPress == "ArrowLeft") {
      eventListenerKeyPrev = true;
      lightboxPrevMedia();
    } else if (touchPress == "ArrowRight") {
      lightboxNextMedia();
    } else if (touchPress == "Escape") {
      lightboxCloseMedia();
    } else {
      console.log("error");
    }
  });
}
  // EVENEMENT IMAGE SUIVANTES
  if (eventListener != true){
      eventListener = true

    lightboxNext.addEventListener("click", (e) => {
      images = document.querySelectorAll(".portfolio__image");
       arrayImage = Array.from(images); // convertisseur en tableau
      p++;
      if (p >= images.length) {
        p = 0;
      }
      lightbox.innerHTML = ``;

      if (arrayImage[p].nodeName == "VIDEO") {
        const newVideo = document.createElement("video");
        const newSource = document.createElement("source");
        newVideo.setAttribute("controls", "true");
        newVideo.classList.add("lightbox__video");
        let mediaSource = arrayImage[p].firstElementChild.getAttribute("src");
        newSource.setAttribute("src", mediaSource);
        const splitSource = arrayImage[p].src.split("/");
        const sourcePath = splitSource[splitSource.length - 1];
        newSource.setAttribute("alt", sourcePath);
        const newTitle = document.createElement("div")
         newTitle.className = "lightbox__title";
        let lightboxTitle = arrayImage[p].closest("div").nextElementSibling.firstElementChild.innerText
         newTitle.innerHTML = `<h1>${lightboxTitle}</h1>`;
         lightbox.appendChild(newTitle);
        lightbox.appendChild(newVideo);
        newVideo.appendChild(newSource);
      } else {
        const newImg = document.createElement("img");
        let newArray = arrayImage[p].getAttribute("src");
        newImg.setAttribute("src", newArray);
        newImg.classList.add("lightbox__image");
        const splitSource = arrayImage[p].src.split("/");
        const sourcePath = splitSource[splitSource.length - 1];
        newImg.setAttribute("alt", sourcePath);
         const newTitle = document.createElement("div");
         newTitle.className= "lightbox__title"
        let lightboxTitle = arrayImage[p].closest("div").nextElementSibling.firstElementChild.innerText
         newTitle.innerHTML = `<h1>${lightboxTitle}</h1>`;
         lightbox.appendChild(newTitle);
        lightbox.appendChild(newImg);
      }
    });
  }

  // EVENEMENT IMAGE PRECEDENTE
  if (eventListenerPrev != true) {
    eventListenerPrev = true;
    lightboxPrev.addEventListener("click", (e) => {
    images = document.querySelectorAll(".portfolio__image");
    arrayImage = Array.from(images); // convertisseur en tableau
    p--;
    if (p < 0) {
      p = images.length -1;
    }
      lightbox.innerHTML = ``;
      if (arrayImage[p].nodeName == "VIDEO") {
        const newVideo = document.createElement("video");
        newVideo.setAttribute("controls", "true");
        const newSource = document.createElement("source");
        newVideo.classList.add("lightbox__video");
        let mediaSource = arrayImage[p].firstElementChild.getAttribute("src");
        newSource.setAttribute("src", mediaSource);
        const splitSource = arrayImage[p].src.split("/");
        const sourcePath = splitSource[splitSource.length - 1];
        newSource.setAttribute("alt", sourcePath);
        const newTitle = document.createElement("div");
        newTitle.className = "lightbox__title";
        let lightboxTitle = arrayImage[p].closest("div").nextElementSibling.firstElementChild.innerText
        newTitle.innerHTML = `<h1>${lightboxTitle}</h1>`;
        lightbox.appendChild(newTitle);
        lightbox.appendChild(newVideo);
        newVideo.appendChild(newSource);
      } else {
        const newSource = document.createElement("source");
        const newImg = document.createElement("img");
        let newArray = arrayImage[p].getAttribute("src");
        newImg.setAttribute("src", newArray);
        newImg.classList.add("lightbox__image");
        const splitSource = arrayImage[p].src.split("/");
        const sourcePath = splitSource[splitSource.length - 1];
        newSource.setAttribute("alt", sourcePath);
        const newTitle = document.createElement("div");
        newTitle.className = "lightbox__title";
        let lightboxTitle = arrayImage[p].closest("div").nextElementSibling.firstElementChild.innerText
        newTitle.innerHTML = `<h1>${lightboxTitle}</h1>`;
        lightbox.appendChild(newTitle);
        lightbox.appendChild(newImg);
      } 
    });
  }
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

  function lightboxPrevMedia() {
    images = document.querySelectorAll(".portfolio__image");
    arrayImage = Array.from(images); // convertisseur en tableau
    p--;
    if (p < 0) {
      p = images.length - 1;
    }
    lightbox.innerHTML = ``;
    if (arrayImage[p].nodeName == "VIDEO") {
      const newVideo = document.createElement("video");
      const newSource = document.createElement("source");
      newVideo.setAttribute("controls", "true");
      newVideo.classList.add("lightbox__video");
      let mediaSource = arrayImage[p].firstElementChild.getAttribute("src");
      newSource.setAttribute("src", mediaSource);
      const splitSource = arrayImage[p].src.split("/");
      const sourcePath = splitSource[splitSource.length - 1];
      newSource.setAttribute("alt", sourcePath);
      const newTitle = document.createElement("div");
      newTitle.className = "lightbox__title";
      let lightboxTitle = arrayImage[p].closest("div").nextElementSibling.firstElementChild.innerText;
      newTitle.innerHTML = `<h1>${lightboxTitle}</h1>`;
      lightbox.appendChild(newTitle);
      lightbox.appendChild(newVideo);
      newVideo.appendChild(newSource);
    } else {
      const newSource = document.createElement("source");
      const newImg = document.createElement("img");
      let newArray = arrayImage[p].getAttribute("src");
      newImg.setAttribute("src", newArray);
      newImg.classList.add("lightbox__image");
      const splitSource = arrayImage[p].src.split("/");
      const sourcePath = splitSource[splitSource.length - 1];
      newSource.setAttribute("alt", sourcePath);
      const newTitle = document.createElement("div");
      newTitle.className = "lightbox__title";
      let lightboxTitle = arrayImage[p].closest("div").nextElementSibling.firstElementChild.innerText;
      newTitle.innerHTML = `<h1>${lightboxTitle}</h1>`;
      lightbox.appendChild(newTitle);
      lightbox.appendChild(newImg);
    }
  }
  function lightboxNextMedia() {
    images = document.querySelectorAll(".portfolio__image");
    arrayImage = Array.from(images); // convertisseur en tableau
    p++;
    lightbox.innerHTML = ``;
    if (p >= images.length) {
      p = 0;
    }
    if (arrayImage[p].nodeName == "VIDEO") {
      const newVideo = document.createElement("video");
      const newSource = document.createElement("source");
      newVideo.setAttribute("controls", "true");
      newVideo.classList.add("lightbox__video");
      let mediaSource = arrayImage[p].firstElementChild.getAttribute("src");
      newSource.setAttribute("src", mediaSource);
      const splitSource = arrayImage[p].src.split("/");
      const sourcePath = splitSource[splitSource.length - 1];
      newSource.setAttribute("alt", sourcePath);
      const newTitle = document.createElement("div");
      newTitle.className = "lightbox__title";
      let lightboxTitle = arrayImage[p].closest("div").nextElementSibling.firstElementChild.innerText
      newTitle.innerHTML = `<h1>${lightboxTitle}</h1>`;
      lightbox.appendChild(newTitle);
      lightbox.appendChild(newVideo);
      newVideo.appendChild(newSource);
    } else {
      const newImg = document.createElement("img");
      let newArray = arrayImage[p].getAttribute("src");
      newImg.setAttribute("src", newArray);
      newImg.classList.add("lightbox__image");
      const splitSource = arrayImage[p].src.split("/");
      const sourcePath = splitSource[splitSource.length - 1];
      newImg.setAttribute("alt", sourcePath);
      const newTitle = document.createElement("div");
      newTitle.className = "lightbox__title";
      let lightboxTitle = arrayImage[p].closest("div").nextElementSibling.firstElementChild.innerText
      newTitle.innerHTML = `<h1>${lightboxTitle}</h1>`;
      lightbox.appendChild(newTitle);
      lightbox.appendChild(newImg);
    } 
  }
  function lightboxCloseMedia() {
    lightbox.classList.remove("active");
    lightboxContent.classList.remove("active");
  }
}
