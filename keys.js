function choiceEvent(code) {
    switch (code) {
        case 'Tab':
            writeChar('\t');
            break;
        case 'CapsLock':
            capsLookChange();
            break;
        case 'ShiftLeft':
            shiftChange();
            break;
        case 'ShiftRight':
            shiftChange();
            break;
        case 'AltRight':
            alt();
            break;
        case 'AltLeft':
            alt();
            break;
        case 'Enter':
            writeChar('\n');
            break;
        case 'Backspace':
            deleteChar(-1);
            break;
        case 'Delete':
            deleteChar(0);
            break;
        case 'ControlLeft':
            controlChange();
            break;
        case 'ControlRight':
            controlChange();
            break;
        case 'ArrowLeft':
            move('left');
            break;
        case 'ArrowUp':
            move('up');
            break;
        case 'ArrowRight':
            move('right');
            break;
        case 'ArrowDown':
            move('down');
            break;
        case 'Space':
            writeChar(' ');
            break;
        default:
            write(code);
    }

}

function capsLookChange() {
    caps = !caps;
    refreshKeyBoard(lang, shift);
    if(caps){
        document.querySelector('.capsLock').classList.add('press');
    }
    else{
        document.querySelector('.capsLock').classList.remove('press');
    }
}

function shiftChange() {
    shift = !shift;
    refreshKeyBoard();
    if(shift){
        document.getElementById('ShiftLeft').classList.add('press');
        document.getElementById('ShiftRight').classList.add('press');
    }
    else{
        document.getElementById('ShiftLeft').classList.remove('press');
        document.getElementById('ShiftRight').classList.remove('press');
    }
}

function writeChar(char) {
    let start = textarea.selectionStart;
    let text = textarea.value.split('');
    text.splice( start, 0, char );
    let value = '';
    for(let i = 0; i<text.length; i++){
        value += text[i];
    }
    textarea.value = value;
    textarea.selectionStart = start + 1;
    textarea.selectionEnd = textarea.selectionStart;
}

function alt() {
    if(shift) {
        lang = lang == 'ru' ? 'en' : 'ru';
        refreshKeyBoard();
    }
}

function  deleteChar(count) {
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    let text = textarea.value.split('');
    if(start == end) {
        text.splice(start == 0? 0: start + count, 1, '');
    }
    else{
        text.splice(start == 0? 0: start + count, end - start, '');
    }
    let value = '';
    for(let i = 0; i<text.length; i++){
        value += text[i];
    }
    textarea.value = value;
    textarea.selectionStart = start == end? start + count: start ;
    textarea.selectionEnd = textarea.selectionStart;
}

function controlChange(){
    ctrl = !ctrl;
    if(ctrl){
        document.getElementById('ControlLeft').classList.add('press');
        document.getElementById('ControlRight').classList.add('press');
    }
    else{
        document.getElementById('ControlLeft').classList.remove('press');
        document.getElementById('ControlRight').classList.remove('press');
    }
}

function move(side) {
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    if(end == start){
        if(side == 'left' || side == 'up'){
            startSelection = 'start';
        }
        else{
            startSelection = 'end';
        }
    }

    switch (side) {
        case 'left':
            if(ctrl){
                startSelection == 'end'? end = start : start -= 10 ;
            }
            else{
                startSelection == 'end'? end -- : start -- ;
            }
            break;
        case 'right':
            if(ctrl){
                startSelection == 'start'? start = end : end += 10 ;
            }
            else{
                startSelection == 'start'? start ++ : end ++ ;
            }
            break;
        case 'up':
            startSelection == 'end' ? end = start : start -= 80;
            break;
        case 'down':
            startSelection == 'start' ? start = end : end += 80;
            break;
    }
    if(start < 0){
        start = 0;
    }
    else if(end > textarea.value.length ){
        end = textarea.value.length ;
    }
    if(!shift){
        startSelection = '';
        if(side == 'left' || side == 'up'){
            end = start;
        }
        else{
            start = end;
        }
    }
    console.log('start = ' + start);
    console.log('end = ' + end);
    textarea.selectionStart = start;
    textarea.selectionEnd = end;
}