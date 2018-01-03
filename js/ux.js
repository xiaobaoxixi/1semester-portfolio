let moreIcon = document.querySelectorAll('img.more');
let showInfoSHButton = document.querySelector('img.infoSHIcon');
let infoSH = document.querySelector('div.infoSH');
let wdil = document.querySelector('.wdil');
let slideFat = document.querySelector('.slideFat');
let aboutLogoDesignWrapper = document.querySelector('.aboutLogoDesignWrapper');
let aPdf = document.querySelector('a.iframe');
let iframe = document.querySelector('iframe');
// toggle info
showInfoSHButton.addEventListener('click', toggleInfoSH);
function toggleInfoSH(){
    infoSH.classList.toggle('show');
}
// click on more icon
moreIcon.forEach(clickMoreIcon);
function clickMoreIcon(m){
    m.addEventListener('click', moreIconClicked);
    function moreIconClicked(){
        if(m.src.indexOf('hide')<0){
            m.src = "img/ux/hide-black.png";
            state = false;
        } else{
            m.src = "img/ux/more-black.png";
            state = true;
        }
        let allP = m.parentElement.children;
        for(i=0; i < allP.length; i++){
            allP[i].classList.toggle('expand');
        }
    }
}
// toggle what did i learn (wdil)
wdil.addEventListener('click', toggleWDIL);
slideFat.addEventListener('click', toggleWDIL);
function toggleWDIL(){
    aboutLogoDesignWrapper.classList.toggle('slideOut');
    if(slideFat.src.indexOf('Out')>-1){
        slideFat.src = "img/ux/slideIn-fat.png";
    } else {
        slideFat.src = "img/ux/slideOut-fat.png";
    }
}
// open iframe
aPdf.addEventListener('click', openIframe);
function openIframe(){
    iframe.style.height = "600px";
}
