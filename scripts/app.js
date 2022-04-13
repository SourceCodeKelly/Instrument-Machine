let numberOfButtons = document.querySelectorAll(".button").length;

for (let j = 0; j < numberOfButtons; j++) {

    document.querySelectorAll(".button")[j]
    .addEventListener("click", function() {

        let buttonStyle = this.innerHTML;
        sound(buttonStyle);
        animation(buttonStyle);
    });
}

document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
});

function sound(key) {
    switch (key) {
        case "a":
            let sound1 = new Audio("");
            sound1.play();
            break;

        case "s":
            let sound2 = new Audio("");
            sound2.play();
            break;

        case "d":
            let sound3 = new Audio('');
            sound3.play();
            break;

        case "f":
            let sound4 = new Audio('');
            sound4.play();
            break;

        case "g":
            let sound5 = new Audio('');
            sound5.play();
            break;

        case "h":
            let sound6 = new Audio('');
            sound6.play();
            break;

        case "j":
            let sound7 = new Audio('');
            sound7.play();
            break;
        
        case "k":
            let sound8 = new Audio('');
            sound8.play();
            break;
        
        case "l":
            let sound9 = new Audio('');
            sound9.play();
            break;

        default: console.log(key);
    }
}

function animation(currentKey) {
let activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animate");

setTimeout(function() {
	activeButton.classList.remove("animate");
}, 100);
}
