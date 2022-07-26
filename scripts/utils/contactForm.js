// affiche la modal
function displayModal(name) {
  const form = document.getElementById("contact_modal"); // récupère le formulaire de la modal
  const nameModal = document.querySelector(".modal_name"); // récupère le nom de la modal
  currentName = document.createElement("p"); // création du p pour afficher le nom du photographe dans la modal
  currentName.className = "modal_p_name"; // ajout de la class modal_p_name
  currentName.innerHTML = name; // ajout du nom du photographe dans le p
  nameModal.appendChild(currentName); // ajout du p dans le nom de la modal
  form.style.display = "block"; // affiche la modal
  window.addEventListener("keydown", (e) => { // ajoute un évènement sur la touche "Echap"
    if (e.key === "Escape") { // si la touche "Echap" est appuyée
      closeModal(); // ferme la modal
    }
  }); 
}


// ferme la modal
function closeModal() {
  const modal = document.getElementById("contact_modal"); // récupère le formulaire de la modal
  const currentName = document.querySelector(".modal_p_name"); // récupère le nom de la modal
  document.querySelector(".modal_name").removeChild(currentName); // supprime le p dans le nom de la modal
  const form = document.querySelector(".form"); // récupère le formulaire de la modal
  form.reset(); // réinitialise le formulaire
  modal.style.display = "none"; // ferme la modal
}

// envoie le formulaire
function submitModal() {
  const form = document.querySelector(".form"); // récupère le formulaire de la modal
  const firstNameModal = document.querySelector(".modal_first_name"); // récupère le first name de la modal
  const lastNameModal = document.querySelector(".modal_last_name"); // récupère le last name de la modal
  const emailModal = document.querySelector(".modal_email"); // récupère le email de la modal
  const messageModal = document.querySelector(".modal_message"); // récupère le message de la modal
  const firstName = firstNameModal.value; // récupère la valeur du first name dans le formulaire
  const lastName = lastNameModal.value; // récupère la valeur du last name dans le formulaire
  const email = emailModal.value; // récupère la valeur de l'email dans le formulaire
  const message = messageModal.value; // récupère la valeur du message dans le formulaire

  // affiche les valeurs du formulaire dans la console
  console.log("firstName", firstName);
  console.log("lastName", lastName);
  console.log("email", email);
  console.log("message", message);
  closeModal(); // ferme la modal
}
