//apparition des section
function appearsSection(name){
    console.log(name);
    var section = document.querySelectorAll(".section-main");
    section.forEach((section) => section.classList.remove("appears"));
    if(name === "home"){
        document.querySelector('#home').classList.add("appears");    
    }
    if(name === "about"){
        document.querySelector('#about').classList.add("appears");
    }
    if(name === "project"){
        document.querySelector("#project").classList.add("appears");
    }
    if(name === "timeline"){
        document.querySelector("#timeline").classList.add("appears");
    }
    if(name === "message"){
        document.querySelector("#message").classList.add("appears");
    }
    if(name === "user"){
        document.querySelector("#user").classList.add("appears");
    }
    if(name === "preview"){
        document.querySelector("#preview").classList.add("appears");
    }
}
 
// apparition des projets
function appearsProject(name){  
    var project= document.querySelectorAll(".container-project");
    project.forEach((project) => project.classList.remove("appears"));
    if(name === "personal"){
        document.querySelector("#personal-project").classList.add("appears");
    }
    else if(name === "professional"){
        document.querySelector("#professional-project").classList.add("appears");
    }
    else if(name === "supervise"){
        document.querySelector("#supervise-project").classList.add("appears");
    }
}

// apparition des propos
function appearsAbout(name){
    var about= document.querySelectorAll(".section-content");
    about.forEach((about) => about.classList.remove("appears"));
    if(name === "modification"){
        document.querySelector("#about-modification").classList.add("appears");
    }
    else if(name=== "preview"){
        document.querySelector("#about-preview").classList.add("appears");
    }
}

// apparitions des sous-projet personelle
function appearsPersonalProject(name){
    var projectPersonal = document.querySelectorAll(".personal");
    projectPersonal.forEach((projectPersonal)=> projectPersonal.classList.remove("appears"));
    if(name === "add-personal-project"){
        document.querySelector('#personnal-project-add').classList.add("appears");
    }
    else if(name=== "list-personal-project"){
        document.querySelector('#personnal-project-list').classList.add("appears");
    }
}

// apparitions des sous projets professionelle
function appearsProfesionalProject(name){
    var projectProfesional = document.querySelectorAll(".professional");
    projectProfesional.forEach((projectProfesional)=> projectProfesional.classList.remove("appears"));
    if(name==="add-professional-project"){
        document.querySelector('#add-professional-project').classList.add("appears");
    }
    else if(name==="list-professional-project"){
        document.querySelector('#list-professional-project').classList.add("appears");
    }
}

// apparitions des sous projets supervisés
function appearsSuperviseProject(name){
    var projectSupervise = document.querySelectorAll(".supervise");
    projectSupervise.forEach((projectSupervise)=> projectSupervise.classList.remove("appears"));
    if(name==="add-supervise-project"){
        document.querySelector('#add-supervise-project').classList.add("appears");
    }
    else if(name==="list-supervise-project"){
        document.querySelector('#list-supervise-project').classList.add("appears");
    }
}

// apparition des sous parties-technologies
function appearsNavTechnologie(name){
    console.log(name);
    var navTech= document.querySelectorAll(".section-content-part");
    navTech.forEach((navTech) => navTech.classList.remove("appears"));
    if(name === "add"){
        document.querySelector("#project-content-add").classList.add("appears");
    }
    else if(name === "list"){
        document.querySelector("#project-content-list").classList.add("appears");
    }
}