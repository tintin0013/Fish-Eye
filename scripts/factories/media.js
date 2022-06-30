// const recupUrl = window.location.search;
// console.log(window.location.search);
var nom 
function infoFactory(data) {
	// const idPhotographer = recupUrl.get("id");
  
	const { name, id, city, country, tagline, price, portrait } = data;
	const picture = `assets/photographers/portrait/${portrait}`;
  
	function getPhotographerCardDOM() {
	  const article = document.createElement("article");
	  const presentation = document.createElement("div");
	  const btnForm = document.createElement("button");
	  const h1 = document.createElement("h1");
	  const pays = document.createElement("p");
	  const tag = document.createElement("p");
	  const img = document.createElement("img");
  
	  btnForm.onclick = displayModal;
	  img.src = picture;
	  img.alt = `Aperçu profil de ${name}`;

	  nom = name
	  console.log("nom", nom);
  
	  presentation.className = "presentation_photograph";
	  article.className = "presentation_card";
	  h1.className = "presentation_name";
	  btnForm.className = "contact_button";
	  pays.className = "presentation_location";
	  tag.className = "presentation_description";
	  img.className = "presentation_photo";
  
	  h1.textContent = name;
	  btnForm.innerText = "Contactez-moi";
	  pays.innerHTML = country + ", " + city;
	  tag.innerHTML = tagline;
  
	  presentation.appendChild(h1);
	  presentation.appendChild(pays);
	  presentation.appendChild(tag);
	  article.appendChild(presentation);
	  article.appendChild(btnForm);
	  article.appendChild(img);
	  // photographerSection.appendChild(article);
  
	  return presentation, article;
	}
	return {
	  name,
	  picture,
	  city,
	  country,
	  id,
	  tagline,
	  price,
	  getPhotographerCardDOM,
	};
  }
 
  console.log("nom", nom);
  let banane 
  
  function mediaFactory(medias) {
	// const tableauMedia = [];
	// medias.forEach(media => {
	//     let {video, image} = media;
	//     tableauMedia.push(video, image);
	// });
	// console.log(tableauMedia);
	// const imgMedia = `assets/images/${image}`;
	// const videoMedia = `assets/videos/${video}`;
  
	function getMediaCardDOM() {
	  const api = new apiUser("./data/photographers.json");
	  const mediaDiv = document.createElement("div");
  
	  const likes = document.createElement("p");
	  const title = document.createElement("p");
  
	  mediaDiv.className = "media_card";
	  likes.className = "media_likes";
	  title.className = "media_title";
  
	  medias.forEach(async (media) => {
		const detailArticle = document.createElement("article");
		detailArticle.className = "media_detail";
		let currentPhotographer = await api.getPhotographerById(
		  media.photographerId
		);
		let photographerFirstName = currentPhotographer.name.split(" ")[0];
  
		banane = media.id;
		console.log(banane);
		// console.log(photographerFirstName);
  
		// media.image ou media.video
		if (media.image !== undefined) {
		  const img = document.createElement("img");
		  img.className = "media_img";
		  // console.log("DANS LA PHOTO");
		  //   img.setAttribute("src", "assets/images/" + media.image);
		  img.src = `assets/photographers/medias/${photographerFirstName}/${media.image}`;
		  img.setAttribute("data-toto", media.id);
		  // img.setAttribute("data-tata", media.title);
		  // img.setAttribute("data-titi", media.likes);
		  // console.log("toto", img.dataset.toto);
		  // console.log("tata",img.dataset.tata)
		  // console.log("titi",img.dataset.titi)
		  // img.setAttribute('alt', `Aperçu de ${title}`);
		  // img.addEventListener("click", displayLightbox(media));
		  img.alt = `Aperçu de ${media.title}`;
		//   img.href = mediaLink;
		  // console.log("img", mediaLink);
  
		  detailArticle.appendChild(img.cloneNode(true));
		} else {
		  const video = document.createElement("video");
		  video.className = "media_video";
		  // console.log("DANS LA VIDEO");
		  video.src = `assets/photographers/medias/${photographerFirstName}/${media.video}`;
		  // video.setAttribute('alt', `Aperçu de ${title}`);
		  video.alt = `Aperçu de ${media.title}`;
		  // video.href = mediaLink;
		  // console.log("video", mediaLink);
  
		  // console.log(media.title)
		  video.controls = true;
		  detailArticle.appendChild(video.cloneNode(true));
		}
		//   console.log("dehors", mediaLink);
  
		// media.title
		title.innerHTML = media.title;
		// console.log(media.title);
		detailArticle.appendChild(title.cloneNode(true));
  
		// media.likes
		likes.innerHTML = media.likes;
		// console.log(media.likes);
		detailArticle.appendChild(likes.cloneNode(true));
  
		mediaDiv.appendChild(detailArticle);
  
		// detailArticle.setAttribute("data-id", media.id);
		detailArticle.addEventListener("click", displayLightbox);
		//   detailArticle.onclick = displayLightbox;
		detailArticle.setAttribute("data-id", media.id);
  
	
		// console.log("dedans",mediaLink)
		//   lightbox.appendChild(mediaLink);
		// console.log("id media",detailArticle.dataset.id);
	  });
	 
	//   console.log(media.id);
	  return mediaDiv;
	}
	return { /*video, image, */ getMediaCardDOM };
  }
