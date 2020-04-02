'use strict'

const line_1_EN = [['`','~'],['1','!'],['2','@'],['3','#'],['4','$'],['5','%'],['6','^'],['7','&'],['8','*'],['9','('],['0',')'],['-','_'],['=','+'],'Backspace'];
const line_2_EN = ['Tab','Q','W','E','R','T','Y','U','I','O','P',['[','{'],[']','}'],['\\','|']];
const line_3_EN = ['CapsLock','A','S','D','F','G','H','J','K','L',[';',':'],['\'','"'],'ENTER'];
const line_4_EN = ['Shift','Z','X','C','V','B','N','M',[',','<'],['.','>'],['/','?',],'&uarr;','Shift'];
const line_5 = ['Ctrl','Win','Alt','&ensp;','Alt','Ctrl',' &larr;','&darr;','&rarr;'];

const line_1_RU = ['Ё',['1','!'],['2','"'],['3','№'],['4',';'],['5','%'],['6',':'],['7','?'],['8','*'],['9','('],['0',')'],['-','_'],['=','+'],'Backspace'];
const line_2_RU = ['Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ',['\\','/']];
const line_3_RU = ['CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','ENTER'];
const line_4_RU = ['Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю',['.',','],'&uarr;','Shift'];

const AllCodesAndKeys = {

    Backquote: ['`', '~', 'ё', 'Ё'],
    Digit1: ['1', '!', '1', '!'],
    Digit2: ['2', '@', '2', '"'],
    Digit3: ['3', '#', '3', '№'],
    Digit4: ['4', '$', '4', ';'],
    Digit5: ['5', '%', '5', '%'],
    Digit6: ['6', '^', '6', ':'],
    Digit7: ['7', '&', '7', '?'],
    Digit8: ['8', '*', '8', '*'],
    Digit9: ['9', '(', '9', '('],
    Digit0: ['0', ')', '0', ')'],
    Minus: ['-', '_', '-', '_'],
    Equal: ['=', '+', '=', '+'],
    Backspace: ['Backspace', 'controlButton'],

    Tab: ['    ', '    ', '    ', '    '],
    KeyQ: ['q', 'Q', 'й', 'Й'],
    KeyW: ['w', 'W', 'ц', 'Ц'],
    KeyE: ['e', 'E', 'у', 'У'],
    KeyR: ['r', 'R', 'к', 'К'],
    KeyT: ['t', 'T', 'е', 'Е'],
    KeyY: ['y', 'Y', 'н', 'Н'],
    KeyU: ['u', 'U', 'г', 'Г'],
    KeyI: ['i', 'I', 'ш', 'Ш'],
    KeyO: ['o', 'O', 'щ', 'Щ'],
    KeyP: ['p', 'P', 'з', 'З'],
    BracketLeft: ['[', '{', 'х', 'Х'],
    BracketRight: [']', '}', 'ъ', 'Ъ'],
    Backslash: ['\\', '|', '\\', '/'],

    CapsLock: ['CapsLock', 'controlButton'],
    KeyA: ['a', 'A', 'ф', 'Ф'],
    KeyS: ['s', 'S', 'ы', 'Ы'],
    KeyD: ['d', 'D', 'в', 'В'],
    KeyF: ['f', 'F', 'а', 'А'],
    KeyG: ['g', 'G', 'п', 'П'],
    KeyH: ['h', 'H', 'р', 'Р'],
    KeyJ: ['j', 'J', 'о', 'О'],
    KeyK: ['k', 'K', 'л', 'Л'],
    KeyL: ['l', 'L', 'д', 'Д'],
    Semicolon: [';', ':', 'ж', 'Ж'],
    Quote: ['\'', '"', 'э', 'Э'],
    Enter: ['<br />', 'controlButton'],

    ShiftLeft: ['Shift', 'controlButton'],
    KeyZ: ['z', 'Z', 'я', 'Я'],
    KeyX: ['x', 'X', 'ч', 'Ч'],
    KeyC: ['c', 'C', 'с', 'С'],
    KeyV: ['v', 'V', 'м', 'М'],
    KeyB: ['b', 'B', 'и', 'И'],
    KeyN: ['n', 'N', 'т', 'Т'],
    KeyM: ['m', 'M', 'ь', 'Ь'],
    Comma: [',', '<', 'б', 'Б'],
    Period: ['.', '>', 'ю', 'Ю'],
    Slash: ['/', '?', '.', ','],
    ArrowUp: [-60, 'controlButton'],
    ShiftRight: ['Shift', 'controlButton'],
    
    ControlLeft: ['Control', 'controlButton'],
    MetaLeft: ['Meta', 'controlButton'],
    AltLeft: ['Alt', 'controlButton'],
    Space: [' ', ' ', ' ', ' '], 
    AltRight: ['Alt', 'controlButton'],
    ControlRight: ['Control', 'controlButton'],
    ArrowLeft: [-1, 'controlButton'],
    ArrowDown: [60, 'controlButton'],
    ArrowRight: [1, 'controlButton'],
}

