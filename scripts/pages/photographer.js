//Mettre le code JavaScript lié à la page photographer.html

class PhotographerInfo {
    constructor() {
      this.photographerInfo = document.querySelector(".photographer_info");
        this.photographerSections = document.querySelector(".photograph-header");
        this.photographerMedia = document.querySelector(".photographer_media");
        this.lightboxMedia = document.querySelector(".lightbox_media");
        

        const photographerId = new URLSearchParams(window.location.search)
        this.id = photographerId.get("id")
        console.log("id", this.id)
        this.apiUser = new apiUser('./data/photographers.json');
    }
    async menu() {
        this.photographer = await this.apiUser.getPhotographerById(this.id)
        this.medias = await this.apiUser.getMediaById(this.id)
       

        const info = new infoFactory(this.photographer)
        const detail = info.getPhotographerCardDOM()
        this.photographerInfo.appendChild(detail)


        const media = new mediaFactory(this.medias) 
        const mediaDetail = media.getMediaCardDOM()
        this.photographerMedia.appendChild(mediaDetail)

        this.filterMedia()
        this.displayFilterMedias()
    } 
   
    // value = document.getElementsByTagName('option')
    filterMedia(value){
    
      if(value === "popularite"){
        this.medias.sort(function(a, b){
          if(a.likes < b.likes) { 
            return 1; 
          }
          if(a.likes > b.likes) {
            return -1;
          }
          return 0
        })
      }
      else if(value === "date"){
        this.medias.sort(function(a, b){
          if(a.date < b.date) { 
            return 1; 
          }
          if(a.date > b.date) {
            return -1;
          }
          return 0
        })
        }
     else if(value === "titre"){
        this.medias.sort(function(a, b){
          if(a.title < b.title) { 
            return -1; 
          }
          if(a.title > b.title) {
            return 1;
          }
          return 0
        })
      }
      else {
        return this.medias;
      }
      this.photographerMedia.innerHTML = "";
      const photoLightbox = mediaFactory(this.medias)
      this.photographerMedia.appendChild(photoLightbox.getMediaCardDOM())
    }

  

    
    
    displayFilterMedias(){
        const filter = document.getElementById('media_filtre')
        filter.addEventListener('change', (e) => {
          // console.log("banane",e.target.value)
             return this.filterMedia(e.target.value)
        })
    }
}
const photographerSections = new PhotographerInfo()
photographerSections.menu()
