// apparition pour le menue hamburger
function appearsResponsive(){
    document.querySelector(".header-list-section").classList.toggle("appears");
}

// apparition de la modal pour les parametres
function appearsParameter(){
    document.querySelector(".parameter").classList.toggle("appears");
}

// apparition de la modal pour les parametres
function appearsProjectModal(){
    document.querySelector(".modal-project").classList.add("appears");
}
function desappearProjectModal(){
    document.querySelector(".modal-project").classList.remove("appears");
}

// apparition pour les projets
function appears(nom) {
    var docs = document.querySelectorAll(".part-project");
    docs.forEach((doc) => doc.classList.remove("appears"));
    if(nom == "personal"){
        document.querySelector('#personal-project').classList.add("appears");
    }
    else if(nom == "profesional-project"){
        document.querySelector('#profesional-project').classList.add("appears");
    }
    else if(nom = "supervise-project"){
        document.querySelector('#supervise-project').classList.add("appears");   
    }
}
