function moveToHomePage() {
    document.getElementById("homepage").style.opacity = 1;
    document.getElementById("resume").style.opacity = 0;
    document.getElementById("resume").style.top = "-60%";
    document.getElementById("project").style.opacity = 0;
    document.getElementById("project").style.top = "-60%";
    document.getElementById("contact").style.opacity = 0;
    document.title = "Home | wanDev";
}

function moveToResume() {
    document.getElementById("resume").style.opacity = 1;
    document.getElementById("homepage").style.opacity = 0;
    document.getElementById("resume").style.top = "15%";
    document.getElementById("resume").style.right = "0%";
    document.getElementById("project").style.opacity = 0;
    document.getElementById("project").style.top = "-80%";
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
    document.getElementById("resume").style.top = "-60%";
    document.getElementById("homepage").style.opacity = 0;
    document.title = "Contact | wanDev";

}
var condition = "none";

function hamburgerMenu() {

    if (condition != "active") {
        condition = "active";
        document.getElementById("child1").style.transform = "rotate(45deg) translate(-4px, -4px)";
        document.getElementById("child1").style.transformOrigin = 0;
        document.getElementById("child2").style.transform = "scale(0)";
        document.getElementById("child3").style.transform = "rotate(-45deg) translate(0px, 0px)";
        document.getElementById("child3").style.transformOrigin = 0;
        document.getElementById("list-link").style.right = "0%";

    } else {
        condition = "none";
        document.getElementById("child1").style.transform = "rotate(0deg) translate(0px, 0px)";
        document.getElementById("child1").style.transformOrigin = 0;
        document.getElementById("child2").style.transform = "scale(1)";
        document.getElementById("child3").style.transform = "rotate(0deg) translate(0px, 0px)";
        document.getElementById("child3").style.transformOrigin = 0;
        document.getElementById("list-link").style.right = "-100%";
    }
}
