let videos = document.querySelectorAll('video');
let playPauseButtons = document.querySelectorAll('.playPause');
let playButton1 = document.querySelector('.playButton1');
let playButton2 = document.querySelector('.playButton2');
let pauseButton1 = document.querySelector('.pauseButton1');
let pauseButton2 = document.querySelector('.pauseButton2');
let progressLine1 = document.querySelector('.progressLine1');
let progressLine2 = document.querySelector('.progressLine2');
let video1 = document.querySelector('.video1');
let video2 = document.querySelector('.video2');
let pause1 = false;
let pause2 = false;
let storyboardButtons = document.querySelectorAll('.storyboardButtons');
let storyboardButton = document.querySelector('.storyboardButton');
let moreButton = document.querySelector('.moreButton');
let storyboard = document.querySelector('div.storyboard');
let videoStoryboard = document.querySelector('img.storyboard');
let defaultImgNr = 1;

// switch between storyboard imgs
videoStoryboard.addEventListener('click', changeImg);
function changeImg(){
    if(defaultImgNr !==7){
        defaultImgNr++;
    } else {
        defaultImgNr = 1;
    }
    videoStoryboard.src = "img/video/storyboard"+defaultImgNr+".png";
}
// play/pause videos and progress bar
function playVideo1(){
    video1.play();
    pause1 = true;
    pauseButton1.classList.remove('hide');
    playButton1.classList.add('hide');
    progressLine1.style.webkitAnimationPlayState = "running";
}
function playVideo2(){
    video2.play();
    pause2 = true;
    pauseButton2.classList.remove('hide');
    playButton2.classList.add('hide');
    progressLine2.style.webkitAnimationPlayState = "running";
}
function pauseVideo1(){
    video1.pause();
    pause1 = false;
    pauseButton1.classList.add('hide');
    playButton1.classList.remove('hide');
    progressLine1.style.webkitAnimationPlayState = "paused";
}
function pauseVideo2(){
    video2.pause();
    pause2 = false;
    pauseButton2.classList.add('hide');
    playButton2.classList.remove('hide');
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
// reverse buttons
storyboardButtons.forEach(mouseEnterLeave);
function mouseEnterLeave(b){
    b.addEventListener('mouseenter', reverseButton);
    b.addEventListener('mouseleave', reverseBackButton);
    function reverseButton(){
        if(b.className.indexOf('moveDown')<0){
            b.src = b.src.substr(0, b.src.length-4) + "-reverse.png";
        }
    }
    function reverseBackButton(){
        if(b.className.indexOf('moveDown')<0){
            b.src = b.src.substr(0, b.src.length-12) + ".png";
        }
    }
}
// click any buttons to moveDown
storyboardButtons.forEach(clickButton);
function clickButton(b){
    if(b.className.indexOf('moveDown')<0){
        b.addEventListener('click', moveDown);
        function moveDown(){
            storyboardButtons.forEach(addMoveDown);
            function addMoveDown(m){
                m.classList.add('moveDown');
                storyboard.classList.add('expand');
            }
            if(b.src.indexOf('storyboard')>-1){
                videoStoryboard.classList.remove('hide');
            }
            if(b.src.indexOf('more')>-1){
                // show more info
            }
        }
    }
}
// click buttons that're already down
storyboardButton.addEventListener('click',clickStoryboardButtonAtBottom);
function clickStoryboardButtonAtBottom(){
    if(storyboardButton.className.indexOf('moveDown')>-1 && storyboardButton.src.indexOf('reverse')<0){
        storyboardButton.src = "img/video/storyboard-button-reverse.png";
        moreButton.src = "img/video/more-white.png";
//        videoStoryboard.classList.add('expand');
        storyboard.classList.add('expanded');
        videoStoryboard.classList.remove('hide');
    }
}
moreButton.addEventListener('click',clickMoreButtonAtBottom);
function clickMoreButtonAtBottom(){
    if(moreButton.className.indexOf('moveDown')>-1 && moreButton.src.indexOf('reverse')<0){
        storyboardButton.src = "img/video/storyboard-button.png";
        moreButton.src = "img/video/more-white-reverse.png";
        videoStoryboard.classList.remove('expand');
        videoStoryboard.classList.add('hide');
    }
}

// hide/show assignment desc
// toggle original website for citywalk?
