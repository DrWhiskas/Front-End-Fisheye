/*function oui() {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);
  const lightboxContent = document.getElementById("lightbox");
  const lightboxNav = document.createElement("div");
  lightboxNav.classList.add("lightbox__nav");
  lightboxContent.appendChild(lightboxNav);
  const image = document.querySelectorAll(".portfolio__image");
        console.log(image.length,"uwu");

  image.forEach((image) => {
    image.addEventListener("click", (e) => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      img.src = image.src;
      lightbox.innerHTML = `
        <div class="lightbox__nav" id="lightbox__nav"> <div> 
  `;
      console.log(image.length);
      lightbox.appendChild(img);
    });
  });
  let i = 0
  const next = document.getElementById("lightbox__nav");
  const nextContent = document.createElement("div");
  nextContent.id = "next"
  nextContent.innerHTML=`<div> oui</div>`
  nextContent.appendChild(nextContent);
  for(i = 0; i < image.length; i++){
    nextContent.addEventListener("click", (e) =>{
           console.log(image[i]);
    })
  }
  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
  });
}*/

/*function lightbox() {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);
  const lightboxImage = document.querySelectorAll(".portfolio__image");
  lightboxImage.forEach((lightboxImage) => {
    lightboxImage.addEventListener("click", (e) => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      img.src = lightboxImage.src;

      lightbox.innerHTML = `
      <button class="lightbox__close" id="lightbox__close"><i class="fa-solid fa-xmark fa-2x"></i></button>
      <button class="lightbox__next" id="lightbox__next"><i class="fa-solid fa-angle-right fa-2x"></i></button>
      <button class="lightbox__prev" id="lightbox__prev"><i class="fa-solid fa-angle-left fa-2x"></i></button>`;
      lightbox.appendChild(img);
      lightboxClose();
    });
    lightbox.addEventListener("click", (e) => {
      if (e.target !== e.currentTarget) return;
      lightbox.classList.remove("active");
    });
    function lightboxClose() {
      const lightboxClose = document.getElementById("lightbox__close");
      lightboxClose.addEventListener("click", (e) => {
        e.preventDefault();
        lightbox.classList.remove("active");
      });
    }
  });
}
*/
/*function lightbox() {
const img = document.querySelectorAll(".portfolio__image");


img.forEach(img => img.addEventListener("click", (e) => {
  console.log("uwu");
  img.id="current"
  const current = document.getElementById("current")
  const oui = current.src = e.target.src
  console.log(oui);

  const non = oui.nextElementSibling;
  console.log(non);



}))


}*/
let p = 0;
function lightbox() {
  const images = document.querySelectorAll(".portfolio__image");

  let arrayImage = Array.from(images);

  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  const gonext = document.getElementById("lightbox__next");
  document.body.appendChild(lightbox);
  images.forEach((image) => {
    image.addEventListener("click", (e) => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      img.classList.add("lightbox__image")
      console.log(images);
      p = arrayImage.indexOf(e.target);
      console.log(p, "ml");

      img.src = image.src;
      lightbox.appendChild(img);
    });
  });
  gonext.addEventListener("click", (e) => {
    p++;
    let newArray = arrayImage[p].getAttribute("src")
    console.log(newArray);
    console.log(p);
    const newLighboxImage = document.querySelector(".lightbox__image");
    newLighboxImage.setAttribute("src", newArray)

  });
}
