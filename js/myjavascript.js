function ShowPicture(id, show, img) {
    if (show == "1") {
        document.getElementById(id).style.visibility = "visible"
        document.getElementById(id).childNodes[1].src = img;
    } else if (show == "0") {
        document.getElementById(id).style.visibility = "hidden"
    }
}

// Mobile nav close button open
function openNav() {
    document.getElementById("navbarSupportedContent").style.height = "100%";
}
// Mobile nav close button close
function closeNav() {
    document.getElementById("navbarSupportedContent").style.height = "0%";
}

