class apiUser {

   

    async getPhotographers() {
        const response = await fetch("./data/photographers.json");
        const json = await response.json();
        // console.log("sortie")
        // console.log(json)
        return json;

    }

    async getPhotographerById(id) {
        let photographers = [];

        await fetch("./data/photographers.json")
        .then((reponse) => reponse.json())
        .then((data) => (photographers = data.photographers));

        let photograph = photographers.find((photographe) => photographe.id == id);
        return photograph;
    }

    
}
