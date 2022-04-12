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
