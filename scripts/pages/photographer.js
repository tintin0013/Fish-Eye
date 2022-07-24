//Mettre le code JavaScript lié à la page photographer.html

class PhotographerInfo {
  constructor() {
    this.photographerInfo = document.querySelector(".photographer_info");
    this.photographerSections = document.querySelector(".photograph-header");
    this.photographerMedia = document.querySelector(".media_container");
    this.lightboxMedia = document.querySelector(".lightbox_media");

    const photographerId = new URLSearchParams(window.location.search);
    this.id = photographerId.get("id");
    this.apiUser = new apiUser("./data/photographers.json");
  }

  //Affiche le menu de la page
  async menu() {
    this.photographer = await this.apiUser.getPhotographerById(this.id);
    this.displayPhotographer(this.photographer);
    this.medias = await this.apiUser.getMediaById(this.id);
    this.displayMedias(this.medias, this.photographer);
    this.filterMedia();
    this.displayFilterMedias();
  }

  //Affiche les informations du photographe
  displayPhotographer(user) {
    this.photographerInfo.innerHTML = "";
    const info = new infoFactory(user);
    const detail = info.getPhotographerCardDOM();
    this.photographerInfo.appendChild(detail);
  }

  //Affiche les medias du photographe
  displayMedias(medias, photographer) {
    medias.forEach((media) => {
      const mediaPicture = new mediaFactory(media, photographer, medias);
      this.photographerMedia.appendChild(mediaPicture.getMediaCardDOM());

      // affiche le total des likes
      const totalLikesNumber = document.querySelector(".total_likes_number");
      const totalNumber = medias.reduce((a, b) => (a += b.likes), 0);
      totalLikesNumber.innerHTML = totalNumber;

      //Ajoute les évènements aux icones de coeur
      const heartIcons = document.querySelectorAll(".heart");
      let loved = media.likes;

      function incrementLikes() {
        for (let i = 0; i < heartIcons.length; i++) {
          heartIcons[i].addEventListener("click", (e) => {
            let heart = e.target;
            let heartParent = e.target.parentElement;
            let likes = heartParent.children[1].dataset.likesId;

            if (loved == likes) {
              if (heart.classList.contains("fa-regular")) {
                let nLikes = heart.parentElement.querySelector(".number");
                let likesNumber = parseInt(nLikes.innerHTML);
                likesNumber++;
                nLikes.innerHTML = likesNumber;
                heart.classList.replace("fa-regular", "fa-solid");
                let allLikes = document.querySelector(".total_likes_number");
                let totalLikes = parseInt(allLikes.innerHTML);
                totalLikes++;
                allLikes.innerHTML = totalLikes;
              } else {
                let likes = heart.parentElement.querySelector(".number");
                let likesNumber = parseInt(likes.innerHTML);
                likesNumber--;
                likes.innerHTML = likesNumber;
                heart.classList.replace("fa-solid", "fa-regular");
                let allLikes = document.querySelector(".total_likes_number");
                let totalLikes = parseInt(allLikes.innerHTML);
                totalLikes--;
                allLikes.innerHTML = totalLikes;
              }
            }
          });
        }
      }
      incrementLikes();
    });
  }

  //filtre les medias
  filterMedia(type) {
    switch (type) {
      case "popularite":
        this.medias.sort(function (a, b) {
          if (a.likes < b.likes) {
            return 1;
          }
          if (a.likes > b.likes) {
            return -1;
          }
          return 0;
        });
        break;
      case "date":
        this.medias.sort(function (a, b) {
          if (a.date < b.date) {
            return 1;
          }
          if (a.date > b.date) {
            return -1;
          }
          return 0;
        });
        break;
      case "titre":
        this.medias.sort(function (a, b) {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
        break;
      default:
        return this.medias;
    }
    
    this.photographerMedia.innerHTML = "";
    this.displayMedias(this.medias , this.photographer)
    // this.medias.forEach((media) => {
    //   const mediasFiltred = mediaFactory(media, this.photographer, this.medias);
    //   this.photographerMedia.appendChild(mediasFiltred.getMediaCardDOM());
    // });
  }

  // selection du filtre
  displayFilterMedias() {
    const filter = document.getElementById("media_filtre");
    filter.addEventListener("change", (e) => {
     this.filterMedia(e.target.value);
      
    });
  }
}
const photographerSections = new PhotographerInfo();
photographerSections.menu();
