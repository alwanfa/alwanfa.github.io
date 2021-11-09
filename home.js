function moveToHomePage() {
    document.getElementById("homepage").style.opacity = 1;
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").style.top = "-15%";
    document.getElementById("project").style.opacity = 0;
    document.getElementById("project").style.top = "-60%";
    document.getElementById("contact").style.opacity = 0;
}

function moveToResume() {
    document.getElementById("resume").style.opacity = 1;
    document.getElementById("homepage").style.opacity = 0;
    document.getElementById("resume").style.top = "15%";
    document.getElementById("project").style.opacity = 0;
    document.getElementById("project").style.top = "-60%";
    document.getElementById("contact").style.opacity = 0;
    document.title = "Resume | wanDev";
}

function moveToProject() {
    document.getElementById("contact").style.opacity = 0;
    document.getElementById("project").style.opacity = 1;
    document.getElementById("project").style.top = "15%"
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").style.top = "-15%";
    document.getElementById("homepage").style.opacity = 0;
    document.title = "Project | wanDev";
}

function moveToContact() {
    document.getElementById("contact").style.opacity = 1;
    document.getElementById("project").style.opacity = 0;
    document.getElementById("project").style.top = "-60%"
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").style.top = "-15%";
    document.getElementById("homepage").style.opacity = 0;
    document.title = "Contact | wanDev";

}
