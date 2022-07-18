/*
function photographerFactory(media){
    const {id, photographerId, title, image, likes, date, price} = media;
    const mediaPicture = `assets/Sample Photos/${photographerId}/${image}/`;
    console.log(mediaPicture)

    function getUserMedia(){
     
        const section = document.createElement( 'section');
        section.innerHTML = `
            <article class="pictures">
                <img src="${mediaPicture}">
                    <p> oui je suis la juste pour voir si ça fonctionne </p>
            </article> 
        `
        return (section);
    }
        return { media, getUserMedia}
}
*/
/*
import Media from '.../data/photographers.json';

function getUserMedia(){
    return (
        <div className ="test">
                <div>
                    <strong>
                        Ceci c'est pour voir si cela fonctionne bien
                    </strong>
                </div>
                <div className="inner"{
                    ...Media && media.map(media =>{
                        return(
                            <div className="box" key={media.id}>
                            <img src={media.image}/>
                            </div>
                        )
                    } )
                }></div>                             
        
        </div>
    )

    
}
*/

function mediaFactory(media) {
    const {id, photographerId, title, image, likes, date, price} = media;
    const picture = `assets/Sample Photos/${photographerId}/${image}`
    



    function getUserCardDOM() {
        const link = document.createElement('a');
        link.innerHTML = `
            <article class ="photographer__card">
                <a href="photographer.html?id=${data.id}"> 
                    <img class="photographer__portrait" src="${picture}">
                </a>
                <div class="photographer__info">
                    <h2>${data.name}</h2>
                    <h3 class="photographer__info__localisation">${data.city}, ${data.country}</h3>
                    <p class="photographer__info__tagline">${data.tagline}</p>
                    <p class="photographer__info__price">${data.price}€/jour</p>
                </div>
                </article>
            `

        return (link);
    }
    return { name, picture, getUserCardDOM }

}
