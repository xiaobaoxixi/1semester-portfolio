let horizon = document.querySelector('.horizon');
let ball = document.querySelector('#ball');
let ballGotShot = document.querySelector('#ballGotShot');
let fakeBallPositionH = document.querySelector('.fakeBallWrapper');
let background = document.querySelector('.scene');
let shadow = document.querySelector('.shadow');
let wind = document.querySelector('.wind');
let eyes1Position = document.querySelector('#eyes1');
let eyes2Position = document.querySelector('#eyes2');
let allAudios = document.querySelectorAll('audio');
let sillyBall = document.querySelector('audio#sillyBall');
let chuAudio = document.querySelector('audio#chu');
let fallAudio = document.querySelector('audio#fall');
let windAudio = document.querySelector('audio#wind');
let shakeAudio = document.querySelector('audio#shake');
let snorringAudio = document.querySelector('audio#snorring');
let nightAudio = document.querySelector('audio#night');
let night2Audio = document.querySelector('audio#night2');
let ballAudio = document.querySelector('audio#bounce');
let volumeOn = document.querySelector('#volumeOn');
let volumeOff = document.querySelector('#volumeOff');
function resetFakeBall() {
    fakeBallPositionH.style = "left: -7vw";
}
function showVolumeIcon() { //call this only when selected animation has sound
    volumeOn.style.display = "block";
    volumeOn.addEventListener('click', toggleVolumeOff);
    function toggleVolumeOff() {
        volumeOn.style.display = "none";
        volumeOff.style.display = "block";
        allAudios.forEach(function (playing) {
            playing.muted = true;
        })
    }
    volumeOff.addEventListener('click', toggleVolumeOn);
    function toggleVolumeOn() {
        volumeOn.style.display = "block";
        volumeOff.style.display = "none";
        allAudios.forEach(function (playing) {
            playing.muted = false;
        })
    }
}
function stopOtherAudio() {
    allAudios.forEach(function (playing) {
        playing.pause(); // so won't disturb the new audio
        playing.currentTime = 0; //so when click back this button, audio won't just resume
        playing.loop = false; //reset loop
    })
};
function ballBounceSound() {
    ballAudio.play();
    ballAudio.volume = .3;
};
function ballFall() {
    fallAudio.play();
    fallAudio.volume = .7;
    fallAudio.playbackRate = 1.07;
}
function nightBackground(){
    nightAudio.play();
    nightAudio.volume = .3;
}
function fadeHorizon() {
    horizon.className = ("horizon horizonGlow");
}
function startSnorring() {
    snorringAudio.play();
    snorringAudio.loop = true;
}
function resetScene(){
    resetFakeBall();
    horizon.className = ("horizon");
    background.className = ("scene");
    shadow.className = ("shadow");
    wind.className = ("wind");
    eyes1Position.className = ("");
    eyes2Position.className = ("");
    stopOtherAudio();
    showVolumeIcon();
}
// ******* start any animation with reset scene ******* //
resetScene();
showVolumeIcon();
move();
setTimeout(moveTo30, 12000);
setTimeout(oneJump, 13000);
setTimeout(shake, 15000);
setTimeout(fallDown, 16000);
setTimeout(moveFrom30, 20000);
setTimeout(fade, 26000);
setTimeout(glow, 36000);
setTimeout(resetScene, 60000);
setTimeout(jump, 60000);
function move(){
    ball.className = "move";
    sillyBall.play();
    sillyBall.volume = .4;
}
function moveTo30(){
    chuAudio.play();
    ball.className = "moveTo30";
}
function oneJump(){
    ball.className = "oneJump";
    shadow.className = ("shadow shadowoneJump");
    setTimeout(ballBounceSound, 870);
}
function shake(){
    ball.className = "shake";
    shakeAudio.play();
    shakeAudio.volume = .3;
    shakeAudio.playbackRate = 3.7;
    shadow.style.display = "none"; // remove shadow from previous jump animation
}
function fallDown(){
        ball.className = "onStage";
        document.querySelector('#shot').play();
        document.querySelector('#shot').volume = .2;
        document.querySelector('#shot').addEventListener('ended', startAnimation);
        function startAnimation() {
            ball.className = "";
            ballGotShot.className = "ballGotShotfallDown";
            setTimeout(ballFall, 110);
        }
}
function moveFrom30(){
    ball.className = "moveFrom30";
    windAudio.play();
    wind.className = ("wind windmoveFrom30");
    ballGotShot.style.display = "none";
}
function fade(){
    ball.className = "fade";
    stopOtherAudio();
    setTimeout(nightBackground, 2000);
    background.className = ("scene bgfade");
    setTimeout(fadeHorizon, 2000);
}
function glow(){
    stopOtherAudio();
    ball.className = ("");
    horizon.className = "horizon horizonGlow";
    night2Audio.play();
    background.className = ("scene bgglow");
    eyes1Position.className = ("glow");
    eyes2Position.className = ("glow");
    eyes2Position.addEventListener('animationend', eyesMoveClose); // bad code, will trigger function below every time eyes2 finishs animation
    function eyesMoveClose(){
        eyes1Position.className = ("eyes1MoveClose");
        eyes2Position.className = ("eyes2MoveClose");
        ball.className = ("glow");
        ball.addEventListener('animationend', snorringShort);
    }
    function snorringShort(){
        if (ball.className == "glow"){
            startSnorring();
            ball.className = ("snorringShort");
            ball.addEventListener('animationend', snorringLoudFast);
            function snorringLoudFast() {
                if (ball.className == "snorringShort") {
                    ball.className = "snorringFast";
                    snorringAudio.pause();
                    snorringAudio.loop = false;
                    document.querySelector('#snorringShort').play();
                    document.querySelector('#snorringShort').addEventListener('ended', backToNormalSnorring);
                    function backToNormalSnorring(){
                        eyes1Position.className = "eyes1BackOff";
                        startSnorring();
                        ball.className = ("snorring");
                    }
                } else {
                    return;
                }
            }
        } else {
            return;
        }
    }
}
function jump(){
    ball.className = "jump";
    shadow.style.display = "inherit";
    shadow.className = ("shadow shadowjump");
    setTimeout(ballBounceSound, 470);
    ballAudio.playbackRate = 1.37;
    ballAudio.loop = true;
    snorringAudio.loop = false;
    eyes2Position.style.display = "none"; // remove eyes from previous animation
    setTimeout(muteBounce, 5000);
    function muteBounce(){
        let lowerVolumeF = setInterval(lowerVolume, 200);
        let volume = .3;
        function lowerVolume(){
            volume *= .91; // use * for gradual change without sudden stop of music
            ballAudio.volume = volume;
            if (volume <.05 ){
                ballAudio.pause();
                ballAudio.loop = false;
                clearInterval(lowerVolumeF);
            }
        }
    }
}
