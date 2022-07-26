// creation de la lightbox

function displayLightbox(
  media,
  type,
  photographerName,
  image,
  video,
  title,
  medias
) {
  let mediaPosition = findMediaIndexInMedias(media, medias); // récupération de l'index du media dans le tableau medias
  let urlMediaPrefix = `assets/photographers/medias/${photographerName}/`; // récupération de l'url du media

  const lightbox = document.getElementById("lightbox"); // récupération de la lightbox
  const lightboxContent = document.getElementById("lightbox_content"); // récupération du contenu de la lightbox
  const currentImage = lightboxContent.querySelector("img"); // récupération de l'image de la lightbox
  const currentVideo = lightboxContent.querySelector("video"); // récupération de la vidéo de la lightbox
  let currentMediaName = document.getElementById("current_media_name"); // récupération du nom du media de la lightbox
  const mediaName = document.createElement("p"); // création du p pour afficher le nom du media
  mediaName.className = "media_name"; // ajout de la class media_name
  mediaName.innerHTML = ""; // ajout du texte vide

  lightbox.appendChild(currentMediaName); // ajout du p dans la lightbox
  currentMediaName.appendChild(mediaName); // ajout du nom du media dans le p

  // si l'image est définie
  if (type === "image") {
    // si le type est image
    let url = urlMediaPrefix + image; // récupération de l'url de l'image
    currentVideo.classList.add("hidden"); // ajout de la class hidden à la vidéo
    currentImage.classList.add("visible"); // ajout de la class visible à l'image
    currentImage.src = url; // ajout de l'url de l'image à l'image
    currentImage.alt = `Image de ${title}`; // ajout de l'alt de l'image
    mediaName.innerHTML = media.title; // ajout du nom du media dans le p
  }
  // si la vidéo est définie
  else {
    // si le type est vidéo
    let url = urlMediaPrefix + video; // récupération de l'url de la vidéo
    currentImage.classList.add("hidden"); // ajout de la class hidden à l'image
    currentVideo.classList.add("visible"); // ajout de la class visible à la vidéo
    currentVideo.src = url; // ajout de l'url de la vidéo à la vidéo
    currentVideo.alt = `Video de ${title}`; // ajout de l'alt de la vidéo
    currentVideo.controls = true; // ajout du contrôle à la vidéo
    mediaName.innerHTML = media.title; // ajout du nom du media dans le p
  }
  lightbox.style.display = "block"; // affichage de la lightbox

  // ecouteur d'évènement chevron sur le bouton gauche
  let left = document.querySelector(".chevron_left");
  left.addEventListener("click", previous);

  // ecouteur d'évènement chevron sur le bouton droit
  let right = document.querySelector(".chevron_right");
  right.addEventListener("click", next);

  // ecouteur d'évènement clavier sur le bouton gauche, droit, echap
  window.addEventListener("keydown", function (e) {
    if (e.keyCode === 37) {
      // si le code de la touche est 37 (gauche)
      previous();
    } else if (e.keyCode === 39) {
      // si le code de la touche est 39 (droite)
      next();
    } else if (e.keyCode === 27) {
      // si le code de la touche est 27 (echap)
      closeLightbox(); // ferme la lightbox
    }
  });

  //fonction clic gauche pour la precedante media
  function previous() {
    console.log("clic gauche");
    mediaPosition = getMediaPosition(mediaPosition - 1, medias.length); // récupération de l'index du media dans le tableau medias
     let newMedia = medias[mediaPosition];
    if (newMedia.image !== undefined) {
      // si l'image est définie
      currentImage.classList.replace("hidden", "visible"); // remplacement de la class hidden par visible à l'image
      currentVideo.classList.replace("visible", "hidden"); // remplacement de la class visible par hidden à la vidéo
      currentImage.src = urlMediaPrefix + newMedia.image; // ajout de l'url de l'image à l'image
      currentImage.alt = `Image de ${newMedia.title}`; // ajout de l'alt de l'image
      mediaName.innerHTML = newMedia.title; // ajout du nom du media dans le p
    } else {
      // si la vidéo est définie
      currentVideo.classList.replace("hidden", "visible"); // remplacement de la class hidden par visible à la vidéo
      currentImage.classList.replace("visible", "hidden"); // remplacement de la class visible par hidden à l'image
      currentVideo.src = urlMediaPrefix + newMedia.video; // ajout de l'url de la vidéo à la vidéo
      currentVideo.alt = `Video de ${newMedia.title}`; // ajout de l'alt de la vidéo
      currentVideo.controls = true; // ajout du contrôle à la vidéo
      mediaName.innerHTML = newMedia.title; // ajout du nom du media dans le p
    }
  }
  //fonction clic droit pour la prochaine media
  function next() {
    console.log("clic droit");
    mediaPosition = getMediaPosition(mediaPosition + 1, medias.length); // récupération de l'index du media dans le tableau medias
    let newMedia = medias[mediaPosition];
    if (newMedia.image !== undefined) {
      // si l'image est définie
      currentImage.classList.replace("hidden", "visible"); // remplacement de la class hidden par visible à l'image
      currentVideo.classList.replace("visible", "hidden"); // remplacement de la class visible par hidden à la vidéo
      currentImage.src = urlMediaPrefix + newMedia.image; // ajout de l'url de l'image à l'image
      currentImage.alt = `Image de ${newMedia.title}`; // ajout de l'alt de l'image
      mediaName.innerHTML = newMedia.title; // ajout du nom du media dans le p
    } else {
      // si la vidéo est définie
      currentVideo.classList.replace("hidden", "visible"); // remplacement de la class hidden par visible à la vidéo
      currentImage.classList.replace("visible", "hidden"); // remplacement de la class visible par hidden à l'image
      currentVideo.src = urlMediaPrefix + newMedia.video; // ajout de l'url de la vidéo à la vidéo
      currentVideo.alt = `Video de ${newMedia.title}`; // ajout de l'alt de la vidéo
      currentVideo.controls = true; // ajout du contrôle à la vidéo
      mediaName.innerHTML = newMedia.title; // ajout du nom du media dans le p
    }
  }
}

// fonction qui permet de récupérer l'index du media dans le tableau medias
function getMediaPosition(mediaPosition, length) {
  if (mediaPosition < 0) {
    // si le media est en début de tableau
    mediaPosition = length - 1; // on le place à la fin du tableau
  } else if (mediaPosition == length) {
    // si le media est en fin de tableau
    mediaPosition = 0; // on le place au début du tableau
  }
  return mediaPosition; // on retourne l'index du media
}

// retourne l'index du media dans le tableau medias
function findMediaIndexInMedias(media, medias) {
  //
  for (let i = 0; i < media.length; i++) {
    // pour chaque media dans le tableau medias
    if (media.id === medias[i].id) {
      // si l'id de la media est égal à l'id de la media dans le tableau medias
      return i; // retourne l'index de la media dans le tableau medias
    }
  }
  return null; 
}

// ferme la lightbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox"); // récupération de la lightbox
  const pNameMedia = document.querySelector(".media_name"); // récupération du p contenant le nom du media
  document.querySelector(".current_media_name").removeChild(pNameMedia); // suppression du p contenant le nom du media
  lightbox.style.display = "none"; // masquage de la lightbox
}
