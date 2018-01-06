let moreIcon = document.querySelectorAll('img.more');
let showInfoSHButton = document.querySelector('img.infoSHIcon');
let infoSH = document.querySelector('div.infoSH');
let wdil = document.querySelector('.wdil');
let aboutLogoDesignWrapper = document.querySelector('.aboutLogoDesignWrapper');
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
