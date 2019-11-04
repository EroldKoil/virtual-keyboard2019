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
    new Key('Digit1' , true, 1, '!', 1, '!'),
    new Key('Digit2' , true, 2, '"', 1, '@'),
    new Key('Digit3' , true, 3, '№',1, '#'),
    new Key('Digit4' , true, 4, ';', 1, '$'),
    new Key('Digit5' , true, 5, '%', 1, '%'),
    new Key('Digit6' , true, 6, ':', 1, '^'),
    new Key('Digit7' , true, 7, '?', 1, '&'),
    new Key('Digit8' , true, 8, '*', 1, '*'),
    new Key('Digit9' , true, 9, '(', 1, '!'),
    new Key('Digit0' , true, 0, ')', 1, '!'),
    new Key('Minus' , true, '-', '_', '-', '_'),
    new Key('Equal' , true, '=', '+', '=', '+'),
    new Key('Backspace' , false, 'Backspace', '', '', '' , 'backspace'),

    new Key('Tab' , false, 'Tab', '', '', '', 'tab'),
    new Key('KeyQ' , true, 'й', 'Й', 'q', 'Q'),
    new Key('KeyW' , true, 'ц', 'Ц', 'w', 'W'),
    new Key('KeyE' , true, 'e', 'У', 'e', 'E'),
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
    new Key('ArrowUp' , false, 'up', '', '', ''),
    new Key('ShiftRight' , false, 'Shift', '', '', '', 'shift'),

    new Key('ControlLeft' , false, 'Ctrl', '', '', '', 'alt'),
    new Key('AltLeft' , false, 'Alt', '', '', '', 'alt'),
    new Key('Space' , true, ' space', 'space ', 'space ', ' space', 'space'),
    new Key('AltRight' , false, 'Alt', '', '', '', 'alt'),
    new Key('ArrowLeft' , false, 'left', '', '', ''),
    new Key('ArrowDown' , false, 'down', '', '', ''),
    new Key('ArrowRight' , false, 'right', '', '', ''),
    new Key('ControlRight' , false, 'Ctrl', '', '', '', 'ctrlRight')
];

createKeyboard('ru', false);

function createKeyboard(lang , shift) {

    let keyboard = '';

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
        keyboard += `<div class ="${className}" id = ${key.code}> ${keyText}</div>`
    }
    document.querySelector('.keyboard').innerHTML = keyboard;
}



