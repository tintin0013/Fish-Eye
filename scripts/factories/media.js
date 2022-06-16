// const recupUrl = window.location.search;
// console.log(window.location.search);


function infoFactory(data) {
    // const idPhotographer = recupUrl.get("id");
   
   
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/portrait/${portrait}`;

    function getPhotographerCardDOM() {
        const photographerSection = document.querySelector(".photographer_info");
        const article = document.createElement('article');
        const presentation = document.createElement('div');
        const btnForm = document.createElement('button');
        const h1 = document.createElement('h1');
        const pays = document.createElement('p');
        const tag = document.createElement('p');
        const img = document.createElement('img');


        btnForm.setAttribute("onclick", "displayModal()")
        img.setAttribute('src', picture);
        img.setAttribute('alt', `Aperçu profil de ${name}`);

        presentation.className = "presentation_photograph";
        article.className = "presentation_card";
        h1.className = "presentation_name";
        btnForm.className = "contact_button";
        pays.className = "presentation_location";
        tag.className = "presentation_description";
        img.className = "presentation_photo";

        h1.textContent = name;
        btnForm.innerText = "Contactez-moi"
        pays.innerHTML = country + ", " + city;
        tag.innerHTML = tagline;

        presentation.appendChild(h1);
        presentation.appendChild(pays);
        presentation.appendChild(tag);
        article.appendChild(presentation);
        article.appendChild(btnForm)
        article.appendChild(img);
        photographerSection.appendChild(article);
        

        return presentation;
    }
    return { name, picture, city, country, id, tagline, price, getPhotographerCardDOM };
}





    function mediaFactory(medias) {
        const {video, image} =medias;

        const imgMedia = `assets/images/${image}`;
        const videoMedia = `assets/videos/${video}`;

        function getMediaCardDOM() {

            const mediaArticle = document.createElement('article');
            
            const mediaImg = document.createElement('img');
            const mediaVideo = document.createElement('video');

        }

    }












//         presentation.className = "photographer_presentation";
        
      
//             const templateProfil = ` 
//                   <div class="presentation_photograph">
//                       <h1 class="presentation_photograph_name" id="namePhotographer">${name}</h1>
//                       <p class="presentation_photograph_location">${city}, ${country}</p>
//                       <p class="presentation_photograph_description">${tagline}</p>
//                       <p class="presentation_photograph_price">${price}€/par heure</p>
//                   </div>
//                   <a><img class="presentation_photo" src="${picture}" alt="Portrait de ${name}"></a>`;
//             presentation.innerHTML = templateProfil;
            

// return article; ;
//   }
//   return { getUserCardDOM };
// }

    // <div class="photograph-header"> 
    //     <article class="presentation_photograph">
    //         <h1 class="presentation_name" id="namePhotographer">${name}</h1>
    //         <p class="presentation_location">${city}, ${country}</p>
    //         <p class="presentation_description">${tagline}</p>
    //         <p class="presentation_price">${price}€/par heure</p>
    //     </article>    

    // </div>



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
