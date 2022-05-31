//Mettre le code JavaScript lié à la page photographer.html
async function displayDataPhotographer(photographers) {
    const photographersSection = document.querySelector(".photograph-header");
  
    photographers.forEach((photographer) => {
      const photographerModel = photographerHeader(photographer);
      const userCardDOM = photographerModel.getUserCardDOM();
      photographersSection.appendChild(userCardDOM);
    });
  }


  async function initPhotographer() {
    fetch("./data/photographers.json")
      .then((response) => {
        return response.json();
      })
      .then((myData) => {
        displayDataPhotographer(myData.photographers);
      });
  }
  initPhotographer();


  async function displayData(medias, id ) {
    // Récupère la section pour les medias
    const mediasSection = document.createElement('div');
    mediasSection.className = "photograph-medias";
    // Permet de reset les sections
    mediasSection.innerHTML = "";
  
    // Permet de récupérer la page du photographe correspondant à son id
    nbMedias = 0;
    medias.forEach((media) => {
      if (id == media.photographerId) {
        nbMedias++
        const mediasModel = mediasFactory(media);
        const userCardDOM = mediasModel.getUserCardDOM( nbMedias);
        mediasSection.appendChild(userCardDOM);
      }
    });
  }




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