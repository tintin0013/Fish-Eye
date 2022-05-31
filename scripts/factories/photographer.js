function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;
    const picture = `assets/photographers/portrait/${portrait}`;
    const linkTo = `photographer.html?id=${id}`;

    function getUserCardDOM() {
        let article = document.createElement( 'article' );

        let templateArticleIndex = `
        <a href="${linkTo}" class="photographer_link">
            <img src="${picture}" "alt="Portrait de l'artiste ${name}" class="photographer_photo">
            <h2>${name}</h2>
        </a>
        <p class="photographer_villePays">${city}, <span class="country">${country}</span></p>
        <p class="photographer_tag">${tagline}</p>
        <p class="photographer_prix">${price}€/jour</p>
        `
        article.innerHTML = templateArticleIndex;
        return article;
    }
    return { getUserCardDOM }
}






// function photographerFactory(data) {
//     console.log(data);
//     const { name, portrait, city, country, id, tagline, price } = data;
//     const picture = `assets/photographers/portrait/${portrait}`;
//     function getUserCardDOM() {
//         const article = document.createElement( 'article' );

//         const link = document.createElement('a');
//         link.className = "photographer_link";
//         link.setAttribute('href',`./photographer.html?id=${id}`);
//         const img = document.createElement( 'img' );
//         img.setAttribute("src", picture)
//         img.className= "photographer_photo"
//         img.setAttribute('alt', `Aperçu profil de ${name}`)
//         const h2 = document.createElement( 'h2' );
//         h2.textContent = name;
//         link.appendChild(img)
//         link.appendChild(h2)
//         // ici je crée un element paragraphe, dans le quel je vais y inseré les données correspondante grace a innerHTML, je rajoute la virgule en concaténant les resultat.
//         const pays = document.createElement('p')
//         // je rajoute une class au paragraphe pour pouvoir mieux le reconnaitre.
//         pays.className = 'photographer_villePays'

//         pays.innerHTML = country+", "+city;
   
//         const tag = document.createElement('p');
//         tag.className = "photographer_tag"
//         tag.innerHTML = tagline;
//         const prix = document.createElement('p')
//         prix.className = "photographer_prix"
//         prix.innerHTML = price+'€/par heure'
        
//         article.appendChild(link)
//         article.appendChild(pays)
//         article.appendChild(tag)
//         article.appendChild(prix)
//         return (article);
//     }
//     return { name, picture, city, country, id, tagline, price, getUserCardDOM }
// }