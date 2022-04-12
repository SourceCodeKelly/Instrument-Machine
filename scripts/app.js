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
