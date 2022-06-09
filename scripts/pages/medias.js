//Mettre le code JavaScript lié à la page photographer.html

//Page profil du photographe Aquisition des éléments 
async function getPhotographerById(id) {
	let photographers = [];
 //   let medias = [];
  console.log(photographers)
  console.log(id);

	await fetch("./data/photographers.json")
		.then(reponse => reponse.json())
		.then((data) => (photographers = data.photographers))
    
    let photographeInfo = photographers.find(photographe => photographe.id == id)
		
    await fetch("./data/photographers.json")
		.then(reponse => reponse.json())
		.then((data) => (medias = data.media))

        console.log(photographers)
		 console.log(photographeInfo);
		
    // const mediaArray = medias.filter(media => media.photographerId == id)
    // photographeObject.medias = mediaArray;

    //  console.log(mediaArray);
      
	return { photographer: photographeInfo }
}

async function displayDataPhotographer(photographer) {
    const photographersSection = document.querySelector(".photograph-header");
  const photographerModel = photographerHeader(photographer);
  const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
};

async function init() {
	// Get datas of all photographers
    let paramsUrlProfile = new URLSearchParams(window.location.search);
	const { photographer } = await getPhotographerById(paramsUrlProfile.get('id'));
	displayDataPhotographer(photographer);
};

init();


// async function displayDataPhotographer(photographers) {
//     const photographersSection = document.querySelector(".photograph-header");
  
//     photographers.forEach((photographer) => {
//       const photographerModel = photographerHeader(photographer);
//       const userCardDOM = photographerModel.getUserCardDOM();
//       photographersSection.appendChild(userCardDOM);
//     });
//   }


//   async function initPhotographer(id) {
//     const response = await fetch('./data/photographers.json')
//     const json = await response.json()
//     const photographer = json.photographers.find(p => p.id === parseInt(id));
//     photographer.medias = json.media.filter(m => m.photographerId === parseInt(id));
//     displayDataPhotographer(myData.photographers);
//     return photographer;
// }
// initPhotographer();

// async function initPhotographer() {

//     let photographer = [];
//     let medias = [];
//     let paramsUrlProfile = new URLSearchParams(recupUrl);
//     let idPhotographer = paramsUrlProfile.get("id");
//     await fetch("./data/photographers.json")
//       .then((response) => {
//         return response.json();
//       })
//       .then((myData) => {
//         displayDataPhotographer(myData.photographers);
//       });
//   }
//   initPhotographer();


//   async function displayData(medias, id ) {
//     // crée la div pour les medias
//     const mediasSection = document.createElement('div');
//     mediasSection.className = "photograph-medias";
//     // Permet de reset les sections
//     mediasSection.innerHTML = "";
  
//     // Permet de récupérer la page du photographe correspondant à son id
//     nbMedias = 0;
//     medias.forEach((media) => {
//       if (id == media.photographerId) {
        
//       }
//     });
//   }




// async function getInfoPhotographer() {
    
//     const response = await fetch('./data/photographers.json',{
//         method: 'GET'
//     })
//     .then(response =>response.text())
//     let json = JSON.parse(response);
//     return json
//     }
    
    // async function displayInfoData(infos) {
    //     const infoSection = document.querySelector(".photograph-header");
    //     return infos.forEach((info) => {
    //         const infoModel = infoFactory(info);
    //         const infoDOM = infoModel.getInfoCardDOM();
    //         infoSection.appendChild(infoDOM);
    //         console.log(infoSection);
    //     })
        
    // };


   

    // async function infoInit() {
    //     // Récupère les infos des photographes
    //     const  infos  = await getInfoPhotographer()
    //     displayInfoData(infos.photographers);
    // };
    // // console.log(infoInit());
    // infoInit();
    
    // console.log("media")

   // async function getMedias() {
     //   const response = await fetch('./data/photographers.json',{
       //     method: 'GET'
       // })
       // .then(response =>response.text())
       // let json = JSON.parse(response);
      //  return json
  //  }

  //  async function displayMedia(medias) {
   //     const mediaSection = document.querySelector(".photograph-photos");
  //      medias.forEach((media) => {
    //        const mediaModel = mediaFactory(media);
      //      const mediaCardDOM = mediaModel.getMediaCardDOM();
        //    mediaSection.appendChild(mediaCardDOM);
    //    });
   // };
   // async function mediaInit() {
        // Récupère les medias des photographes
     //   const  medias  = await getMedias()
       // displayMedia(medias.photographers);
   // };
    // console.log(infoInit());
    //mediaInit();

    

   














// async function getInfoPhotographer(id) {
//     const retour = await fetch('./data/photographers.json',{
//     method: 'GET'
//     })
//     .then(retour =>retour.text())
//    let json = JSON.parse(retour);
//     return json
// }    
//      async function displayInfoData(media) {
//          const mediaSection = document.querySelector(".photograph-header");
//          console.log(media);
//          media.forEach((media) => {
//              const mediaModel = mediaFactory(media);
//              console.log(mediaModel);
//              const userCardDOM = mediaModel.getUserCardDOM();
//              mediaSection.appendChild(userCardDOM);
//          });
  
//      }
//    async function initInfo() {
//      // Récupère les medias des photographes
//      const  media  = await getInfoPhotographer()
//      displayInfoData(media);
//      console.log(initInfo());
//  }
//  initInfo();