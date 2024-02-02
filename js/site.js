const GamesIvePlayed = document.getElementById("GamesIvePlayed");
let imgsToUse = [
    "./images/StrangeHorticulture.webp",
    "./images/EpicMickey2.PNG",
    "./images/Fortnite.png",
    "./images/hearthstone.jpg",
    "./images/PotionCraft.webp",
    "./images/Sims4.png",
    "./images/minecraft.jpg"
];
let currentImageIndex = 0;
function updateSlideShowImage(){
    currentImageIndex++

    if(currentImageIndex >= imgsToUse.length){
        currentImageIndex = 0;
    }
    let nextImageURL = imgsToUse[currentImageIndex];
    GamesIvePlayed.src = nextImageURL;
}
setInterval(updateSlideShowImage, 2500);

const aboutmeimages = document.getElementById("aboutmeimages");
let AMimgs = [
    "./images/ep1.jpg",
    "./images/IMG_3888.JPEG",
    "./images/themountains.jpg",
    "./images/epdt.PNG",
    "./images/Whataburger.jpg",
    "./images/Texas.jpg"
];
let AMcurrentimageindex = 0;
function AboutMeSlideShow(){
    AMcurrentimageindex++
    if(AMcurrentimageindex >= AMimgs.length){
        AMcurrentimageindex = 0;
    }
    let nextAMimg = AMimgs[AMcurrentimageindex];
    aboutmeimages.src = nextAMimg;
}
setInterval(AboutMeSlideShow, 3500);


const theFUNbutton = document.getElementById("theFUNbutton");
const theFUNaudio = document.getElementById("theFUNaudio");

 function partyTime(){
    alert("Time to have PARTTYYYY")
theFUNaudio.play();
 }
 theFUNbutton.addEventListener('click',partyTime);