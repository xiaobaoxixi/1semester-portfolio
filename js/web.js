let toFrontpage = document.querySelector('p.frontpage');
let toContent = document.querySelector('p.content');
let toNavigation = document.querySelector('p.navigation');
let device = document.querySelector('.device');
let computerBase = document.querySelector('.computerBase');
function toPadV(){
    device.classList.remove('padH');
    device.classList.remove('computer');
    device.classList.add('padV');
    computerBase.style.display = "none";
}
function toPadH(){
    device.classList.add('padH');
    device.classList.remove('computer');
    device.classList.remove('padV');
    computerBase.style.display = "none";
}
function toComputer(){
    device.classList.remove('padH');
    device.classList.add('computer');
    device.classList.remove('padV');
    computerBase.style.display = "inherit";
}
function toPhone(){
    device.classList.remove('padH');
    device.classList.remove('computer');
    device.classList.remove('padV');
    computerBase.style.display = "none";
}
// default start
displayFrontPage();
// click on frontpage
toFrontpage.addEventListener('click', displayFrontPage);
function displayFrontPage(){
    toFrontpage.style.fontWeight = "bold";
    toContent.style.fontWeight = "inherit";
    toNavigation.style.fontWeight = "inherit";
    device.classList.add('frontpage');
    device.classList.remove('content');
    device.classList.remove('navigation');
    setTimeout(toPhone, 1000);
    setTimeout(toPadV, 2500);
    setTimeout(toComputer, 4000);
}
toContent.addEventListener('click', displayContent);
function displayContent(){
    console.log('clicked on content');
    toContent.style.fontWeight = "bold";
    toFrontpage.style.fontWeight = "inherit";
    toNavigation.style.fontWeight = "inherit";
    device.classList.remove('frontpage');
    device.classList.remove('navigation');
    device.classList.add('content');
    setTimeout(toPhone, 1000);
    setTimeout(toPadV, 2500);
    setTimeout(toPadH, 4000);
    setTimeout(toComputer, 5500);
}
toNavigation.addEventListener('click', displayNavigation);
function displayNavigation(){
    toNavigation.style.fontWeight = "bold";
    toContent.style.fontWeight = "inherit";
    toFrontpage.style.fontWeight = "inherit";
    device.classList.remove('frontpage');
    device.classList.remove('content');
    device.classList.add('navigation');
    setTimeout(toPhone, 1000);
    setTimeout(toPadV, 2500);
    setTimeout(toPadH, 4000);
    setTimeout(toComputer, 5500);
}

