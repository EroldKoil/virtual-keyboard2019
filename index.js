
const body = document.querySelector('body')
const textarea = document.createElement("textarea");
textarea.autofocus;
textarea.className = 'textArea';
textarea.name = 'textArea';
const keyboard = document.createElement("div");
keyboard.className = 'keyboard';

body.appendChild(textarea);
body.appendChild(keyboard);

let lang = 'ru';
let shift = false;
let ctrl = false;
let caps = false;
let startSelection = '';

function Key(code, isWrite, ru, ruShift, en, enShift ,className) {
    this.code = code;
    this.isWrite = isWrite;
    this.ru = ru;
    this.ruShift = ruShift;
    this.en = en;
    this.enShift = enShift;
    this.className = className;
}


let keysArray = [
    new Key('Backquote' , true, 'ё', 'Ё', '`', '~'),
    new Key('Digit1' , true, '1', '!', '1', '!'),
    new Key('Digit2' , true, '2', '"', '2', '@'),
    new Key('Digit3' , true, '3', '№', '3', '#'),
    new Key('Digit4' , true, '4', ';', '4', '$'),
    new Key('Digit5' , true, '5', '%', '5', '%'),
    new Key('Digit6' , true, '6', ':', '6', '^'),
    new Key('Digit7' , true, '7', '?', '7', '&'),
    new Key('Digit8' , true, '8', '*', '8', '*'),
    new Key('Digit9' , true, '9', '(', '9', '('),
    new Key('Digit0' , true, '0', ')', '0', ')'),
    new Key('Minus' , true, '-', '_', '-', '_'),
    new Key('Equal' , true, '=', '+', '=', '+'),
    new Key('Backspace' , false, 'Backspace', '', '', '' , 'backspace'),

    new Key('Tab' , false, 'Tab', '', '', '', 'tab'),
    new Key('KeyQ' , true, 'й', 'Й', 'q', 'Q'),
    new Key('KeyW' , true, 'ц', 'Ц', 'w', 'W'),
    new Key('KeyE' , true, 'у', 'У', 'e', 'E'),
    new Key('KeyR' , true, 'к', 'К', 'r', 'R'),
    new Key('KeyT' , true, 'е', 'Е', 't', 'T'),
    new Key('KeyY' , true, 'н', 'Н', 'y', 'Y'),
    new Key('KeyU' , true, 'г', 'Г', 'u', 'U'),
    new Key('KeyI' , true, 'ш', 'Ш', 'i', 'I'),
    new Key('KeyO' , true, 'щ', 'Щ', 'o', 'O'),
    new Key('KeyP' , true, 'з', 'З', 'p', 'P'),
    new Key('BracketLeft' , true, 'х', 'Х', '[', '{'),
    new Key('BracketRight' , true, 'ъ', 'Ъ', ']', '}'),
    new Key('Enter' , false, 'Enter', '', '', '', 'enter'),

    new Key('CapsLock' , false, 'Caps Lock', '', '', '', 'capsLock'),
    new Key('KeyA' , true, 'ф', 'Ф', 'a', 'A'),
    new Key('KeyS' , true, 'ы', 'Ы', 's', 'S'),
    new Key('KeyD' , true, 'в', 'В', 'd', 'D'),
    new Key('KeyF' , true, 'а', 'А', 'f', 'F'),
    new Key('KeyG' , true, 'п', 'П', 'g', 'G'),
    new Key('KeyH' , true, 'р', 'Р', 'h', 'H'),
    new Key('KeyJ' , true, 'о', 'О', 'j', 'J'),
    new Key('KeyK' , true, 'л', 'Л', 'k', 'K'),
    new Key('KeyL' , true, 'д', 'Д', 'l', 'L'),
    new Key('Semicolon' , true, 'ж', 'Ж', ';', ':'),
    new Key('Quote' , true, 'э', 'Э', '\'', '"'),
    new Key('Backslash' , true, '\\', '/', '\\', '|'),
    new Key('Delete' , false, 'DEL', '', '', '' , 'delete'),

    new Key('ShiftLeft' , false, 'Shift', '', '', '', 'shift'),
    new Key('KeyZ' , true, 'я', 'Я', 'z', 'Z'),
    new Key('KeyX' , true, 'ч', 'Ч', 'x', 'X'),
    new Key('KeyC' , true, 'с', 'С', 'c', 'C'),
    new Key('KeyV' , true, 'м', 'М', 'v', 'V'),
    new Key('KeyB' , true, 'и', 'И', 'b', 'B'),
    new Key('KeyN' , true, 'т', 'Т', 'n', 'N'),
    new Key('KeyM' , true, 'ь', 'Ь', 'm', 'M'),
    new Key('Comma' , true, 'б', 'Б', ',', '<'),
    new Key('Period' , true, 'ю', 'Ю', '.', '>'),
    new Key('Slash' , true, '.', ',', '/', '?'),
    new Key('ArrowUp' , false, '<img class="image" src="src/arrowUp.png">', '', '', ''),
    new Key('ShiftRight' , false, 'Shift', '', '', '', 'shift'),

    new Key('ControlLeft' , false, 'Ctrl', '', '', '', 'alt'),
    new Key('AltLeft' , false, 'Alt', '', '', '', 'alt'),
    new Key('Space' , true, `ru`, 'RU ', `en`, 'EN ', 'space'),
    new Key('AltRight' , false, 'Alt', '', '', '', 'alt'),
    new Key('ArrowLeft' , false, '<img class="image" src="src/arrowLeft.png">', '', '', ''),
    new Key('ArrowDown' , false, '<img class="image" src="src/arrowDown.png">', '', '', ''),
    new Key('ArrowRight' , false, '<img class="image" src="src/arrowRight.png">', '', '', ''),
    new Key('ControlRight' , false, 'Ctrl', '', '', '', 'ctrlRight')
];

