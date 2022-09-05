let p = 0;

function lightbox() {
  const images = document.querySelectorAll(".portfolio__image");
  let arrayImage = Array.from(images); // convertisseur en tableau
  const lightbox = document.createElement("section");
  lightbox.id = "lightbox";
  const lightboxContent = document.createElement("section");
  lightboxContent.id = "lightboxButton";
  lightboxContent.innerHTML = `
      <button class="lightbox__close" id="lightbox__close"><i class="fa-solid fa-xmark fa-2x"></i></button>
      <button class="lightbox__next" id="lightbox__next"><i class="fa-solid fa-angle-right fa-2x"></i></button>
      <button class="lightbox__prev" id="lightbox__prev"><i class="fa-solid fa-angle-left fa-2x"></i></button>
  `;
  document.body.appendChild(lightboxContent);
  const lightboxNext = document.getElementById("lightbox__next");
  const lightboxPrev = document.getElementById("lightbox__prev");
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
        video.classList.add("lightbox__image");
        video.src = image.src;
        lightbox.innerHTML=``;
        lightbox.appendChild(video)
      }else{
        img.src = image.src;
        lightbox.innerHTML = ``;
        lightbox.appendChild(img);
      }
    });
  });
  // EVENEMENT IMAGE SUIVANTES
  lightboxNext.addEventListener("click", (e) => {
    p++;
    let newArray = arrayImage[p].getAttribute("src");
    const newLighboxImage = document.querySelector(".lightbox__image");
    newLighboxImage.setAttribute("src", newArray);
    if(p == images.length -1){
      p = 0;
    }
  });

  // EVENEMENT IMAGE PRECEDENTE
  lightboxPrev.addEventListener("click", (e) => {
    p--;
    let newArray = arrayImage[p].getAttribute("src");
    const newLighboxImage = document.querySelector(".lightbox__image");
    newLighboxImage.setAttribute("src", newArray);
        if (p == 0) {
          p = images.length;
        }
  });
  // EVENEMENT FERMETURE DE LA LIGHTBOX
  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
    lightboxContent.classList.remove("active")

  });
  // KEYEVENT
  /*document.addEventListener("keydown", (e) => {
    const touchPress = e.key;
    console.log(touchPress, "uwu");
    if(touchPress === "ArrowRight"){
      p++
      console.log(p);
    }
  })
  */
}
