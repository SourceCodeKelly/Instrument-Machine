//Listen for keys
const buttonAmt = document.querySelectorAll('.key').length;

for (let i = 0; i < buttonAmt; i++) {
    document.querySelectorAll('.key')[i].addEventListener('click', function() {
        const keyStyle = this.innerHTML;
        sound(keyStyle);
        transition(keyStyle);
    })
}