//   mediaFactory();
  console.log("banane", banane);






  
  function lightboxFactory(medias, photographer) {
	function getLightboxDOM() {
	  console.log(medias);
	  let photographerFirstName = photographer.name.split(" ")[0];
	//   console.log(photographerFirstName);

	  let currentMedia = medias[2];
console.log(`assets/photographers/medias/${photographerFirstName}/${currentMedia.image}`)

	  const api = new apiUser("./data/photographers.json");
	  const lightbox = document.createElement("div");
	  const chevronLeft = document.createElement("div");
	  const iconeLeft = document.createElement("i");
	  const chevronRight = document.createElement("div");
	  const iconeRight = document.createElement("i");
	  const close = document.createElement("div");
	  const closeImg = document.createElement("img");
	  const detailMedia = document.createElement("div");
	  const mediaTitle = document.createElement("h1");
	  const mediaImg = document.createElement("img");
	  const mediaVideo = document.createElement("video");
  
	  mediaTitle.hinnerHTML = "Titre";
  
	  // lightbox.style.display = "none";
  
	  lightbox.className = "lightbox_content";
	  chevronLeft.className = "chevron_left";
	  iconeLeft.className = "fas fa-chevron-left chevron";
	  chevronRight.className = "chevron_right";
	  iconeRight.className = "fas fa-chevron-right chevron";
	  close.className = "close";
	  closeImg.className = "close_img";
	  detailMedia.className = "lightbox_detail";
	  mediaTitle.className = "lightbox_title";
	  mediaImg.className = "lightbox_img";
	  mediaVideo.className = "lightbox_video";
  
	  closeImg.src = "assets/icons/close.svg";
	  closeImg.onclick = closeLightbox;
	  closeImg.alt = "Fermer";

	  mediaImg.src = `assets/photographers/medias/${photographerFirstName}/${currentMedia.image}`;
	  mediaVideo.src = `assets/photographers/medias/${photographerFirstName}/${currentMedia.video}`;
  
	  chevronLeft.appendChild(iconeLeft);
	  chevronRight.appendChild(iconeRight);
	  close.appendChild(closeImg);
	  lightbox.appendChild(chevronLeft);
	  lightbox.appendChild(close);
	  lightbox.appendChild(detailMedia);
	  lightbox.appendChild(chevronRight);
	  lightbox.appendChild(mediaTitle);
	  detailMedia.appendChild(mediaImg);
	  detailMedia.appendChild(mediaVideo);
	  // chevronLeft.onclick = previousMedia;
	  // chevronRight.onclick = nextMedia;
  
	  return lightbox;
	}
	return { getLightboxDOM };
  }
  