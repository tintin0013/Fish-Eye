// affiche les photographes
function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data; // récupération des données des photographes
  const picture = `assets/photographers/portrait/${portrait}`; // récupération des images des photographes
  const linkTo = `photographer.html?id=${id}`; // récupération du lien pour aller sur la page du photographe

  function getUserCardDOM() {
    // création de la carte des informations des photographes
    let article = document.createElement("article"); // création de l'article
    const link = document.createElement("a"); // création du lien
    const img = document.createElement("img"); // création de l'image
    const h2 = document.createElement("h2"); // création du titre
    const pays = document.createElement("p"); // création du p pour afficher le pays et la ville
    const tag = document.createElement("p"); // création du p pour afficher le tagline
    const prix = document.createElement("p"); // création du p pour afficher le prix du photographe

    link.href = linkTo; // ajout du lien
    img.src = picture; // ajout de l'image
    img.alt = `Aperçu profil de ${name}`; // ajout de l'alt de l'image

    // ajout des class
    article.className = "photographer_card";
    link.className = "photographer_link";
    img.className = "photographer_photo";
    h2.className = "photographer_name";
    pays.className = "photographer_country";
    tag.className = "photographer_tag";
    prix.className = "photographer_price";

    h2.textContent = name; // ajout du texte du titre
    pays.innerHTML = country + ", " + city; // ajout du texte du pays et de la ville
    tag.innerHTML = tagline; // ajout du texte du tagline
    prix.innerHTML = price + "€/par jour"; // ajout du texte du prix du photographe

    link.appendChild(img); // ajout de l'image dans le lien
    link.appendChild(h2); // ajout du titre dans le lien
    article.appendChild(link); // ajout du lien dans l'article
    article.appendChild(pays); // ajout du texte du pays et de la ville dans l'article
    article.appendChild(tag); // ajout du texte du tagline dans l'article
    article.appendChild(prix); // ajout du texte du prix dans l'article

    return article; // retourne l'article
  }
  return { name, picture, city, country, id, tagline, price, getUserCardDOM }; // retourne les données des photographes
}
