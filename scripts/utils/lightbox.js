function displayLightbox(media, type, medias, photographerFirstName) {
  let mediaPosition = findMediaIndexInMedias(media, medias);
  let urlMediaPrefix = `assets/photographers/medias/${photographerFirstName}/`;

  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.getElementById("lightbox_content");
  const currentImage = lightboxContent.querySelector("img");
  const currentVideo = lightboxContent.querySelector("video");
  let currentMediaName = document.getElementById("current_media_name");
  const mediaName = document.createElement("p");
  mediaName.className = "media_name";
  mediaName.innerHTML = "";

  //   currentMediaName.innerHTML = "";
  console.log(media.title);
  lightbox.appendChild(currentMediaName);
  currentMediaName.appendChild(mediaName);

  if (type === "image") {
    let url = urlMediaPrefix + media.image;
      currentVideo.classList.add ("hidden");
    currentImage.classList.add ("visible");
    // currentVideo.style.display = "none";
    //   currentImage.style.display = "block";
    currentImage.src = url;
    currentImage.alt = `Image de ${media.title}`;
    console.log(media.title);
    mediaName.innerHTML = media.title;
  } else {
      let url = urlMediaPrefix + media.video;
      currentImage.classList.add ("hidden");
    currentVideo.classList.add ("visible");
    // currentImage.style.display = "none";
    //   currentVideo.style.display = "block";
    currentVideo.src = url;
    currentVideo.alt = `Video de ${media.title}`;
    currentVideo.controls = true;
    mediaName.innerHTML = media.title;
  }
  lightbox.style.display = "block";

  let left = document.querySelector(".chevron_left");
  left.addEventListener("click", () => {
    console.log("clic gauche");
    mediaPosition = getMediaPosition(mediaPosition - 1, medias.length);
    newMedia = medias[mediaPosition];
    if (newMedia.image !== undefined) {
        //   currentVideo.classList.add ("hidden");
//     currentImage.classList.add ("visible");
    //   currentVideo.style.display = "none";
    //   currentImage.style.display = "block";
      //       //  currentImage.classList.add ("visible");
      currentImage.classList.replace("hidden", "visible");
    //   currentImage.classList.add ("visible");
    //    currentImage.classList.remove ("hidden");
        currentVideo.classList.replace("visible", "hidden");
//  currentVideo.classList.add ("hidden");
//  currentVideo.classList.remove ("visible");
      currentImage.src = urlMediaPrefix + newMedia.image;
      currentImage.alt = `Image de ${newMedia.title}`;
      mediaName.innerHTML = newMedia.title;
      console.log("ma video:", currentVideo);
    } else {
        //   currentImage.classList.add ("hidden");
//     currentVideo.classList.add ("visible");
    //   currentImage.style.display = "none";
    //   currentVideo.style.display = "block";
      //       //  currentVideo.classList.add ("visible");
      currentVideo.classList.replace("hidden", "visible");
    //     currentVideo.classList.add ("visible");
    //  currentVideo.classList.remove ("hidden" );
     currentImage.classList.replace("visible", "hidden");
//  currentImage.classList.add ("hidden");
//     currentImage.classList.remove ("visible");
      currentVideo.src = urlMediaPrefix + newMedia.video;
      currentVideo.alt = `Video de ${newMedia.title}`;
      mediaName.innerHTML = newMedia.title;
      console.log("mon image", currentImage);
    }
  });

  let right = document.querySelector(".chevron_right");
  right.addEventListener("click", () => {
    console.log("clic droit");
    mediaPosition = getMediaPosition(mediaPosition + 1, medias.length);
    newMedia = medias[mediaPosition];
    if (newMedia.image !== undefined) {
         //   currentVideo.classList.add ("hidden");
//     currentImage.classList.add ("visible");
    //   currentVideo.style.display = "none";
    //   currentImage.style.display = "block";
      //       //  currentImage.classList.add ("visible");
      currentImage.classList.replace("hidden", "visible");
      //   currentImage.classList.add ("visible");
      //    currentImage.classList.remove ("hidden");
          currentVideo.classList.replace("visible", "hidden");
  //  currentVideo.classList.add ("hidden");
  //  currentVideo.classList.remove ("visible");
        currentImage.src = urlMediaPrefix + newMedia.image;
        currentImage.alt = `Image de ${newMedia.title}`;
        mediaName.innerHTML = newMedia.title;
    } else {
        //   currentImage.classList.add ("hidden");
//     currentVideo.classList.add ("visible");
    //   currentImage.style.display = "none";
    //   currentVideo.style.display = "block";
      //       //  currentVideo.classList.add ("visible");
      currentVideo.classList.replace("hidden", "visible");
      //     currentVideo.classList.add ("visible");
      //  currentVideo.classList.remove ("hidden" );
       currentImage.classList.replace("visible", "hidden");
  //  currentImage.classList.add ("hidden");
  //     currentImage.classList.remove ("visible");
        currentVideo.src = urlMediaPrefix + newMedia.video;
        currentVideo.alt = `Video de ${newMedia.title}`;
        mediaName.innerHTML = newMedia.title;
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
  const lightboxContent = document.getElementById("lightbox_content");

  const pNameMedia = document.querySelector(".media_name");
  document.querySelector(".current_media_name").removeChild(pNameMedia);
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
