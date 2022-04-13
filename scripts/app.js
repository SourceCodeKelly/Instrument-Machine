//Add event listeners to buttons
let numberOfButtons = document.querySelectorAll(".button").length;

for (let j = 0; j < numberOfButtons; j++) {

    document.querySelectorAll(".button")[j]
    .addEventListener("click", function() {

        let buttonStyle = this.innerHTML;
        sound(buttonStyle);
        animation(buttonStyle);
    });
}

//Add keypress function
document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
});

//Add sound to keys
function sound(key) {
    switch (key) {
        case "a":
            let sound1 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
            sound1.play();
            break;

        case "s":
            let sound2 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
            sound2.play();
            break;

        case "d":
            let sound3 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3');
            sound3.play();
            break;

        case "f":
            let sound4 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3');
            sound4.play();
            break;

        case "g":
            let sound5 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3');
            sound5.play();
            break;

        case "h":
            let sound6 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3');
            sound6.play();
            break;

        case "j":
            let sound7 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3');
            sound7.play();
            break;
        
        case "k":
            let sound8 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3');
            sound8.play();
            break;
        
        case "l":
            let sound9 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3');
            sound9.play();
            break;

        default: console.log(key);
    }
}

//Animate key presses
function animation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("animate");

    setTimeout(function() {
        activeButton.classList.remove("animate");
    }, 100);
}
