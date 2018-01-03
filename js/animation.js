let toggleStageSpan = document.querySelectorAll('.toggleStage span');
let stages = document.querySelectorAll('.stage');

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
