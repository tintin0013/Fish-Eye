class apiUser {
  // fetch pour récupérer les photographes
  async getPhotographers() {
    const response = await fetch("./data/photographers.json");
    const json = await response.json();
    return json; // retourne les données des photographes
  }

  // fetch pour récupérer le photographe par son id
  async getPhotographerById(id) {
    const data = await fetch("./data/photographers.json");
    const json = await data.json();
    const photograph = json.photographers.find(
      (photographe) => photographe.id == id
    );
    return photograph; // retourne les données du photographe
  }

  // fetch pour récupérer les medias par l'id du photographe
  async getMediaById(id) {
    const data = await fetch("./data/photographers.json");
    const json = await data.json();
    const photographer = json.photographers.find((p) => p.id === parseInt(id));
    photographer.medias = json.media.filter(
      (m) => m.photographerId === parseInt(id)
    );
    return photographer.medias; // retourne les medias du photographe
  }
}
