let videoStoryboard = document.querySelector('img.storyboard');
let defaultImgNr = 0;
let progressLine = document.querySelector('.progressLine');
let videos = document.querySelectorAll('video');
let pause = false;
// switch between storyboard imgs
videoStoryboard.addEventListener('click', changeImg);
function changeImg(){
    if(defaultImgNr !==7){
        defaultImgNr++;
//        videoStoryboard.style.backgroundImage = "url('img/video/storyboard"+defaultImgNr+".png')";
    } else {
        defaultImgNr = 1;
    }
    videoStoryboard.style.backgroundImage = "url('img/video/storyboard"+defaultImgNr+".png')";
}
// play/pause videos
videos.forEach(togglePause);
function togglePause(v){
    v.addEventListener('click', pauseVideo);
    function pauseVideo(){
        if(pause == false){
            v.play();
            pause = true;
            progressLine.style.webkitAnimationPlayState = "running";
        } else {
            v.pause();
            pause = false;
            progressLine.style.anim
            progressLine.style.webkitAnimationPlayState = "paused";
        }
    }
}