const codesArray = Object.keys(AllCodesAndKeys);

const buttonsLength = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 90, 90, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 98, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 98, 146, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 370, 50, 50, 50, 50, 50];

class Keyboards {

    constructor() {
        this.virtualDisplay = document.createElement('div');
        this.printedText = document.createElement('textarea');
        this.currentLanguage = document.createElement('div');
        this.myKeyboard = document.createElement('div');
        this.info = document.createElement('div');
        this.button = document.createElement('div');
        this.language = '';
        this.shiftStatus = false;
        this.CapsLockStatus = false;          
    }

    createAreas() {        
        document.body.append(this.virtualDisplay);
        this.virtualDisplay.classList.add('virtualDisplay');
        this.virtualDisplay.append(this.printedText);
        this.virtualDisplay.append(this.currentLanguage);
        this.printedText.classList.add('printedText');
        this.currentLanguage.classList.add('currentLanguage');
        this.currentLanguage.innerText = this.language;
        document.body.append(this.myKeyboard);
        this.myKeyboard.className = 'keyboard';
        document.body.append(this.info);
        this.info.classList.add('info');
        this.info.innerHTML = 'EN ' + '&harr;' + ' RU : ShiftLeft + ControlLeft' + '<br />' + 'Created in Windows' + '<br />' + 'Keys SHIFT and CAPSLOCK in Virtual Keyboard Mode immitate real behaviour';
    }

    createButtons() {
        
        for (let i = 0; i < buttonsLength.length; i++) {
            let button = document.createElement('div');
            button.classList.add('button');
            button.setAttribute('id', codesArray[i]);
            button.style.width = buttonsLength[i] + 'px';
            this.myKeyboard.append(button); 
        }

    }

    addButtonText() {
        let allButtons = this.myKeyboard.querySelectorAll('.button');
   
        for (let x = 0; x < this.ALL_KEYS.length; x++) {       
            
            let button = allButtons[x];
            if (Array.isArray(this.ALL_KEYS[x])) {
                button.classList.add('doubleInputButton');
                let noShiftText = document.createElement('div');
                let shiftText = document.createElement('div');
                shiftText.classList.add('shiftText');
                noShiftText.classList.add('noShiftText');
                button.append(shiftText);
                button.append(noShiftText);
                shiftText.innerHTML = this.ALL_KEYS[x][1];
                noShiftText.innerHTML = this.ALL_KEYS[x][0];                
            } else {
                button.innerHTML = this.ALL_KEYS[x];
            };
        } 
    }

    addListeners() {
        document.addEventListener('keydown', (event) => this.RealKeyDown(event));
        document.addEventListener('keyup', (event) => this.RealKeyUp(event));
        document.addEventListener('mousedown', (event) => this.MouseDown(event));
        document.addEventListener('mouseup', (event) => this.MouseUp(event));
        document.addEventListener('mouseout', (event) => this.MouseOut(event));
    }

