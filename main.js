function CopyText() {
    navigator.clipboard.writeText("alex.hregdovic@outlook.com");
}

document.getElementById("open-button").addEventListener("click", OpenMenu);

function OpenMenu() {
    document.getElementById("open-button").style.display = "none";
    document.getElementById("close-button").style.display = "block";

    document.getElementById("nav-buttons").classList.toggle('open');
    document.getElementById("nav-container-mobile").classList.toggle('open');
    console.log("Menu Opened");
}

document.getElementById("close-button").addEventListener("click", CloseMenu);

function CloseMenu() {
    document.getElementById("close-button").style.display = "none";
    document.getElementById("open-button").style.display = "block";

    document.getElementById("nav-buttons").classList.toggle('open');
    document.getElementById("nav-container-mobile").classList.toggle('open');
    console.log("Menu Closed");
}

document.getElementById("portrait").addEventListener("click", BlowUp);



function BlowUp() {
    document.getElementById("portrait").classList.toggle('blow-up');
    console.log('Portrait Blown Up');
}

