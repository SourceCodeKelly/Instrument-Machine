window.addEventListener('keydown', function(e) {
    //audio selection
    const audio = document.querySelector(`audio[data-key = '${e.keyCode}']`);
    //key selection
    const key = document.querySelector(`.key[data-key = '${e.keyCode}']`);

    //stop audio
    if (!audio) {
        return
    }
    audio.currentTime = 0 //rewind
    audio.play() //start audio
    key.classList.add('playing')
});

const noTransition = function(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('.play')
}

//listen on key press
const keys = document.querySelectorAll('.key');
console.log(keys);
keys.forEach(function(key) {
    key.addEventListener('transiotioned', removeTransition)
})