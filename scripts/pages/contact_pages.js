// prendre les data de photogrtaphers

  /*  async function getNewPhotographer(){
        //fetch
        let myRequest = new Request("../data/photographers.json");
            fetch(myRequest)
            .then(response => response.json())
            .then(data => {
                const queryString = window.location.search;
                const urlParam = new URLSearchParams(queryString); 
                const photographerId = urlParam.get('id');
                console.log(photographerId);
                

                data.photographers.forEach(photographer =>{
                    if(data.id == photographerId){
                        displayData(data);

                    }
                    if(data.id !== photographerId){
                        console.log("sad");
                    }
                    else{
                        console.log("ERROR");
                    }

                });
                console.log("uwu",data);
            });
    }
     getNewPhotographer()

     async function displayData(data) {
            const contactSection = document.querySelector(".photograph-header");

           
                const contactPicture = contactFactory(data);
                const contactDOM = contactPicture.getNewPhotographer();
                contactSection.appendChild(contactDOM);

        };*/

       /* function contact(){
            const contactSelect = document.querySelector(".photograph-header");
            contactSelect.appendChild(contactDOM);
        };
        function non(){

            function testX(){
                const oui = document.createElement('section');
                oui.innerHTML = `
                    <article>
                        <p> oui du non </p>
                `
                return(oui)
            }
            return {testX}
    }
*/

     /*   async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        let myRequest = new Request("../data/photographers.json");
            fetch(myRequest)
            .then(res => res.json())
            .then(data2 => {
                 const queryString = window.location.search;
                const urlParam = new URLSearchParams(queryString); 
                const photographerId = urlParam.get('id');
                console.log(photographerId);

                data2.photographers
                console.log(data2);
                /*data2.photographers.forEach( photographers=>{
                    if (photographers.id ==photographerId ){
                        displayData(photographers);
                    }
            });
    });
}
    getPhotographers();
*/
    async function displayPhotographer(photographers) {
      const contactSection = document.querySelector(".photograph-header");
      const contactPicture = photographFa(photographers);
      const contactDOM = contactPicture.getContact();
      contactSection.appendChild(contactDOM);
    }
