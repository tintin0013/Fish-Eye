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
        this.media = await this.apiUser.getMediaById(this.id)
       

        const info = new infoFactory(this.photographer)
        const detail = info.getPhotographerCardDOM()
        this.photographerInfo.appendChild(detail)


        const media = new mediaFactory(this.media) 
        const mediaDetail = media.getMediaCardDOM()
        this.photographerMedia.appendChild(mediaDetail)
    } 
}
const photographerSections = new PhotographerInfo()
photographerSections.menu()
