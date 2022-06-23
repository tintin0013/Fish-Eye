class apiUser {

   

    async getPhotographers() {
        const response = await fetch("./data/photographers.json");
        const json = await response.json();
        console.log("sortie")
        console.log(json)
        return json;

    }

    
    async getPhotographerById(id) {
        const data = await fetch("./data/photographers.json")
        const json = await data.json();
        const photograph = json.photographers.find(photographe => photographe.id == id);
        return photograph;
    }
    

    async getMediaById(id) {
        const data = await fetch("./data/photographers.json")
        const json = await data.json();
        const photographer = json.photographers.find(p => p.id === parseInt(id))
        photographer.medias = json.media.filter(m => m.photographerId === parseInt(id))
        return photographer.medias
       
    }

    
}












// async getPhotographerById(id) {
//     let photographers = [];

//     await fetch("./data/photographers.json")
//     .then((reponse) => reponse.json())
//     .then((data) => (photographers = data.photographers));

//     let photograph = photographers.find((photographe) => photographe.id == id);
//     return photograph;
// }
