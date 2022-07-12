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

    totalLikesPrice.innerHTML = price + " €/jour";

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
  const { date, id, photographerId, image, video, likes, title } = medias;

  function getMediaCardDOM() {
    const api = new apiUser("./data/photographers.json");
    const mediaDiv = document.createElement("div");
    const likesAndTitles = document.createElement("div");
	const likesHeartSpan = document.createElement("span");
    const title = document.createElement("p");
	let likes = document.createElement("p");
	let likesHeart = document.createElement("i");

    mediaDiv.className = "media_card";
    likesAndTitles.className = "likes_titles";
    likesHeartSpan.className = "heart_span";
    title.className = "media_title";
    likes.className = "media_likes number";
    likesHeart.className = "fa-regular fa-heart icon_heart heart ";

    likesHeartSpan.appendChild(likesHeart);
    //  likes.setAttribute("data-id-media" ,id);
    //    console.log("likes", likes);

    

    medias.forEach(async (media) => {
      //   console.log("data-likes-media", likes.getAttribute("data-likes-media"));
      // console.log("media.likes", media.likes);
      // console.log("media", media);
      const detailArticle = document.createElement("div");
      const imgVideo = document.createElement("article");
      detailArticle.className = "media_detail";
      let currentPhotographer = await api.getPhotographerById(
        media.photographerId
      );
      let photographerFirstName = currentPhotographer.name.split(" ")[0];
	  likes.setAttribute("data-likes-id", media.likes);
	  console.log("media.likes", media.likes);
      // media.image ou media.video
      if (media.image !== undefined) {
        const img = document.createElement("img");
        img.className = "media_galerie";
        let urlMedia = `assets/photographers/medias/${photographerFirstName}/${media.image}`;
        img.src = urlMedia;
        img.setAttribute("data-typemedia", "image");
        img.alt = `Image de ${media.title}`;
        title.innerHTML = media.title;
        likes.innerHTML = media.likes;
        likesHeartSpan.appendChild(likes);
        likesAndTitles.appendChild(likesHeartSpan);
        likesAndTitles.appendChild(title);
        imgVideo.appendChild(img.cloneNode(true));
        detailArticle.appendChild(imgVideo);
        detailArticle.appendChild(likesAndTitles.cloneNode(true));
		
      } else {
        const video = document.createElement("video");
        video.className = "media_galerie";
        let urlMediaVideo = `assets/photographers/medias/${photographerFirstName}/${media.video}`;
        video.src = urlMediaVideo;
        video.setAttribute("data-typemedia", "video");
        video.alt = `Video de ${media.title}`;
        video.controls = true;
        title.innerHTML = media.title;
        likes.innerHTML = media.likes;
        likesHeartSpan.appendChild(likes);
        likesAndTitles.appendChild(likesHeartSpan);
        likesAndTitles.appendChild(title);
        imgVideo.appendChild(video.cloneNode(true));
        detailArticle.appendChild(imgVideo);
        detailArticle.appendChild(likesAndTitles.cloneNode(true));
		
      }

      imgVideo.addEventListener("click", (e) => {
        console.log("clic");
        console.log(e.target);
      });

    //   console.log("data-likes-id", likes.dataset.likesId);

	//   function incement(medias) {
	// 	const heartIcons = document.querySelectorAll(".heart");
	// 	for (let i = 0; i < heartIcons.length; i++) {
	// 	  heartIcons[i].addEventListener("click", (e) => {
	// 		  const mediaId = likes.getAttribute("data-likes-id");
	// 		heart = e.target;
	// 		console.log("mediaId", mediaId);
	// 		// console.log("clic");
	// 		// console.log(e.target);
	// 		console.log("heart", heart);
	// 		if (heart.classList.contains("fa-regular")) {
	// 		  console.log("mediaId if", mediaId);
	// 		  console.log("media.id if", media.id);
	// 		  console.log("empty");
	// 		  console.log("heart-if", heart);
  
	// 		  let likes = heart.parentElement.querySelector(".number");
	// 		  console.log("likes", likes);
	// 		  let likesNumber = parseInt(likes.innerHTML);
	// 		  console.log("likes.innerHTML if", likes.innerHTML);
	// 		  console.log("likesNumber if", likesNumber);
	// 		  likesNumber++;
	// 		  console.log("likesNumber if++", likesNumber);
	// 		  likes.innerHTML = likesNumber;
	// 		  heart.classList.replace("fa-regular", "fa-solid");
	// 		  let allLikes = document.querySelector(".total_likes_number");
	// 		  let totalLikes = parseInt(allLikes.innerHTML);
	// 		  totalLikes++;
	// 		  allLikes.innerHTML = totalLikes;
	// 		  //   heart.classList.add("fa-solid");
  
	// 		  console.log("heart-apres if remove/add", likesNumber);
	// 		} else {
	// 		  console.log("media.id else", media.id);
	// 		  console.log("full");
	// 		  console.log("heart-else", heart);
  
	// 		  // let likes = heart.parentElement.querySelector(".number");
	// 		  // console.log("likes else", likes);
	// 		  // let likesNumber = parseInt(likes.innerHTML);
	// 		  // console.log("likes.innerHTML else", likes.innerHTML);
	// 		  // console.log("likesNumber else", likesNumber);
	// 		  // likesNumber--;
	// 		  // console.log("likesNumber else--", likesNumber);
	// 		  // likes.innerHTML = likesNumber;
	// 		  // heart.classList.replace("fa-solid", "fa-regular");
	// 		  // console.log("heart-apres else remove/add",likesNumber);
	// 		}
	// 		//   heart.classList.remove("full");
	// 		//   heart.classList.add("empty");
	// 		//   likes.setAttribute("data-likes-id", likesNumber);
	// 		// } else {
	// 		// 	console.log("empty");
	// 		// 	console.log("heart-else",heart);
  
	// 		//   let likes = heart.parentElement.querySelector(".number");
	// 		//   let likesNumber = parseInt(likes.innerHTML);
	// 		//   console.log("likes.innerHTML else", likes.innerHTML);
	// 		//   console.log("likesNumber else", likesNumber);
	// 		//   likesNumber--;
	// 		//   likes.innerHTML = likesNumber;
	// 		//   heart.setAttribute("class", "fa-regular fa-heart icon_heart heart full");
	// 		//   console.log("heart-apres else remove/add",heart);
	// 		//   //   heart.classList.remove("empty");
	// 		// //   heart.classList.add("full");
	// 		// //   likes.setAttribute("data-likes-id", likesNumber);
	// 		// }
	// 	  });
	// 	}
	//   }

     

      // heartIcons.forEach((heart) => {
      // 	heartIcons.addEventListener("click", (e) => {
      // 	let count = document.querySelectorAll(".number");
      // 	count = likes.dataset.likesId

      // 	console.log("clic");
      // 	console.log(e.target);
      // 	console.log("count", count);
      //   });
      // })

      //  const nbLikes = document.querySelectorAll(".heart_span");
      //  nbLikes.forEach( (nbLike) => {
      // 		// console.log("nbLike", nbLike);
      // 	nbLike.addEventListener("click", (e) => {
      // 	  console.log("clic");
      // 	  console.log(e.target);
      // 	  let nbLikes = e.target.dataset.likesId;
      // 	  console.log("nbLikes", nbLikes);
      // 	  if (e.target.classList.contains("fa-regular")) {

      // 		e.target.innerHTML = nbLikes;
      // 		nbLikes--;
      // 	  }
      // 	  else {
      // 	  nbLikes++;
      // 	  e.target.innerHTML = nbLikes;
      // 	  }
      // 	})
      // })

      //    console.log("nbLike.dataset.likesId", nbLike.dataset.likesId);

      // const incerments = document.querySelectorAll(".heart_span");
      // incerments.forEach( (increment) => {
      // 	// console.log("increment", increment);
      // 	let nbLikes = likes.dataset.likesId;
      // 	increment.addEventListener("click", (e) => {
      // 	   let heart =document.querySelectorAll(".heart");
      // 	   let selection = document.querySelectorAll(".heart_span");
      // 	   let count = document.querySelectorAll(".number");
      // 	   // let nbLikes = count.getAttribute("data-likes-id")

      // 	 console.log("clic");
      // 	 console.log(e.target);
      // 	 console.log("nbLikes", nbLikes);
      // 	 if (increment.classList.contains("full")) {
      // 	   console.log("full");
      // 		 count--;
      // 	   count.innerHTML = nbLikes;
      // 	 }
      // 	 else {
      // 	   console.log("not full");
      // 	 count++;
      // 	 count.innerHTML = nbLikes;
      // 	 }
      //    })

      // const likesNumber = likes.dataset.likesId;

      // likes.addEventListener("click", (e) => {
      //   console.log("clic");
      //   console.log(e.target);
      //   let likes = e.target.dataset.likesId;
      //   console.log("likes", likes);
      //   likes++;
      //   e.target.innerHTML = `${likes} <i class="fa-regular fa-heart icon_heart active"></i>`;
      //   e.target.dataset.likesId = likes;
      // })

      // console.log(likes)
      // likes.addEventListener("click", (e) => {
      //   console.log("clic");
      // })

      // const nbLikes = document.querySelectorAll(".number");
      // nbLikes.forEach((nbLike) => {
      //   nbLike.addEventListener("click", (e) => {
      // 	// console.log("clic");
      // 	// let idMedia = e.target.getAttribute("data-id-media");
      // 	// console.log(idMedia);
      // 	let nbLikes = e.target.innerHTML;
      // 	// console.log(nbLikes);
      // 	let nbLikesNumber = nbLikes.split(" ")[5];
      // 	console.log(nbLikesNumber);
      // 	console.log( nbLikes.split(" ")[5]);
      // 	e.target.innerHTML+= 1;

      //   });
      // }
      // );

      // function getLikes(media) {
      //   let nblikes = media.likes;

      //   console.log(nblikes)
      //   return nblikes;
      // }
      // getLikes(media);

      // const numbers = document.querySelectorAll(".number");
      // numbers.forEach((number) => {
      // 	number.addEventListener("click", (e) => {
      // 		let nbLikes = media.likes;
      // 		console.log(nbLikes);
      // 		if(number.classList.contains("active")){
      // 			console.log("nbLikes", nbLikes);
      // 			// likes.setAttribute("class" , "fa-regular fa-heart icon_heart");
      // 			console.log("active");
      // 			nbLikes.innerHTML = `${nbLikes} <i class="fa-regular fa-heart icon_heart "></i>`;
      // 			nbLikes--;

      // 		}
      // 		else{
      // 			console.log("pas active");
      // 			nbLikes++;
      // 			console.log("nbLikes", nbLikes);
      // 			nbLikes.innerHTML = `${nbLikes} <i class="fa-solid fa-heart icon_heart active"></i>`;
      // 			// console.log(e.target.classList);

      // 			// likes.setAttribute("class" , "fa-solid fa-heart icon_heart active");

      // 		}

      // 	})
      // })

      const totalLikesNumber = document.querySelector(".total_likes_number");
      const totalNumber = medias.reduce((a, b) => (a += b.likes), 0);
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
      mediaDiv.appendChild(detailArticle);
      //   mediaDiv.appendChild(totalLikesDiv);

      imgVideo.addEventListener("click", (event) => {
        console.log("target", event.target);
        displayLightbox(
          media,
          event.target.dataset.typemedia,
          medias,
          photographerFirstName
        );
      });
      detailArticle.setAttribute("data-id", media.id);
    //   console.log ("data-id", media.id);
	 
   
	


		const heartIcons = document.querySelectorAll(".heart");
		let mediaId = likes.getAttribute("data-likes-id");
			  console.log(mediaId);
		for (let i = 0; i < heartIcons.length; i++) {
		  heartIcons[i].addEventListener("click", (e) => {
			  
			let heart = e.target
			let banane = e.target.parentElement;
			let kiwi = banane.children[1].dataset.likesId;
			console.log("mediaId", mediaId);

			// console.log("clic");
			// console.log(e.target);
			console.log("heart", heart);
			console.log("banane", banane);
			console.log("kiwi", kiwi);

			if (mediaId === kiwi) {
			if (heart.classList.contains("fa-regular")) {
			  console.log("mediaId if", mediaId);
			  console.log("media.id if", media.id);
			  console.log("empty");
			  console.log("heart-if", heart);
  
			  let likes = heart.parentElement.querySelector(".number");
			  console.log("likes", likes);
			  let likesNumber = parseInt(likes.innerHTML);
			  console.log("likes.innerHTML if", likes.innerHTML);
			  console.log("likesNumber if", likesNumber);
			  likesNumber++;
			  console.log("likesNumber if++", likesNumber);
			  likes.innerHTML = likesNumber;
			  heart.classList.replace("fa-regular", "fa-solid");
			  let allLikes = document.querySelector(".total_likes_number");
			  let totalLikes = parseInt(allLikes.innerHTML);
			  totalLikes++;
			  allLikes.innerHTML = totalLikes;
			  //   heart.classList.add("fa-solid");
  
			  console.log("heart-apres if remove/add", likesNumber);
			} else {

			  console.log("media.id else", media.id);
			  console.log("full");
			  console.log("heart-else", heart);
  
			   let likes = heart.parentElement.querySelector(".number");
			  // console.log("likes else", likes);
			   let likesNumber = parseInt(likes.innerHTML);
			  // console.log("likes.innerHTML else", likes.innerHTML);
			  // console.log("likesNumber else", likesNumber);
			   likesNumber--;
			   likes.innerHTML = likesNumber;
			   heart.classList.replace("fa-solid", "fa-regular");
			   let allLikes = document.querySelector(".total_likes_number");
			   let totalLikes = parseInt(allLikes.innerHTML);
			   totalLikes--;
			   allLikes.innerHTML = totalLikes;
			  // console.log("likesNumber else--", likesNumber);
			  
			  // console.log("heart-apres else remove/add",likesNumber);
			}
			}
			//   heart.classList.remove("full");
			//   heart.classList.add("empty");
			//   likes.setAttribute("data-likes-id", likesNumber);
			// } else {
			// 	console.log("empty");
			// 	console.log("heart-else",heart);
  
			//   let likes = heart.parentElement.querySelector(".number");
			//   let likesNumber = parseInt(likes.innerHTML);
			//   console.log("likes.innerHTML else", likes.innerHTML);
			//   console.log("likesNumber else", likesNumber);
			//   likesNumber--;
			//   likes.innerHTML = likesNumber;
			//   heart.setAttribute("class", "fa-regular fa-heart icon_heart heart full");
			//   console.log("heart-apres else remove/add",heart);
			//   //   heart.classList.remove("empty");
			// //   heart.classList.add("full");
			// //   likes.setAttribute("data-likes-id", likesNumber);
			// }
		  });
		}
	  
	});

    return mediaDiv;
  }
  return { getMediaCardDOM };
}
