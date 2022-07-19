//Affiche les informations du photographe

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

    //Affiche le formulaire de contact
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
    return article;
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
// affiche les medias du photographe
function mediaFactory(media, photographer, medias) {  
  const { date, id, photographerId, image, video, likes, title } = media;
  const photographerName = photographer.name;

  function getMediaCardDOM() {
    const api = new apiUser("./data/photographers.json");
    const likesAndTitles = document.createElement("div");
    const likesHeartSpan = document.createElement("span");
    const mediaTitle = document.createElement("p");
    const mediaLikes = document.createElement("p");
    let likesHeart = document.createElement("i");

    likesAndTitles.className = "likes_titles";
    likesHeartSpan.className = "heart_span";
    mediaTitle.className = "media_title";
    mediaLikes.className = "media_likes number";
    likesHeart.className = "fa-regular fa-heart icon_heart heart ";

    likesHeartSpan.appendChild(likesHeart);
    mediaLikes.setAttribute("data-likes-media", likes);

    const detailArticle = document.createElement("div");
    const imgVideo = document.createElement("article");
    detailArticle.className = "media_detail";

    // si l'image est définie
    if (image !== undefined) { 
      const img = document.createElement("img");
      img.className = "media_galerie";
      let urlMedia = `assets/photographers/medias/${photographerName}/${image}`;
      img.src = urlMedia;
      img.setAttribute("data-typemedia", "image");
      img.alt = `Image de ${title}`;
      mediaTitle.innerHTML = title;
      mediaLikes.innerHTML = likes;
      mediaLikes.setAttribute("data-likes-id", likes);
      likesHeartSpan.appendChild(mediaLikes);
      likesAndTitles.appendChild(likesHeartSpan);
      likesAndTitles.appendChild(mediaTitle);
      imgVideo.appendChild(img);
      detailArticle.appendChild(imgVideo);
      detailArticle.appendChild(likesAndTitles);
    }
    // si la vidéo est définie
     else { 
      const movie = document.createElement("video");
      movie.className = "media_galerie";
      let urlMediaVideo = `assets/photographers/medias/${photographerName}/${video}`;
      movie.src = urlMediaVideo;
      movie.setAttribute("data-typemedia", "video");
      movie.alt = `Video de ${title}`;
      movie.controls = true;
      mediaTitle.innerHTML = title;
      mediaLikes.innerHTML = likes;
      mediaLikes.setAttribute("data-likes-id", likes);
      likesHeartSpan.appendChild(mediaLikes);
      likesAndTitles.appendChild(likesHeartSpan);
      likesAndTitles.appendChild(mediaTitle);
      imgVideo.appendChild(movie);
      detailArticle.appendChild(imgVideo);
      detailArticle.appendChild(likesAndTitles);
    }

    // ecouteur d'évènement sur l'image ou la vidéo
    imgVideo.addEventListener("click", (event) => {  
      displayLightbox(
        media,
        event.target.dataset.typemedia,
        photographerName,
        image,
        video,
        title,
        medias
      );
    });

    // ecouteur d'évènement clavier sur l'image ou la vidéo 
    imgVideo.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        displayLightbox(
          media,
          event.target.dataset.typemedia,
          photographerName,
          image,
          video,
          title,
          medias
        );
      }
    });
    detailArticle.setAttribute("data-id", id);

    return detailArticle;
  }
  return { getMediaCardDOM };
}
