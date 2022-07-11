//Mettre le code JavaScript lié à la page photographer.html

//fetch données + listmedia => html => value url 



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
                console.log(data);
                 displayData(data.media);
            });
        return ({
            media: [...media, ...media, ...media]})
    }



    