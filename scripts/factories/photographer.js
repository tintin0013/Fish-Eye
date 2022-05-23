function photographerFactory(data) {
    console.log(data);
    const { name, portrait, city, country, id, tagline, price } = data;
    const picture = `assets/photographers/portrait/${portrait}`;
    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const link = document.createElement('a');
        link.setAttribute('class','photographer_link');

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.className= "photographer_photo"
        img.setAttribute('alt', `Aperçu profil de ${name}`)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        link.appendChild(img)
        link.appendChild(h2)
        // ici je crée un element paragraphe, dans le quel je vais y inseré les données correspondante grace a innerHTML, je rajoute la virgule en concaténant les resultat.
        const pays = document.createElement('p')
        // je rajoute une class au paragraphe pour pouvoir mieux le reconnaitre.
        pays.className = 'photographer_villePays'

        pays.innerHTML = country+", "+city;
   
        const tag = document.createElement('p');
        tag.className = "photographer_tag"
        tag.innerHTML = tagline;
        const prix = document.createElement('p')
        prix.className = "photographer_prix"
        prix.innerHTML = price+'€/par heure'
        
        article.appendChild(link)
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(pays)
        article.appendChild(tag)
        article.appendChild(prix)
        return (article);
    }
    return { name, picture, city, country, id, tagline, price, getUserCardDOM }
}