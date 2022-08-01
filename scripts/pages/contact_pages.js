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