    RealKeyDown(event) {
        event.preventDefault();      
        this.printedText.focus();

        if (AllCodesAndKeys[event.code][0] == 'CapsLock') {
            document.getElementById(`${event.code}`).classList.contains('active') ?
            document.getElementById(`${event.code}`).classList.remove('active') :
            document.getElementById(`${event.code}`).classList.add('active');
        } else {
            document.getElementById(`${event.code}`).classList.add('active');
        }
        
        if (document.getElementById('ShiftLeft').classList.contains('active') && document.getElementById('ControlLeft').classList.contains('active')) {
            this.changeLanguage();
            return;
        }

        if (event.code.match(/(Arrow).*/)) {
            console.log('YES')
            this.printedText.selectionStart = this.printedText.selectionStart + AllCodesAndKeys[event.code][0];
            this.printedText.selectionEnd = this.printedText.selectionStart;
        }

        if (this.language == 'EN' && AllCodesAndKeys[event.code][1] != 'controlButton') {

            if (this.shiftStatus == false && this.CapsLockStatus == false) {
                this.printedText.value += AllCodesAndKeys[event.code][0];
            
            } else if (this.shiftStatus == true && this.CapsLockStatus == false) {
                this.printedText.value += AllCodesAndKeys[event.code][1];
            }

            else if (this.shiftStatus == false && this.CapsLockStatus == true) {
                if (!event.code.match(/(Digit)[0-9]/) && !event.code.match(/.*(ash)/) && event.code != 'Backquote') {
                    this.printedText.value += AllCodesAndKeys[event.code][1];
                } else {
                    this.printedText.value += AllCodesAndKeys[event.code][0];
                }
                  
            } else if (this.shiftStatus == true && this.CapsLockStatus == true) {
                if (!event.code.match(/(Digit)[0-9]/) && !event.code.match(/.*(ash)/) && event.code != 'Backquote') {
                    this.printedText.value += AllCodesAndKeys[event.code][0];
                } else {
                    this.printedText.value += AllCodesAndKeys[event.code][1];
                } 
            }         

        } else if (this.language == 'RU' && AllCodesAndKeys[event.code][1] != 'controlButton') {

            if (this.shiftStatus == false && this.CapsLockStatus == false) {
                this.printedText.value += AllCodesAndKeys[event.code][2];
            
            } else if (this.shiftStatus == true && this.CapsLockStatus == false) {
                this.printedText.value += AllCodesAndKeys[event.code][3];
            }

            else if (this.shiftStatus == false && this.CapsLockStatus == true) {
    
                if (!event.code.match(/(Digit)[0-9]/) && !event.code.match(/.*(ash)/)) {
                    this.printedText.value += AllCodesAndKeys[event.code][3];
                } else {
                    this.printedText.value += AllCodesAndKeys[event.code][2];
                }
                  
            } else if (this.shiftStatus == true && this.CapsLockStatus == true) {
                if (!event.code.match(/(Digit)[0-9]/) && !event.code.match(/.*(ash)/)) {
                    this.printedText.value += AllCodesAndKeys[event.code][2];
                } else {
                    this.printedText.value += AllCodesAndKeys[event.code][3];
                } 
            }         
        
        } else if (event.code == 'CapsLock') {
            this.CapsLockStatus == false ? this.CapsLockStatus = true : this.CapsLockStatus = false;

        
        } else if (AllCodesAndKeys[event.code][0] == 'Shift') {
            this.shiftStatus = true;
        
        } else if (event.code == 'Backspace') {
            this.printedText.value = this.printedText.value.slice(0,-1);
        
        } else if (event.code == 'Enter') {
            this.printedText.setRangeText('\n', this.printedText.selectionStart, this.printedText.selectionEnd, 'end');
        }
        
    }

    RealKeyUp(event) {
        event.preventDefault();  

        if (AllCodesAndKeys[event.code][0] == 'Shift') {
            this.shiftStatus = false;
        }
        if (AllCodesAndKeys[event.code][0] != 'CapsLock') {
            document.getElementById(`${event.code}`).classList.remove('active');
        } 
    }

