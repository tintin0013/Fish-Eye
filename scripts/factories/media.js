
 
function infoFactory(data) { 
  
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

	btnForm.addEventListener("click", () => {
		
	  displayModal(name);	
	 
	});
	  img.src = picture;
	  img.alt = `Aperçu profil de ${name}`;
  
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
  
  function mediaFactory(medias) {

  
	function getMediaCardDOM() {
	  const api = new apiUser("./data/photographers.json");
	  const mediaDiv = document.createElement("div");
	  const likesAndTitles = document.createElement("div");
	  const likes = document.createElement("p");
	  const title = document.createElement("p");
	  
	  likesAndTitles.className = "likes_titles";
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
		// media.image ou media.video
		if (media.image !== undefined) {
		  const img = document.createElement("img");
		  img.className = "media_galerie";
		  let urlMedia = `assets/photographers/medias/${photographerFirstName}/${media.image}`;
		  img.src = urlMedia
		  img.setAttribute("data-typemedia", "image");
		  img.alt = `Image de ${media.title}`;
		  title.innerHTML = media.title;
		likes.innerHTML = `${media.likes} <i class="far fa-heart"></i>`;
		likesAndTitles.appendChild(title);
		likesAndTitles.appendChild(likes);
		detailArticle.appendChild(img.cloneNode(true));
		detailArticle.appendChild(likesAndTitles.cloneNode(true));
		}
		 else {
		  const video = document.createElement("video");
		  video.className = "media_galerie";
		  let urlMediaVideo = `assets/photographers/medias/${photographerFirstName}/${media.video}`;
		  video.src = urlMediaVideo
		  video.setAttribute("data-typemedia", "video");
		  video.alt = `Video de ${media.title}`;
		  title.innerHTML = media.title;
		  likes.innerHTML = `${media.likes} <i class="far fa-heart"></i>`;
		  likesAndTitles.appendChild(title);
		likesAndTitles.appendChild(likes);
		detailArticle.appendChild(video.cloneNode(true));
		detailArticle.appendChild(likesAndTitles.cloneNode(true));
		}
		mediaDiv.appendChild(detailArticle);

		detailArticle.addEventListener("click", (event) => {
			 console.log("target",event.target)
			displayLightbox(media, event.target.dataset.typemedia , medias, photographerFirstName);
		} );
		detailArticle.setAttribute("data-id", media.id);
	  });
	 
	
	  return mediaDiv;
	}
	return { getMediaCardDOM };
  }

 

  