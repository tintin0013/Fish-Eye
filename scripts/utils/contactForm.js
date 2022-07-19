
// affiche la modal 
function displayModal( name) {  
    const form = document.getElementById("contact_modal");
    const nameModal = document.querySelector(".modal_name");
    currentName = document.createElement("p");
    currentName.className = "modal_p_name";
    currentName.innerHTML = name;
    nameModal.appendChild(currentName);
	form.style.display = "block";
}

// ferme la modal
function closeModal() {  
    const modal = document.getElementById("contact_modal");
     const currentName = document.querySelector(".modal_p_name");
        document.querySelector(".modal_name").removeChild(currentName);
        const form = document.querySelector(".form");
        form.reset()
    modal.style.display = "none";
}

// envoie le formulaire
function submitModal() {  
    const form = document.querySelector(".form");
    const firstNameModal = document.querySelector(".modal_first_name");
    const lastNameModal = document.querySelector(".modal_last_name");
    const emailModal = document.querySelector(".modal_email");
    const messageModal = document.querySelector(".modal_message");
    const firstName = firstNameModal.value;
    const lastName = lastNameModal.value;
    const email = emailModal.value;
    const message = messageModal.value;
    console.log("firstName", firstName);
    console.log("lastName", lastName);
    console.log("email", email);
    console.log("message", message);
    closeModal();
}


 