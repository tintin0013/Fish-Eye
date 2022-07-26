//Mettre le code JavaScript lié à la page photographer.html

class PhotographerInfo {
  constructor() {
    this.photographerInfo = document.querySelector(".photographer_info"); //affiche les informations du photographe
    this.photographerSections = document.querySelector(".photograph-header"); //affiche la section du photographe
    this.photographerMedia = document.querySelector(".media_container"); //affiche les medias du photographe
    this.lightboxMedia = document.querySelector(".lightbox_media"); //affiche le lightbox des medias

    const photographerId = new URLSearchParams(window.location.search); //recupere l'id du photographe
    this.id = photographerId.get("id");
    this.apiUser = new apiUser("./data/photographers.json"); //recupere les données du photographe
  }

  //Affiche le menu de la page
  async menu() {
    this.photographer = await this.apiUser.getPhotographerById(this.id); //recupere les données du photographe grâce à son id
    this.displayPhotographer(this.photographer); //affiche les informations du photographe
    this.medias = await this.apiUser.getMediaById(this.id); //recupere les medias du photographe grâce à son id
    this.displayMedias(this.medias, this.photographer); //affiche les medias du photographe
    this.filterMedia(); //filtre les medias
    this.displayFilterMedias(); //affiche le menu de filtrage
  }

  //Affiche les informations du photographe
  displayPhotographer(user) {
    this.photographerInfo.innerHTML = ""; //supprime les informations du photographe
    const info = new infoFactory(user);
    const detail = info.getPhotographerCardDOM(); //recupere le DOM de la carte du photographe
    this.photographerInfo.appendChild(detail); //affiche la carte du photographe
  }

  //Affiche les medias du photographe
  displayMedias(medias, photographer) {
    medias.forEach((media) => {
      //pour chaque media
      const mediaPicture = new mediaFactory(media, photographer, medias);
      this.photographerMedia.appendChild(mediaPicture.getMediaCardDOM()); //ajoute la carte des medias

      // affiche le total des likes
      const totalLikesNumber = document.querySelector(".total_likes_number"); //recupere le total des likes
      const totalNumber = medias.reduce((a, b) => (a += b.likes), 0); //calcule le total des likes
      totalLikesNumber.innerHTML = totalNumber; //affiche le total des likes

      //Ajoute les évènements aux icones de coeur
      const heartIcons = document.querySelectorAll(".heart"); //recupere toutes les icones de coeur
      let loved = media.likes; //recupere le nombre de likes du media

      function incrementLikes() {
        for (let i = 0; i < heartIcons.length; i++) {
          //pour chaque icone de coeur
          heartIcons[i].addEventListener("click", (e) => {
            //ajoute un évènement au clic sur l'icone de coeur
            let heart = e.target; //recupere l'icone de coeur
            let heartParent = e.target.parentElement; //recupere la div parent de l'icone de coeur
            let likes = heartParent.children[1].dataset.likesId; //recupere le nombre de likes du media

            if (loved == likes) {
              //si le nombre de likes est égal au nombre de likes du media
              if (heart.classList.contains("fa-regular")) {
                //si l'icone de coeur est cochée
                let nLikes = heart.parentElement.querySelector(".number"); //recupere le nombre de likes du media
                let likesNumber = parseInt(nLikes.innerHTML);
                likesNumber++; //incrémente le nombre de likes du media
                nLikes.innerHTML = likesNumber; //affiche le nombre de likes du media
                heart.classList.replace("fa-regular", "fa-solid"); //change l'icone de coeur
                let allLikes = document.querySelector(".total_likes_number"); //recupere le total des likes
                let totalLikes = parseInt(allLikes.innerHTML);
                totalLikes++; //incrémente le total des likes
                allLikes.innerHTML = totalLikes; //affiche le total des likes
              } else {
                //si l'icone de coeur est décochée
                let likes = heart.parentElement.querySelector(".number"); //recupere le nombre de likes du media
                let likesNumber = parseInt(likes.innerHTML);
                likesNumber--; //décrémente le nombre de likes du media
                likes.innerHTML = likesNumber; //affiche le nombre de likes du media
                heart.classList.replace("fa-solid", "fa-regular"); //change l'icone de coeur
                let allLikes = document.querySelector(".total_likes_number"); //recupere le total des likes
                let totalLikes = parseInt(allLikes.innerHTML);
                totalLikes--; //décrémente le total des likes
                allLikes.innerHTML = totalLikes; //affiche le total des likes
              }
            }
          });
        }
      }
      incrementLikes(); //appel de la fonction qui ajoute les évènements aux icones de coeur
    });
  }

  //filtre les medias
  filterMedia(type) {
    switch (
      type //selection du filtre
    ) {
      case "popularite": //si le filtre est par popularité
        this.medias.sort(function (a, b) {
          //tri les medias par popularité
          if (a.likes < b.likes) {
            return 1; //si le nombre de likes du media a est inférieur au nombre de likes du media b, le media a est plus populaire
          }
          if (a.likes > b.likes) {
            return -1; //si le nombre de likes du media a est supérieur au nombre de likes du media b, le media b est plus populaire
          }
          return 0; //si les nombres de likes du media a et du media b sont égaux, le media a est plus populaire
        });
        break; //sort les medias par popularité
      case "date": //si le filtre est par date
        this.medias.sort(function (a, b) {
          //tri les medias par date
          if (a.date < b.date) {
            return 1; //si la date du media a est inférieur à la date du media b, le media a est plus récent
          }
          if (a.date > b.date) {
            return -1; //si la date du media a est supérieur à la date du media b, le media b est plus récent
          }
          return 0; //si les dates du media a et du media b sont égaux, le media a est plus récent
        });
        break; //sort les medias par date
      case "titre": //si le filtre est par titre
        this.medias.sort(function (a, b) {
          //tri les medias par titre
          if (a.title < b.title) {
            return -1; //si le titre du media a est inférieur au titre du media b, le media a est avant dans l'alphabet
          }
          if (a.title > b.title) {
            return 1; //si le titre du media a est supérieur au titre du media b, le media b est avant dans l'alphabet
          }
          return 0; //si les titres du media a et du media b sont égaux, le media a est avant dans l'alphabet
        });
        break; //sort les medias par titre
      default: //si le filtre n'est pas par popularité, date ou titre
        return this.medias; //retourne les medias
    }

    this.photographerMedia.innerHTML = ""; //vide le contenu de la div des medias
    this.displayMedias(this.medias, this.photographer); //affiche les medias triés
  }

  // selection du filtre
  displayFilterMedias() {
    const filter = document.getElementById("media_filtre"); //recupere le filtre
    filter.addEventListener("change", (e) => {
      //ajoute un évènement au changement de filtre
      this.filterMedia(e.target.value); //appel de la fonction qui filtre les medias selon le filtre sélectionné
    });
  }
}
const photographerSections = new PhotographerInfo();
photographerSections.menu();




