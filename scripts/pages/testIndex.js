class Welcome {

    constructor() {

        this.photographersSection = document.querySelector(".photographer_section");
        this.apiUser = new apiUser('./data/photographers.json')
    }
    async menu() {
        this.users = await this.apiUser.getPhotographers();
        this.photographers = this.users;
        this.displayData()
    }

    displayData() {
        this.photographersSection.innerHTML = "";
        this.photographers.forEach(user => {
            const photograph = new photographerFactory(user)
            this.photographersSection.appendChild(photograph.getUserCardDOM())
    })
}
}
const welcome = new Welcome()
welcome.menu()
