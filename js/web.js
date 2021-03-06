let redesign = document.querySelector('.redesign');
let redesignMore = document.querySelector('#redesignMore');
let redesignLess = document.querySelector('#redesignLess');
let redesignDesc = document.querySelector('.redesignDesc');
let opArt = document.querySelector('.opArt');
let toggleToRedesign = document.querySelector('.sideSwitch1');
let toggleToOpArt = document.querySelector('.sideSwitch2');
let toAnimation = document.querySelector('#toAnimation');
let toFrontpage = document.querySelector('p.frontpage');
let toContent = document.querySelector('p.content');
let toNavigation = document.querySelector('p.navigation');
let device = document.querySelector('.device');
let computerBase = document.querySelector('.computerBase');
// switch screen sizes
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
// switch screen sizes -END
// toggle between 2 main parts
 toggleToRedesign.addEventListener('click', toRedesign);
function toRedesign(){
    redesign.classList.remove('hide');
//    redesign.classList.add('show');
    opArt.classList.add('hide');
    toggleToOpArt.classList.remove('hide');
    toAnimation.classList.remove('hide')
}
toggleToOpArt.addEventListener('click', toOpArt);
function toOpArt(){
//    redesign.classList.remove('show');
    opArt.classList.remove('hide');
    toggleToOpArt.classList.add('hide');
    toAnimation.classList.add('hide');
    redesign.classList.add('hide');
}



///////// start: auto play start with frontpage
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
    setTimeout(toPhone, 1);
    setTimeout(toPadV, 1500);
    setTimeout(toComputer, 3000);
    setTimeout(displayContent, 4500);
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
    setTimeout(toPhone, 1);
    setTimeout(toPadV, 1500);
    setTimeout(toPadH, 3000);
    setTimeout(toComputer, 4500);
    setTimeout(displayNavigation, 6000);
}
toNavigation.addEventListener('click', displayNavigation);
function displayNavigation(){
    toNavigation.style.fontWeight = "bold";
    toContent.style.fontWeight = "inherit";
    toFrontpage.style.fontWeight = "inherit";
    device.classList.remove('frontpage');
    device.classList.remove('content');
    device.classList.add('navigation');
    setTimeout(toPhone, 1);
    setTimeout(toPadV, 1500);
    setTimeout(toPadH, 3000);
    setTimeout(toComputer, 4500);
    setTimeout(displayFrontPage, 6000);
}
// toggle redesign desc
redesignMore.addEventListener('click', toggleRedesignDesc);
redesignLess.addEventListener('click', toggleRedesignDesc);
function toggleRedesignDesc(){
    redesignDesc.classList.toggle('hide');
    redesignMore.classList.toggle('hide');
    redesignLess.classList.toggle('hide');
}