function createKeyboard() {
    let keyboardContent = '';
    for(let i = 0; i < keysArray.length; i++){
        let key = keysArray[i];
        let className = key.className == undefined?'key':key.className;
        let keyText = '';
        if(key.isWrite){
            keyText = shift == true ? lang == 'ru'? key.ruShift :key.enShift:lang == 'ru'?key.ru:key.en;
        }
        else {
            keyText = key.ru;
        }
        keyboardContent += `<div class ="${className}" id = ${key.code}> ${keyText}</div>`
    }
    keyboard.innerHTML = keyboardContent;
}

function refreshKeyBoard() {
    for(let i = 0; i < keysArray.length; i++){
        let key = keysArray[i];
        let keyText = '';
        if(key.isWrite){
            keyText = shift == true ? lang == 'ru'? key.ruShift :key.enShift:lang == 'ru'?key.ru:key.en;
            keyText = caps == true ? keyText.toUpperCase() : keyText;
        }
        else {
            keyText = key.ru;
        }
        document.getElementById(key.code).innerHTML = keyText;
    }
}

function write(code) {
    let key = null;
    for(let i = 0; i < keysArray.length; i++){
        if(keysArray[i].code == code){
            key = keysArray[i];
        }
    }
    if(key != null){
        let start = textarea.selectionStart;
        let end = textarea.selectionEnd - textarea.selectionStart;
        let text = textarea.value.split('');
        let char = shift == true ? lang == 'ru'? key.ruShift :key.enShift:lang == 'ru'?key.ru:key.en;
        char = caps?char.toUpperCase():char;
        text.splice( start, end, char );

        let value = '';
        for(let i = 0; i<text.length; i++){
            value += text[i];
        }
        textarea.value = value;
        textarea.selectionStart = start + 1;
        textarea.selectionEnd = textarea.selectionStart;
    }
}



createKeyboard();



for(let i = 0; i < keysArray.length; i++) {
    document.getElementById(keysArray[i].code).addEventListener('mousedown', function() {
        textarea.focus();
        let key = document.getElementById(keysArray[i].code);
        key.classList.add('press');
        choiceEvent(keysArray[i].code);


    });
    document.getElementById(keysArray[i].code).addEventListener('mouseup', function() {
        let key = document.getElementById(keysArray[i].code);

        if(keysArray[i].code != 'CapsLock' &&
            keysArray[i].code != 'ShiftRight' &&
            keysArray[i].code != 'ShiftLeft' &&
            keysArray[i].code != 'ControlLeft' &&
            keysArray[i].code != 'ControlRight') {
            document.getElementById(keysArray[i].code).classList.remove('press');
        }
        if(keysArray[i].code == 'ShiftRight' || keysArray[i].code == 'ShiftLeft'){
            refreshKeyBoard();
        }
    });
}


document.addEventListener('keydown' , function (event){
    event.preventDefault();
    let key = document.getElementById(event.code);
    key.classList.add('press');
    choiceEvent(event.code);

    document.addEventListener('keyup' , function (event){
        if(event.code != 'CapsLock' &&
            event.code != 'ShiftRight' &&
            event.code != 'ShiftLeft' &&
            event.code != 'ControlLeft' &&
            event.code != 'ControlRight') {
            document.getElementById(event.code).classList.remove('press');
        }
        if(event.code == 'ShiftRight' || event.code == 'ShiftLeft'){
            refreshKeyBoard();
        }
    });
});

