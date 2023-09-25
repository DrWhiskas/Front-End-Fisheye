/* VARIABLE GLOBAL */
let eventListener = false;
let eventListenerPrev = false;
let eventListenerKeyPrev = false;
let p = 0;

function lightbox() {
	const lightbox = document.getElementById('lightbox');
	let images = document.querySelectorAll('.portfolio__image');
	let arrayImage = Array.from(images);
	const lightboxContent = document.getElementById('lightboxButton');
	const lightboxNext = document.getElementById('lightbox__next');
	const lightboxPrev = document.getElementById('lightbox__prev');
	const lightboxClose = document.getElementById('lightbox__close');
	document.body.appendChild(lightbox);
	// Gestion boutons
	lightboxClose.addEventListener('click', (e) => {
		closeLightbox(lightbox, lightboxContent);
	});
	images.forEach((image) => {
		image.addEventListener('click', (e) => {
			lightbox.classList.add('active');
			lightboxContent.classList.add('active');
			p = arrayImage.indexOf(e.target);
			console.log(p, 'numero');
			const isVideo = e.target.nodeName === 'VIDEO';
			const mediaElement = CreateMedia(
				isVideo ? e.target.firstElementChild.src : e.target.src,
				lightbox,
				arrayImage,
				null,
				isVideo
			);
			lightbox.appendChild(mediaElement);
		});
	});
	if (eventListener !== true) {
		eventListener = true;

		lightboxNext.addEventListener('click', (e) => {
			images = document.querySelectorAll('.portfolio__image');
			arrayImage = Array.from(images); // convertisseur en tableau
			changeMedia('next');
		});
		lightboxPrev.addEventListener('click', (e) => {
			images = document.querySelectorAll('.portfolio__image');
			arrayImage = Array.from(images); // convertisseur en tableau
			changeMedia('prev');
		});
	}
	if (eventListenerKeyPrev != true) {
		eventListenerKeyPrev = true;
		document.addEventListener('keydown', (e) => {
			const touchPress = e.key;
			if (touchPress == 'ArrowLeft') {
				images = document.querySelectorAll('.portfolio__image');
				arrayImage = Array.from(images); // convertisseur en tableau
				eventListenerKeyPrev = true;
				changeMedia('prev');
			}
			if (touchPress == 'ArrowRight') {
				images = document.querySelectorAll('.portfolio__image');
				arrayImage = Array.from(images); // convertisseur en tableau
				changeMedia('next');
				console.log('p: ', p);
			}
			if (touchPress == 'Escape') {
				closeLightbox(lightbox, lightboxContent);
			}
			if (touchPress == 'Enter') {
				e.target.click();
			}
		});
	}
	function changeMedia(direction) {
		if (direction == 'prev') {
			console.log('oui');
			p--;
			if (p < 0) {
				p = images.length - 1;
			}
		} else {
			p++;
			if (p >= images.length) {
				p = 0;
			}
		}
		lightbox.innerHTML = '';
		const isVideo = arrayImage[p].nodeName === 'VIDEO';
		const mediaElement = CreateMedia(
			isVideo ? arrayImage[p].firstElementChild.src : arrayImage[p].src,
			lightbox,
			arrayImage,
			null,
			isVideo
		);
		lightbox.appendChild(mediaElement);
	}
}
