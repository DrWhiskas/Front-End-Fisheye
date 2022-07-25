
   
   
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
                    if(media.photographerId !== photographerId){
                        console.log("sad");
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
