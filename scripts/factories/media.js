
 
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

	  const totalLikesDiv = document.createElement("div");
	  const totalLikes = document.createElement("p");
	  const totalLikesHeart = document.createElement("i");
	  const totalLikesPrice = document.createElement("p");

	  totalLikesDiv.className = "total_likes";
	  totalLikes.className = "total_likes_number";
	  totalLikesHeart.className = "fa-solid fa-heart";
	  totalLikesPrice.className = "total_likes_price";

	  totalLikesPrice.innerHTML =  price + " €/jour";

	  totalLikesDiv.appendChild(totalLikes);
	  totalLikesDiv.appendChild(totalLikesHeart);
		totalLikesDiv.appendChild(totalLikesPrice);
		presentation.appendChild(totalLikesDiv);
  
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
	//   const totalLikesDiv = document.createElement("div");
	//   const totalLikesHeart = document.createElement("i");
	//   const totalLikesPrice = document.createElement("p");
	  const likes = document.createElement("p");
	  const title = document.createElement("p");

	 
	//   totalLikesDiv.className = "total_likes";
	//   totalLikesHeart.className = "fa-solid fa-heart";
	//   totalLikesPrice.className = "total_likes_price";
	  likesAndTitles.className = "likes_titles";
	  mediaDiv.className = "media_card";
	  likes.className = "media_likes";
	  title.className = "media_title";

    	//   likes.setAttribute("data-id-media" , medias.id);
    	//    console.log("likes", likes);
    
		
	  medias.forEach(async (media) => {
		// console.log("media", media);
		const detailArticle = document.createElement("div");
		const imgVideo = document.createElement("article");
		detailArticle.className = "media_detail";
		let currentPhotographer = await api.getPhotographerById(
		  media.photographerId
		);
		let photographerFirstName = currentPhotographer.name.split(" ")[0];
		// let imgVideo = document.querySelector(".media_galerie")
		// media.image ou media.video
		if (media.image !== undefined) {
		  const img = document.createElement("img");
		  img.className = "media_galerie";
		  let urlMedia = `assets/photographers/medias/${photographerFirstName}/${media.image}`;
		  img.src = urlMedia
		  img.setAttribute("data-typemedia", "image");
		  img.alt = `Image de ${media.title}`;
		  title.innerHTML = media.title;
		  likes.innerHTML = `${media.likes} <i class="fa-regular fa-heart icon_heart"></i>`;
		  likesAndTitles.appendChild(title);
		  likesAndTitles.appendChild(likes);
		  imgVideo.appendChild(img.cloneNode(true));
		  detailArticle.appendChild(imgVideo);
		  detailArticle.appendChild(likesAndTitles.cloneNode(true));

		// console.log(media.likes)

		}
		 else {
		  const video = document.createElement("video");
		  video.className = "media_galerie";
		  let urlMediaVideo = `assets/photographers/medias/${photographerFirstName}/${media.video}`;
		  video.src = urlMediaVideo
		  video.setAttribute("data-typemedia", "video");
		  video.alt = `Video de ${media.title}`;
		  title.innerHTML = media.title;
		  likes.innerHTML = `${media.likes} <i class="fa-regular fa-heart icon_heart"></i>`;
		  likesAndTitles.appendChild(title);
		  likesAndTitles.appendChild(likes);
		  imgVideo.appendChild(video.cloneNode(true));
		  detailArticle.appendChild(imgVideo);
		  detailArticle.appendChild(likesAndTitles.cloneNode(true));
		   
		// console.log(likes)
		}
		console.log(media.likes)

		const totalLikesNumber = document.querySelector(".total_likes_number");
		 const totalNumber = medias.reduce((a, b) => a+=b.likes, 0);
		 totalLikesNumber.innerHTML = totalNumber;


		// console.log(totalLikesNumber)

		// console.log(imgVideo)

			// function getnumberlikes() {
			//   let numberLikes = document.querySelectorAll(".media_likes");
			//   numberLikes.forEach(function(numberLike) {
			// 	numberLike.addEventListener("click", function() {
			// 	  let numberLikes = numberLike.innerHTML;
			// 	  let numberLikesNumber = numberLikes.split(" ")[0];
			// 	  let numberLikesNumberInt = parseInt(numberLikesNumber);
			// 	  numberLikesNumberInt++;
			// 	  numberLike.innerHTML = `${numberLikesNumberInt} <i class="fa-regular fa-heart icon_heart"></i>`;
			// 	}
			// 	);
			//   }
			//   );
			// }
			// getnumberlikes()

			 

			 likes.addEventListener("click", () => {
			 	console.log("click")
			 }
			);
				
				// let nbLikes = +1;
				// likes = likes + parseFloat(nbLikes);
				// nbLikes.textContent = nbLikes;

				// let allLikes = document.querySelectorAll(".total_likes_number");

				// if (e.target.classList.contains("fa-solid")) {
				//   likes.setAttribute("class", "fa-regular fa-heart icon_heart")
				//   allLikes.textContent
				//   nbLikes.textContent--
				// }
				// else {
				//   likes.setAttribute("class", "fa-solid fa-heart icon_heart")
				//   allLikes.textContent++
				  
				// }
			




    	             // console.log(media.likes)
		// totalLikesDiv.appendChild(totalLikesHeart);
		// totalLikesDiv.appendChild(totalLikesPrice);
		  mediaDiv.appendChild(detailArticle)
		//   mediaDiv.appendChild(totalLikesDiv);
		  


		  imgVideo.addEventListener("click", (event) => {
			console.log("target",event.target)
			displayLightbox(media, event.target.dataset.typemedia , medias, photographerFirstName);
		} );
		detailArticle.setAttribute("data-id", media.id);
	});
	 
	
	  return mediaDiv;
	}
	return { getMediaCardDOM };
  }

 

  