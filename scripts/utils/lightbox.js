class Lightbox{

    // initialisation de la lightbox

    static init(){
        const links = document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
    .forEach(link => link.addEventListener('click'), e =>{
        e.prenventDefault();
        new Lightbox(e.currentTarget.getAttribut('href'))

    })}
}

/**
 * 
 * @param {string} url URL de l'image
 *  
 */

/*constructor (url){

}

lightBoxDOM (url){
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    dom.innerHTML= `
        <button class="light__close"></button>
        <button class="light__next"></button>
         <button class="light__prev"></button>
         <div class="light__content">

    `
    return dom
}
*/