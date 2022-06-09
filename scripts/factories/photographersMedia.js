const recupUrl = window.location.search;
console.log(window.location.search);


function photographerHeader(data) {
    // const idPhotographer = recupUrl.get("id");
   
   
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/portrait/${portrait}`;

    function getUserCardDOM() {
        let presentation = document.createElement('div');
        let article = document.createElement('article');
        const h1 = document.createElement('h1');
        const pays = document.createElement('p');
        const tag = document.createElement('p');
        const blocPrix = document.createElement('div');
        const prix = document.createElement('p')
        const img = document.createElement('img');

        img.setAttribute('src', picture);
        img.setAttribute('alt', `Aperçu profil de ${name}`);

        presentation.className = "presentation_photograph";
        article.className = "presentation_card";
        h1.className = "presentation_name";
        pays.className = "presentation_location";
        tag.className = "presentation_description";
        blocPrix.className = "presentation_blocPrix";
        prix.className = "presentation_price";
        img.className = "presentation_photo";

        h1.textContent = name;
        pays.innerHTML = country + ", " + city;
        tag.innerHTML = tagline;
        prix.innerHTML = price + '€/par heure';

        presentation.appendChild(article);
        article.appendChild(h1);
        article.appendChild(pays);
        article.appendChild(tag);
        presentation.appendChild(img);
        presentation.appendChild(blocPrix);
        blocPrix.appendChild(prix);

        return presentation;
    }
    return { name, picture, city, country, id, tagline, price, getUserCardDOM };
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
