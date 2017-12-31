let videoStoryboard = document.querySelector('img.storyboard');
let defaultImgNr = 1;

videoStoryboard.addEventListener('click', changeImg);
function changeImg(){
    if(defaultImgNr !== 7){
        defaultImgNr++;
        videoStoryboard.style.backgroundImage = "url('img/video/storyboard"+defaultImgNr+".png')";
    } else {
        defaultImgNr = 1;
        videoStoryboard.style.backgroundImage = "url('img/video/storyboard"+defaultImgNr+".png')";
    }
};
