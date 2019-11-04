let lang = 'ru';
let shift = false;

const textarea = document.querySelector('.textArea');

document.addEventListener('keydown' , function (event){
    if(event.shiftKey){
        createKeyboard(lang, shift == true?false:true);
        if (event.altKey){
            lang = lang == 'ru'?'en':'ru';
            createKeyboard(lang, shift);
        }
    }
    else{
        shift = false;
    }

    if(event.code == 'ArrowLeft' || event.code == 'ArrowRight' || event.code == 'ArrowUp' || event.code == 'ArrowDown' ){
        console.log(event.target.selectionStart);
        console.log(event.target.selectionEnd);
    }


    let key = document.getElementById(event.code);
    key.classList.add('press');

    document.addEventListener('keyup' , function (event){
        key.classList.remove('press');
        if(event.code == 'ShiftRight' || event.code == 'ShiftLeft'){
            createKeyboard(lang, shift);
        }
    });
});

for(let i = 0; i < keysArray.length; i++){
    document.getElementById(keysArray[i].code).addEventListener('click', function (event){
        console.log('1');
        if(keysArray[i].isWrite){
            let start = textarea.target.selectionStart;
            let end = textarea.target.selectionEnd - textarea.target.selectionStart;
            console.log('start = ' + start);
            console.log('end = ' + end);
            let text = textarea.value.split().splice( start, end, keysArray[i].ru ).join();
            console.log(text);
            //event.target.selectionStart, event.target.selectionEnd, keysArray[i].ru
             textarea.value = text;
        }
    });
}
