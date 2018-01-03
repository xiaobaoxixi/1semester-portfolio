let toggleStageSpan = document.querySelectorAll('.toggleStage span');
let stages = document.querySelectorAll('.stage');
let worksheet = document.querySelector('img.worksheet');
let worksheetNr = 1;
let president = document.querySelector('img.president');
let drStrangelove = document.querySelector('img.drStrangelove');
let pilot = document.querySelector('img.pilot');
let plane = document.querySelector('img.plane');
// toggle stage for mr.ball
toggleStageSpan.forEach(clickSpan);
function clickSpan(s){
    s.addEventListener('click', toggleStage);
    function toggleStage(){
        toggleStageSpan.forEach(clearSelect);
        function clearSelect(o){
            o.classList.remove('selected');
        }
        s.classList.toggle('selected');
        stages.forEach(hideAllStages);
        function hideAllStages(s){
            s.classList.add('hide');
        }
        let spanClassNr = s.className.replace(/[^0-9\.]/g, '');
        stages[spanClassNr-1].classList.remove('hide');
    }
}
// switch worksheets
worksheet.addEventListener('click', switchWorksheet);
function switchWorksheet(){
    if(worksheetNr < 6){
        worksheetNr++;
    } else {
        worksheetNr = 1;
    }
    worksheet.src = "img/animation/worksheet" + worksheetNr + ".png";
}
// open games
president.addEventListener('click', openPresident);
function openPresident(){
    window.open('http://onestepfurther.science/kea/02-animation/strangelove/conversation.html', '_blank');
}
plane.addEventListener('click', openPlane);
function openPlane(){
    window.open('http://onestepfurther.science/kea/02-animation/strangelove/planes.html', '_blank');
}
pilot.addEventListener('click', openPilot);
function openPilot(){
    window.open('http://onestepfurther.science/kea/02-animation/strangelove/pilot1.html', '_blank');
}
drStrangelove.addEventListener('click', openDrStrangelove);
function openDrStrangelove(){
    window.open('http://onestepfurther.science/kea/02-animation/strangelove/intro.html', '_blank');
}
