//Affiche les informations du photographe
function infoFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data; // récupération des données du photographe
  const picture = `assets/photographers/portrait/${portrait}`; // récupération de l'image du photographe

  function getPhotographerCardDOM() {
    // création de la carte des informations du photographe
    const article = document.createElement("article"); // création de l'article
    const presentation = document.createElement("div"); // création de la div de présentation
    const btnForm = document.createElement("button"); // création du bouton de formulaire
    const h1 = document.createElement("h1"); // création du nom du photographe
    const pays = document.createElement("p"); // création du pays et de la ville
    const tag = document.createElement("p"); // création du tagline (description)
    const img = document.createElement("img"); // création de l'image du photographe

    //Affiche le formulaire de contact
    btnForm.addEventListener("click", () => {
      //Affiche le formulaire de contact
      displayModal(name);
    });
    img.src = picture; // affiche la photo du photographe
    img.alt = `Aperçu profil de ${name}`; // alt de l'image

    // ajout des class
    presentation.className = "presentation_photograph";
    article.className = "presentation_card";
    h1.className = "presentation_name";
    btnForm.className = "contact_button";
    pays.className = "presentation_location";
    tag.className = "presentation_description";
    img.className = "presentation_photo";

    h1.textContent = name; // insertion du nom du photographe
    btnForm.innerText = "Contactez-moi"; // insertion du texte du bouton
    pays.innerHTML = country + ", " + city; // insertion de la ville et du pays
    tag.innerHTML = tagline; // insertion de la tagline

    presentation.appendChild(h1); // nom du photographe
    presentation.appendChild(pays); // pays et ville
    presentation.appendChild(tag); // tagline
    article.appendChild(presentation); // div presentation
    article.appendChild(btnForm); // bouton contact
    article.appendChild(img); // photo du photographe

    const totalLikesDiv = document.createElement("div"); // creation de la div pour afficher le nombre de likes
    const totalLikes = document.createElement("p"); // creation du p pour afficher le nombre de likes
    const totalLikesHeart = document.createElement("i"); // creation de l'icone pour afficher le nombre de likes
    const totalLikesPrice = document.createElement("p"); // creation du p pour afficher le prix du photographe

    // ajout des class
    totalLikesDiv.className = "total_likes";
    totalLikes.className = "total_likes_number";
    totalLikesHeart.className = "fa-solid fa-heart";
    totalLikesPrice.className = "total_likes_price";
    totalLikesPrice.innerHTML = price + " €/jour";

    totalLikesDiv.appendChild(totalLikes); // nombre de likes
    totalLikesDiv.appendChild(totalLikesHeart); // icone heart
    totalLikesDiv.appendChild(totalLikesPrice); // prix par jour
    presentation.appendChild(totalLikesDiv); // div total likes
    return article; // retourne l'article
  }
  //Retourne les informations du photographe
  return {
    name,
    picture,
    city,
    country,
    id,
    tagline,
    price,

    getPhotographerCardDOM, // retourne la fonction getPhotographerCardDOM
  };
}
// affiche les medias du photographe
function mediaFactory(media, photographer, medias) {
  const { id, image, video, likes, title } = media; // récupération des données du media
  const photographerName = photographer.name; // récupération du nom du photographe

  // création de la carte des medias
  function getMediaCardDOM() {
    const likesAndTitles = document.createElement("div"); // création de la div pour afficher le nombre de likes et le titre
    const likesHeartSpan = document.createElement("span"); // création du span pour afficher le nombre de likes
    const mediaTitle = document.createElement("p"); // création du p pour afficher le titre
    const mediaLikes = document.createElement("p"); // création du p pour afficher le nombre de likes
    let likesHeart = document.createElement("i"); // création de l'icone pour afficher le nombre de likes

    // ajout des class
    likesAndTitles.className = "likes_titles";
    likesHeartSpan.className = "heart_span";
    mediaTitle.className = "media_title";
    mediaLikes.className = "media_likes number";
    likesHeart.className = "fa-regular fa-heart icon_heart heart ";

    likesHeartSpan.appendChild(likesHeart); // icone heart
    mediaLikes.setAttribute("data-likes-media", likes); //  nombre de likes

    const detailArticle = document.createElement("div"); // création de la div pour afficher les détails du media
    const imgVideo = document.createElement("article"); // création de l'article pour afficher l'image ou la video
    detailArticle.className = "media_detail"; // ajout de la class media_detail
    imgVideo.setAttribute("tabIndex", "0"); // ajout de l'attribut tabIndex

    // si l'image est définie
    if (image !== undefined) {
      // condition si l'image est définie
      const img = document.createElement("img"); // création de l'image
      img.className = "media_galerie"; // ajout de la class media_galerie
      let urlMedia = `assets/photographers/medias/${photographerName}/${image}`; // récupération de l'url de l'image
      img.src = urlMedia; // ajout de l'url de l'image
      img.setAttribute("data-typemedia", "image"); // ajout de l'attribut data-typemedia
      img.alt = `Image de ${title}`; // ajout de l'alt de l'image
      mediaTitle.innerHTML = title; // ajout du titre du media
      mediaLikes.innerHTML = likes; // ajout du nombre de likes du media
      mediaLikes.setAttribute("data-likes-id", likes); // ajout de l'attribut data-likes-id
      likesHeartSpan.appendChild(mediaLikes); // nombre de likes du media
      likesAndTitles.appendChild(likesHeartSpan); // nombre de likes
      likesAndTitles.appendChild(mediaTitle); // titre du media
      imgVideo.appendChild(img); // ajout de l'image a l'article
      detailArticle.appendChild(imgVideo); // ajout de l'article a la div detailArticle
      detailArticle.appendChild(likesAndTitles); // ajout de la div likesAndTitles a la div detailArticle
    }
    // si la vidéo est définie
    else {
      // condition si la vidéo est définie
      const movie = document.createElement("video"); // création de la video
      movie.className = "media_galerie"; // ajout de la class media_galerie
      let urlMediaVideo = `assets/photographers/medias/${photographerName}/${video}`; // récupération de l'url de la vidéo
      movie.src = urlMediaVideo; // ajout de l'url de la vidéo
      movie.setAttribute("data-typemedia", "video"); // ajout de l'attribut data-typemedia
      movie.alt = `Video de ${title}`; // ajout de l'alt de la vidéo
      movie.controls = true; // ajout du contrôle de la vidéo
      mediaTitle.innerHTML = title; // ajout du titre du media
      mediaLikes.innerHTML = likes; // ajout du nombre de likes du media
      mediaLikes.setAttribute("data-likes-id", likes); // ajout de l'attribut data-likes-id
      likesHeartSpan.appendChild(mediaLikes); // nombre de likes du media
      likesAndTitles.appendChild(likesHeartSpan); // nombre de likes
      likesAndTitles.appendChild(mediaTitle); // titre du media
      imgVideo.appendChild(movie); // ajout de la video a l'article
      detailArticle.appendChild(imgVideo); // ajout de l'article a la div detailArticle
      detailArticle.appendChild(likesAndTitles); // ajout de la div likesAndTitles a la div detailArticle
    }

    // ecouteur d'évènement sur l'image ou la vidéo
    imgVideo.addEventListener("click", (event) => {
      displayLightbox(
        // appel de la fonction displayLightbox pour afficher la lightbox
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
      if (event.keyCode === 13) {
        // condition si la touche entrée est pressée
        displayLightbox(
          // appel de la fonction displayLightbox pour afficher la lightbox
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
    detailArticle.setAttribute("data-id", id); // ajout de l'attribut data-id

    return detailArticle; // retour de la div detailArticle
  }
  return { getMediaCardDOM }; // retour de la fonction getMediaCardDOM
}