    MouseDown(event) {
        
        let ShiftLeft = document.getElementById('ShiftLeft');
        let ShiftRight = document.getElementById('ShiftRight');

        if (!event.target.classList.contains('button') && !event.target.parentNode.classList.contains('button')) {return};

        if (event.target.id == 'CapsLock') {
            event.target.classList.contains('active') ?
            event.target.classList.remove('active') :
            event.target.classList.add('active');
        } else {
            event.target.classList.add('active');
            event.target.parentNode.classList.add('active');
        }
       
        if (event.target.parentNode.classList.contains('doubleInputButton') && this.shiftStatus == false) {
                this.printedText.value += AllCodesAndKeys[event.target.parentNode.id][0];
                
        } else if (event.target.parentNode.classList.contains('doubleInputButton') && this.shiftStatus == true) {
                this.printedText.value += AllCodesAndKeys[event.target.parentNode.id][1];
                
                this.shiftStatus = false;
                ShiftLeft.classList.remove('active');
                ShiftRight.classList.remove('active');
        
        } else if (this.language == 'EN' && AllCodesAndKeys[event.target.id][1] != 'controlButton') {

            if (this.shiftStatus == false && this.CapsLockStatus == false) {
                this.printedText.value += AllCodesAndKeys[event.target.id][0];
            
            } else if (this.shiftStatus == true && this.CapsLockStatus == false) {
                this.printedText.value += AllCodesAndKeys[event.target.id][1];

                this.shiftStatus = false;
                ShiftLeft.classList.remove('active');
                ShiftRight.classList.remove('active');

            }

            else if (this.shiftStatus == false && this.CapsLockStatus == true) {
                if (!event.target.id.match(/(Digit)[0-9]/) && !event.target.id.match(/.*(ash)/)) {
                    this.printedText.value += AllCodesAndKeys[event.target.id][1];
                } else {
                    this.printedText.value += AllCodesAndKeys[event.target.id][0];
                }
                  
            } else if (this.shiftStatus == true && this.CapsLockStatus == true) {
                if (!event.target.id.match(/(Digit)[0-9]/) && !event.target.id.match(/.*(ash)/)) {
                    this.printedText.value += AllCodesAndKeys[event.target.id][0];
                } else {
                    this.printedText.value += AllCodesAndKeys[event.target.id][1];
                } 

                this.shiftStatus = false;
                ShiftLeft.classList.remove('active');
                ShiftRight.classList.remove('active');
            }             

        } else if (this.language == 'RU' && AllCodesAndKeys[event.target.id][1] != 'controlButton') {

            if (this.shiftStatus == false && this.CapsLockStatus == false) {
                this.printedText.value += AllCodesAndKeys[event.target.id][2];
            
            } else if (this.shiftStatus == true && this.CapsLockStatus == false) {
                this.printedText.value += AllCodesAndKeys[event.target.id][3];

                this.shiftStatus = false;
                ShiftLeft.classList.remove('active');
                ShiftRight.classList.remove('active');
            }

            else if (this.shiftStatus == false && this.CapsLockStatus == true) {
                if (!event.target.id.match(/(Digit)[0-9]/) && !event.target.id.match(/.*(ash)/)) {
                    this.printedText.value += AllCodesAndKeys[event.target.id][3];
                } else {
                    this.printedText.value += AllCodesAndKeys[event.target.id][2];
                }
                  
            } else if (this.shiftStatus == true && this.CapsLockStatus == true) {
                if (!event.target.id.match(/(Digit)[0-9]/) && !event.target.id.match(/.*(ash)/)) {
                    this.printedText.value += AllCodesAndKeys[event.target.id][2];
                    this.shiftStatus = false;
                    ShiftLeft.classList.remove('active');
                    ShiftRight.classList.remove('active');
                } else {
                    this.printedText.value += AllCodesAndKeys[event.target.id][3];
                    this.shiftStatus = false;
                    ShiftLeft.classList.remove('active');
                    ShiftRight.classList.remove('active');
                } 
            }         
        
        } else if (event.target.id == 'CapsLock') {
            this.CapsLockStatus == false ? this.CapsLockStatus = true : this.CapsLockStatus = false;
        
        } else if (AllCodesAndKeys[event.target.id][0] == 'Shift') {  // придумать обработку активного шифта
            if (this.shiftStatus == true) {
                this.shiftStatus = false;
                ShiftLeft.classList.remove('active');
                ShiftRight.classList.remove('active');
            } else {
                this.shiftStatus = true;
            }
        
        } else if (event.target.id == 'Backspace') {
           
           this.printedText.value = this.printedText.value.slice(0,-1);
        
        } else if (event.target.id == 'Enter') {
            this.printedText.setRangeText('\n', this.printedText.selectionStart, this.printedText.selectionEnd, 'end');
        
        } else if (event.target.id.match(/(Arrow).*/)) {
            this.printedText.setRangeText(event.target.innerHTML, this.printedText.selectionStart, this.printedText.selectionEnd, 'end');
        }

    }
        
    MouseUp(event) {
        if (event.target.id != 'CapsLock' && !event.target.id.match(/.*(Shift)/)) {
            event.target.classList.remove('active');
            event.target.parentNode.classList.remove('active');
            event.relatedTarget.classList.remove('active'); //CHECK!!!
        }
    }

    MouseOut () {
        if (event.target === event.relatedTarget) {
            return;
        } else {
            event.target.classList.remove('active');
        }
    }

    setLanguage() {
        if (localStorage.getItem('languageAAA') == undefined) {
            localStorage.setItem('languageAAA', 'EN');
        }

        if (localStorage.getItem('languageAAA') == 'EN') {
            this.language = 'EN'
            this.ALL_KEYS = line_1_EN.concat(line_2_EN, line_3_EN, line_4_EN, line_5);
        } else if (localStorage.getItem('languageAAA') == 'RU') {
            this.language = 'RU';
            this.ALL_KEYS = line_1_RU.concat(line_2_RU, line_3_RU, line_4_RU, line_5);
        }
    }
    
    changeLanguage() {
        
        if (this.language == 'RU') {
            this.language = 'EN';
            localStorage.languageAAA = 'EN';
            this.ALL_KEYS = line_1_EN.concat(line_2_EN, line_3_EN, line_4_EN, line_5);
            
        } else if (this.language == 'EN') {
            this.language = 'RU';
            localStorage.languageAAA = 'RU';
            this.ALL_KEYS = line_1_RU.concat(line_2_RU, line_3_RU, line_4_RU, line_5);
        }

        this.currentLanguage.innerText = this.language;
        let allButtons = this.myKeyboard.querySelectorAll('.button');
        allButtons.forEach(el => el.innerText = '');
        this.addButtonText();
    }
}


let NewKeyboard = new Keyboards();

NewKeyboard.setLanguage();
NewKeyboard.createAreas();
NewKeyboard.createButtons();
NewKeyboard.addButtonText();
NewKeyboard.addListeners();


