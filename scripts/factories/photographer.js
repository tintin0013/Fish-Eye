// creation page qui contient  les données des photographes

function photographerFactory(data) {  
  const { name, id, city, country, tagline, price, portrait } = data;
  const picture = `assets/photographers/portrait/${portrait}`;
  const linkTo = `photographer.html?id=${id}`;

  function getUserCardDOM() {
    let article = document.createElement("article");
    const link = document.createElement("a");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const pays = document.createElement("p");
    const tag = document.createElement("p");
    const prix = document.createElement("p");

    link.href = linkTo;
    img.src = picture;
    img.alt = `Aperçu profil de ${name}`;

    article.className = "photographer_card";
    link.className = "photographer_link";
    img.className = "photographer_photo";
    h2.className = "photographer_name";
    pays.className = "photographer_country";
    tag.className = "photographer_tag";
    prix.className = "photographer_price";

    h2.textContent = name;
    pays.innerHTML = country + ", " + city;
    tag.innerHTML = tagline;
    prix.innerHTML = price + "€/par heure";

    link.appendChild(img);
    link.appendChild(h2);
    article.appendChild(link);
    article.appendChild(pays);
    article.appendChild(tag);
    article.appendChild(prix);

    return article;
  }
  return { name, picture, city, country, id, tagline, price, getUserCardDOM };
}
