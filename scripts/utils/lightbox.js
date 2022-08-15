function oui() {
  const ouii = document.querySelectorAll(".portfolio__image");
  ouii.forEach((mediaPic) => {
    mediaPic.addEventListener("click", (e) => {
      console.log(e.target);
    });
  });
  console.log("oui");
}
