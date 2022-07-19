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
  let mediaPosition = findMediaIndexInMedias(media, medias);
  let urlMediaPrefix = `assets/photographers/medias/${photographerName}/`;

  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightbox_content");
  const currentImage = lightboxContent.querySelector("img");
  const currentVideo = lightboxContent.querySelector("video");
  let currentMediaName = document.getElementById("current_media_name");
  const mediaName = document.createElement("p");
  mediaName.className = "media_name";
  mediaName.innerHTML = "";

  lightbox.appendChild(currentMediaName);
  currentMediaName.appendChild(mediaName);

  // si l'image est définie
  if (type === "image") {  
    let url = urlMediaPrefix + image;
    currentVideo.classList.add("hidden");
    currentImage.classList.add("visible");
    currentImage.src = url;
    currentImage.alt = `Image de ${title}`;
    mediaName.innerHTML = media.title;
  } 
  // si la vidéo est définie
  else { 
    let url = urlMediaPrefix + video;
    currentImage.classList.add("hidden");
    currentVideo.classList.add("visible");
    currentVideo.src = url;
    currentVideo.alt = `Video de ${title}`;
    currentVideo.controls = true;
    mediaName.innerHTML = media.title;
  }
  lightbox.style.display = "block";

  // ecouteur d'évènement chevron sur le bouton gauche
  let left = document.querySelector(".chevron_left");
  left.addEventListener("click", previous); 

  // ecouteur d'évènement chevron sur le bouton droit
  let right = document.querySelector(".chevron_right");
  right.addEventListener("click", next);

// ecouteur d'évènement clavier sur le bouton gauche, droit, echap
  window.addEventListener("keydown", function (e) {  
    if (e.keyCode === 37) {
      previous();
    } else if (e.keyCode === 39) {
      next();
    } else if (e.keyCode === 27) {
      closeLightbox();
    }
  });

  //fonction clic gauche pour la precedante media
  function previous() {
    console.log("clic gauche");
    mediaPosition = getMediaPosition(mediaPosition - 1, medias.length);
    newMedia = medias[mediaPosition];
    if (newMedia.image !== undefined) {
      currentImage.classList.replace("hidden", "visible");
      currentVideo.classList.replace("visible", "hidden");
      currentImage.src = urlMediaPrefix + newMedia.image;
      currentImage.alt = `Image de ${newMedia.title}`;
      mediaName.innerHTML = newMedia.title;
    } else {
      currentVideo.classList.replace("hidden", "visible");
      currentImage.classList.replace("visible", "hidden");
      currentVideo.src = urlMediaPrefix + newMedia.video;
      currentVideo.alt = `Video de ${newMedia.title}`;
      mediaName.innerHTML = newMedia.title;
    }
  }
  //fonction clic droit pour la prochaine media
  function next() {  
    console.log("clic droit");
    mediaPosition = getMediaPosition(mediaPosition + 1, medias.length);
    newMedia = medias[mediaPosition];
    if (newMedia.image !== undefined) {
      currentImage.classList.replace("hidden", "visible");
      currentVideo.classList.replace("visible", "hidden");
      currentImage.src = urlMediaPrefix + newMedia.image;
      currentImage.alt = `Image de ${newMedia.title}`;
      mediaName.innerHTML = newMedia.title;
    } else {
      currentVideo.classList.replace("hidden", "visible");
      currentImage.classList.replace("visible", "hidden");
      currentVideo.src = urlMediaPrefix + newMedia.video;
      currentVideo.alt = `Video de ${newMedia.title}`;
      mediaName.innerHTML = newMedia.title;
    }
  }
}

function getMediaPosition(mediaPosition, length) {                  
  if (mediaPosition < 0) {   
    mediaPosition = length - 1;
  } else if (mediaPosition == length) {
    mediaPosition = 0;
  }
  return mediaPosition;
}

 // retourne l'index de la media dans le tableau medias  
function findMediaIndexInMedias(media, medias) {  
  for (let i = 0; i < media.length; i++) {
    if (media.id === medias[i].id) {
      return i;
    }
  }
  return null;
}

 // ferme la lightbox
function closeLightbox() { 
  const lightbox = document.getElementById("lightbox");
  const pNameMedia = document.querySelector(".media_name");
  document.querySelector(".current_media_name").removeChild(pNameMedia);
  lightbox.style.display = "none";
}
