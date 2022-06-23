// const recupUrl = window.location.search;
// console.log(window.location.search);


function infoFactory(data) {
    // const idPhotographer = recupUrl.get("id");
   
   
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/portrait/${portrait}`;

    function getPhotographerCardDOM() {
       
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
        // photographerSection.appendChild(article);
        

        return presentation, article;
    }
    return { name, picture, city, country, id, tagline, price, getPhotographerCardDOM };
}





    function mediaFactory(medias) {
        // const tableauMedia = [];
        // medias.forEach(media => {
        //     let {video, image} = media;
        //     tableauMedia.push(video, image);
        // });
        // console.log(tableauMedia);
        // const imgMedia = `assets/images/${image}`;
        // const videoMedia = `assets/videos/${video}`;
      

        function getMediaCardDOM() {
            const api = new apiUser('./data/photographers.json');
            const mediaDiv = document.createElement("div");
            

            const img = document.createElement("img");
            const video = document.createElement("video");
            const likes = document.createElement("p");
            const title = document.createElement("p");

            mediaDiv.className = "media_card";
           
            img.className = "media_img";
            video.className = "media_video";
            likes.className = "media_likes";
            title.className = "media_title";

            

            medias.forEach(async (media) => {
                const detailArticle = document.createElement("article");
                detailArticle.className = "media_detail";
                let currentPhotographer = await api.getPhotographerById(media.photographerId)
                let photographerFirstName = currentPhotographer.name.split(" ")[0];
                console.log(photographerFirstName);

                // media.image ou media.video
                if (media.image !== undefined) {
                    console.log("DANS LA PHOTO");
                    //   img.setAttribute("src", "assets/images/" + media.image);
                    img.setAttribute("src", "assets/photographers/medias/"+ photographerFirstName + "/" + media.image);
                    // img.setAttribute('alt', `Aperçu de ${title}`);
                    detailArticle.appendChild(img.cloneNode(true));
                } else {
                    console.log("DANS LA VIDEO");
                    video.setAttribute("src", "assets/photographers/medias/"+ photographerFirstName + "/" + media.video);
                    // video.setAttribute('alt', `Aperçu de ${title}`);
                    video.setAttribute("controls", "controls");
                    detailArticle.appendChild(video.cloneNode(true));
                }

                // media.title
                title.innerHTML = media.title;
                console.log(media.title);
                detailArticle.appendChild(title.cloneNode(true));

                // media.likes
                likes.innerHTML = media.likes;
                console.log(media.likes);
                detailArticle.appendChild(likes.cloneNode(true));
                


                mediaDiv.appendChild(detailArticle);
            });


            // if(image) {

            // }
            // else{
            //     video.setAttribute('src', videoMedia);
            //     video.setAttribute('controls', 'controls');
            //     mediaArticle.appendChild(video);

            // }
            return mediaDiv;
        }
    return {/*video, image, */getMediaCardDOM };
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
