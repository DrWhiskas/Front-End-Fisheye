function photographerFactory(media){
    const {id, photographerId, title, image, likes, date, price} = media;
    const mediaPicture = `assets/Sample Photos/${photographerId}/${id}`;

    function getUserMedia(){
     
        const article = document.createElement( 'article');
        article.innerHTML = `
            <article class="pictures">
                <img src="${mediaPicture}"
            </article>
        
        `

    }
}