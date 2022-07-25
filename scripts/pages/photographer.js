//Mettre le code JavaScript lié à la page photographer.html

//fetch données + listmedia => html => value url 

/*

async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        let myRequest = new Request("../data/photographers.json");
            fetch(myRequest)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                 displayData(data.photographers);
            });
        // et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})
        

    }

    async function getMedia() {
        // Penser à remplacer par les données récupérées dans le json
        let mRequest = new Request("../data/photographers.json");
            fetch(mRequest)
            .then(res => res.json())
            .then(data => {
                const queryString = window.location.search;
                const urlParam = new URLSearchParams(queryString); 
                const photographerId = urlParam.get('id');
                console.log(photographerId);

                data.media.forEach(media => {
                    if(media.photographerId == photographerId){
                        
                    }
                });
                console.log(data);
                 displayData(data.media);
            });
        return ({
            media: [...media, ...media, ...media]})
    }
    getMedia();
    

*/
    async function getNewMedia(){
        //fetch
        let myRequest = new Request("../data/photographers.json");
            fetch(myRequest)
            .then(response => response.json())
            .then(data => {
                const queryString = window.location.search;
                const urlParam = new URLSearchParams(queryString); 
                const photographerId = urlParam.get('id');
                console.log(photographerId);

                data.media.forEach(media =>{
                    if(media.photographerId == photographerId){
                        displayData(data.media);

                    }
                    else{
                        console.log("ERROR");
                    }

                });
                console.log(data);
            });
    }
     getNewMedia()

    async function displayData(media) {
            const mediaSection = document.querySelector(".photograph_portfolio");

            media.forEach((currentMedia) => {
                const portfolioPicture = portfolioFactory(currentMedia);
                const userPictureDOM = portfolioPicture.getPhotographersPortfolio();
                mediaSection.appendChild(userPictureDOM);
            });
        };
