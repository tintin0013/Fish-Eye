class Photographers {

    constructor() {

        this.photographersSection = document.querySelector(".photographer_section");
        this.apiUser = new apiUser('./data/photographers.json')
    }
    async menu() {
        this.users = await this.apiUser.getPhotographers();
        this.displayData(this.users)
    }

    displayData(users) {
        this.photographersSection.innerHTML = "";
        users.photographers.forEach(user => {
            const photograph = new photographerFactory(user)
            this.photographersSection.appendChild(photograph.getUserCardDOM())
    })
}
}
const photographers = new Photographers()
photographers.menu()

