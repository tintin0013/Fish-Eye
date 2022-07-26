class Photographers {
  constructor() {
    this.photographersSection = document.querySelector(".photographer_section"); // récupère la section des photographes
    this.apiUser = new apiUser("./data/photographers.json"); // récupère les données des photographes
  }

  //Affiche les photographes
  async menu() {
    this.users = await this.apiUser.getPhotographers(); // récupère les photographes
    this.displayData(this.users); // affiche les photographes
  }

  //Affiche les informations des photographes
  displayData(users) {
    this.photographersSection.innerHTML = ""; // vide la section des photographes
    users.photographers.forEach((user) => {
      // pour chaque photographe
      const photograph = new photographerFactory(user); // crée un objet photographe
      this.photographersSection.appendChild(photograph.getUserCardDOM()); // ajoute la carte des informations des photographes
    });
  }
}
const photographers = new Photographers();
photographers.menu();
