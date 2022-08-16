function oui() {
  const ouii = document.querySelectorAll(".portfolio__image");
  ouii.forEach((mediaPic) => {
    mediaPic.addEventListener("click", (e) => {
        const ouin = document.createElement("div")
        ouin.classList.add("targetPicture")
        const siuuu = e.target;
        const newxOui = document.createElement("img")
        newxOui.setAttribute("src",siuuu)
      console.log(e.target);
      console.log(newxOui);

    });
  });
  console.log("oui");
}
