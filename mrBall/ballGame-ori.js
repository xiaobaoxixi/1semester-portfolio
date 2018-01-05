// FOR SIMPLE ANIMATIONS, use "overwrite className" approach to switch between them, no add/remove class or toggle, no need to refresh page. Other approaches see below.
let simpleAnimation = document.querySelector('.buttonAreaSimple');
simpleAnimation.addEventListener('click', function (clickedElem) {
    let clicked = clickedElem.target.id;
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
// *********** some reusable functions *********** //
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
    if (clicked !== "fallDown"){
        ball.className = clicked;
        ballGotShot.className = "";
        if (clicked == "move") {
            sillyBall.play();
            sillyBall.volume = .4;
        } else if (clicked == "moveTo30") {
            chuAudio.play();
        } else if (clicked == "moveFrom30") {
            windAudio.play();
            wind.className = ("wind wind" + clicked);
        } else if (clicked == "oneJump") {
            shadow.className = ("shadow shadow" + clicked);
            setTimeout(ballBounceSound, 870);
        } else if (clicked == "jump") {
            shadow.className = ("shadow shadow" + clicked);
            setTimeout(ballBounceSound, 470);
            ballAudio.playbackRate = 1.37;
            ballAudio.loop = true;
        } else if (clicked == "fade") {
            stopOtherAudio();
            setTimeout(nightBackground, 2000);
            background.className = ("scene bg" + clicked);
            setTimeout(fadeHorizon, 2000);
        } else if (clicked == "glow"){
            stopOtherAudio();
            ball.className = ("");
            horizon.className = "horizon horizonGlow";
            night2Audio.play();
            background.className = ("scene bg" + clicked);
            eyes1Position.className = (clicked);
            eyes2Position.className = (clicked);
            eyes2Position.addEventListener('animationend', eyesMoveClose); // bad code, will trigger function below every time eyes2 finishs animation
            function eyesMoveClose(){
                eyes1Position.className = ("eyes1MoveClose");
                eyes2Position.className = ("eyes2MoveClose");
                ball.className = (clicked);
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
        } else if (clicked == "mirror") {
            chuAudio.play();
            chuAudio.playbackRate = 1.05;
            fakeBallPositionH.style = "left: 23vw";
        } else if (clicked == "shake") {
            shakeAudio.play();
            shakeAudio.volume = .3;
            shakeAudio.playbackRate = 3.7;
        }
    } else if (clicked == "fallDown"){ //single this cuz more events, need to have a good ball on stage, then fire gun, then wait, then switch to a broken ball and start original animation
        ball.className = "onStage";
        document.querySelector('#shot').play();
        document.querySelector('#shot').volume = .2;
        document.querySelector('#shot').addEventListener('ended', startAnimation);
        function startAnimation() {
            ball.className = "";
            ballGotShot.className = "ballGotShot"+clicked;
            setTimeout(ballFall, 110);
        }
    }
})

