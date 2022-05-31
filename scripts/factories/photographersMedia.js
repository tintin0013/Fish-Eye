function photographerHeader(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/portrait/${portrait}`;
    function getUserCardDOM() {
        const presentation = document.createElement('div');
        presentation.className = "photographer_presentation";
        
      
            const templateProfil = ` 
                  <div class="presentation_photograph">
                      <h1 class="presentation_photograph_name" id="namePhotographer">${name}</h1>
                      <p class="presentation_photograph_location">${city}, ${country}</p>
                      <p class="presentation_photograph_description">${tagline}</p>
                  </div>
                  <a><img class="presentation_photograph_picture" src="${picture}" alt="Portrait de ${name}"></a>`;
            presentation.innerHTML = templateProfil;
            

return presentation; ;
  }
  return { getUserCardDOM };
}





// function photographerHeader(info) {

//     const {name, portrait, city, country, id, tagline, photographerId, title, image, likes, date, price} = info;
//     const picture = `assets/photographers/portrait/${portrait}`;
//     const photographie = `assets/photographers/medias/${image}`;
//     function getInfoCardDOM() {
//         const presentation = document.createElement('div');
//         presentation.className = "photograph-presentation";
//         const img = document.createElement( 'img' );
//         img.setAttribute("src", picture)
//         img.className= "photographer_photo"
//         img.setAttribute('alt', `Aperçu profil de ${name}`)
        
//         const h2 = document.createElement( 'h2' );
//         h2.textContent = name;

//         const pays = document.createElement('p')
//         pays.className = 'photographer_villePays'
//         pays.innerHTML = country+", "+city;

//         const tag = document.createElement('p');
//         tag.className = "photographer_tag"
//         tag.innerHTML = tagline;

//         function mediaFactory(media) {

//             const photos = document.createElement('div');
//         photos.className = "photograph-photos";
//         //const photo = document.createElement( 'img' );
//         //photo.setAttribute("src", photographie)
//         photos.appendChild(photo)
//         presentation.appendChild(photos)
//         }
       
        

//         const prix = document.createElement('p')
//         prix.className = "photographer_prix"
//         prix.innerHTML = price+'€/par heure'

//         const like = document.createElement('div');
//         like.className = "photograph-like";
        
//         presentation.appendChild(img)
//         presentation.appendChild(h2)
//         presentation.appendChild(pays)
//         presentation.appendChild(tag)
        
//         presentation.appendChild(prix)
//         presentation.appendChild(like)
//         return (presentation)

        
    

//     }
//     return { name, picture, city, country, id, tagline, photographerId, title, image, likes, date, price, getInfoCardDOM }
// }
// //console.log("mediaFactory");
