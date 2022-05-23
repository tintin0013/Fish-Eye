    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        
        const response = await fetch('./data/photographers.json',{
            method: 'GET'
        })
        .then(response =>response.text())
        let json = JSON.parse(response);
        return json
        }
     
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        console.log(photographers   );
        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            console.log(photographerModel);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const  photographers  = await getPhotographers()
        displayData(photographers.photographers);
    };
    // console.log(init());
    init();
    