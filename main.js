// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';




// const cursor = document.getElementById("follow-cursor");

// // For circle following cursor
// window.addEventListener("mousemove", function(e){
//     cursor.style.left = e.clientX+20 + "px";
//     cursor.style.top = e.clientY+20 + "px";
//     cursor.style.zIndex = -10;
// })

function CopyText() {
    navigator.clipboard.writeText("alex.hregdovic@outlook.com");
}

document.getElementById("open-button").addEventListener("click", OpenMenu);

function OpenMenu() {
    document.getElementById("nav-buttons").classList.toggle('open');
    document.getElementById("nav-container-mobile").classList.toggle('open');
    console.log("Menu Opened");
}

document.getElementById("close-button").addEventListener("click", CloseMenu);

function CloseMenu() {
    document.getElementById("nav-buttons").classList.toggle('open');
    document.getElementById("nav-container-mobile").classList.toggle('open');
    console.log("Menu Closed");
}

document.getElementById("portrait").addEventListener("click", BlowUp);



function BlowUp() {
    document.getElementById("portrait").classList.toggle('blow-up');
    console.log('Portrait Blown Up');
}

