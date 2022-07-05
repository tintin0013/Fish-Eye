function displayModal( name) {
    console.log("name", name);
    const modal = document.getElementById("contact_modal");
    const nameModal = document.querySelector(".modal_name");
    currentName = document.createElement("p");
    currentName.className = "modal_p_name";
    currentName.innerHTML = name;
    nameModal.appendChild(currentName);
    console.log("displayModal", currentName);
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
     const currentName = document.querySelector(".modal_p_name");
        document.querySelector(".modal_name").removeChild(currentName);
//     const nameModal = document.querySelector(".modal_name");
// modal.setAttribute("modal_name", "");
    modal.style.display = "none";


    
}

