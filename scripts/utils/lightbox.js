function displayLightbox(media, type, medias, photographerFirstName) {
  let mediaPosition = findMediaIndexInMedias(media, medias);
  let urlMediaPrefix = `assets/photographers/medias/${photographerFirstName}/`;

  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightbox_content");
  const currentImage = lightboxContent.querySelector("img");
  const currentVideo = lightboxContent.querySelector("video");
  if (type === "image") {
    let url = urlMediaPrefix + media.image;
    currentImage.src = url;
  } else {
    let url = urlMediaPrefix + media.video;
    currentVideo.src = url;
  }
  lightbox.style.display = "block";
  let left = document.querySelector(".chevron_left");
  left.addEventListener("click", () => {
    console.log("clic gauche");
    mediaPosition = getMediaPosition(mediaPosition - 1, medias.length);
    newMedia = medias[mediaPosition];
    if (newMedia.image !== undefined) {
      currentImage.src = urlMediaPrefix + newMedia.image;
    } else {
      currentVideo.src = urlMediaPrefix + newMedia.video;
    }
  });
  let right = document.querySelector(".chevron_right");
  right.addEventListener("click", () => {
    console.log("clic droit");
    mediaPosition = getMediaPosition(mediaPosition + 1, medias.length);
    newMedia = medias[mediaPosition];
    if (newMedia.image !== undefined) {
      currentImage.src = urlMediaPrefix + newMedia.image;
    } else {
      currentVideo.src = urlMediaPrefix + newMedia.video;
    }
  });
}

function getMediaPosition(mediaPosition, length) { 
  if (mediaPosition < 0) {
    mediaPosition = length - 1;
  } else if (mediaPosition == length) {
    mediaPosition = 0;
  }
  return mediaPosition;
}

function findMediaIndexInMedias(media, medias) {
  for (let i = 0; i < medias.length; i++) {
    if (media.id === medias[i].id) {
      return i;
    }
  }
  return null;
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}






// function displayLightbox(media, type, medias, photographerFirstName) {
//     let mediaPosition = findMediaIndexInMedias(media, medias);
//     console.log("on est a la place du tableau -> ", mediaPosition);

//     let urlMediaPrefix = `assets/photographers/medias/${photographerFirstName}/`;
//     console.log(medias);
//     console.log(mediaPosition);
//     // console.log("displayLightbox", url , type);
//     //  commentaire todo  identifier contenu html  image/video
//     // idetification image
//     const lightbox = document.getElementById("lightbox");
//     const lightboxContent = document.getElementById("lightbox_content");
//     const currentImage = lightboxContent.querySelector("img");
//     const currentVideo = lightboxContent.querySelector("video");
//     if (type === "image") {
//       // currentVideo.style.display = "none";
//       let url = urlMediaPrefix + media.image;
//       console.log(url);
//       currentImage.src = url;
//       console.log("test image", currentImage);
//     } else {
//       // currentImage.style.display = "none";
//       let url = urlMediaPrefix + media.video;
//       currentVideo.src = url;
//       console.log("test video", currentVideo);
//     }
//     lightbox.style.display = "block";

//     let left = document.querySelector(".chevron_left");
//     left.addEventListener("click", () => {
//       console.log("clic gauche");
//       if (mediaPosition > 0) {
//         mediaPosition--;
//         console.log("mediaPosition", mediaPosition);
//         console.log("medias", medias);
//         console.log("media", medias[mediaPosition]);
//         displayLightbox(
//            medias[mediaPosition], type, medias, photographerFirstName
//         );
//       }
//     });

//     let right = document.querySelector(".chevron_right");
//     right.addEventListener("click", () => {
//       console.log("clic droit");
//       if (mediaPosition < medias.length - 1) {
//         mediaPosition++;
//         console.log("mediaPosition", mediaPosition);
//         console.log("medias", medias);
//         console.log("media", medias[mediaPosition]);
//         displayLightbox(
//            medias[mediaPosition], type, medias, photographerFirstName
//         );
//       }
//     });
//   }

//   function findMediaIndexInMedias(media, medias){
//       for(let i = 0; i < medias.length; i++){
//           if(media.id === medias[i].id){
//               return i;
//           }
//       }
//       return null;
//   }

//   function closeLightbox() {
//       const lightbox = document.getElementById("lightbox");
//       lightbox.style.display = "none";
//   }
