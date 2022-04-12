//Listen for keys
const buttonAmt = document.querySelectorAll('.key').length;
//Key click
for (let i = 0; i < buttonAmt; i++) {
    document.querySelectorAll('.key')[i].addEventListener('click', function() {
        const keyStyle = this.innerHTML;
        sound(keyStyle);
        transition(keyStyle);
    })
}
//Key press
document.addEventListener('keypress', function(event) {
    sound(event.key);
    transition(event.key);
});

//Switch for keys
function sound(key) {
    switch (key) {
        case 'a':
            const drum1 = new Audio('');
            drum1.play();
            break;

        case 's':
            const drum2 = new Audio('');
            drum2.play();
            break;
        
        case 'd':
            const drum3 = new Audio('');
            drum3.play();
            break;
       
         case 'f':
            const drum4 = new Audio('');
            drum4.play();
            break;
        
        case 'g':
            const drum5 = new Audio('');
            drum5.play();
            break;
        
        case 'h':
            const drum6 = new Audio('');
            drum6.play();
            break;
        
        case 'j':
            const drum7 = new Audio('');
            drum7.play();
            break;
        
        case 'k':
            const drum8 = new Audio('');
            drum8.play();
            break;
        
        case 'l':
            const drum9 = new Audio('');
            drum9.play();
            break;

        default: console.log(key);
    }
}

function transition(key) {
    const active = document.querySelector('.' + key);

    active.classList.add('playing');

    setTimeout(function() {
        active.classList.remove('playing');
    }, 100);
}