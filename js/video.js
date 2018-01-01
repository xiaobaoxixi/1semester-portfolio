let videoStoryboard = document.querySelector('img.storyboard');
let defaultImgNr = 0;
let videos = document.querySelectorAll('video');
let playPauseButtons = document.querySelectorAll('.playPause');
let progressLine1 = document.querySelector('.progressLine1');
let progressLine2 = document.querySelector('.progressLine2');
let video1 = document.querySelector('.video1');
let video2 = document.querySelector('.video2');
let pause1 = false;
let pause2 = false;


// switch between storyboard imgs
videoStoryboard.addEventListener('click', changeImg);
function changeImg(){
    if(defaultImgNr !==7){
        defaultImgNr++;
    } else {
        defaultImgNr = 1;
    }
    videoStoryboard.style.backgroundImage = "url('img/video/storyboard"+defaultImgNr+".png')";
}
// play/pause videos and progress bar
function playVideo1(){
    video1.play();
    pause1 = true;
    progressLine1.style.webkitAnimationPlayState = "running";
}
function playVideo2(){
    video2.play();
    pause2 = true;
    progressLine2.style.webkitAnimationPlayState = "running";
}
function pauseVideo1(){
    video1.pause();
    pause1 = false;
    progressLine1.style.webkitAnimationPlayState = "paused";
}
function pauseVideo2(){
    video2.pause();
    pause2 = false;
    progressLine2.style.webkitAnimationPlayState = "paused";
}
// clicking on video
videos.forEach(clickToPlayPause);
// clicking on play/pause button
playPauseButtons.forEach(clickToPlayPause);
function clickToPlayPause(v){
    v.addEventListener('click', ppVideo);
    function ppVideo(){
        if(v.className.indexOf('1')>-1 && pause1 == false){
            playVideo1();
        } else if(v.className.indexOf('1')>-1 && pause1 == true){
            pauseVideo1();
        } else if (v.className.indexOf('2')>-1 && pause2 == false){
            playVideo2();
        } else if (v.className.indexOf('2')>-1 && pause2 == true){
            pauseVideo2();
        }
    }
}
// fullscreen
// hide/show assignment desc
// toggle original website for citywalk
