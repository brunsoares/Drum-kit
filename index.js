var drumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < drumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        playSound(this.innerHTML);
        animationButton(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event){
    playSound(event.key);
    animationButton(event.key);
});



function playSound(value){
    var audio;
        switch (value) {
            case "w":
                audio = new Audio("/sounds/tom-1.mp3");
                break;
            case "a":
                audio = new Audio("/sounds/tom-3.mp3");
                break;
            case "s":
                audio = new Audio("/sounds/snare.mp3");
                break;
            case "d":
                audio = new Audio("/sounds/kick-bass.mp3");
                break;
            case "j":
                audio = new Audio("/sounds/tom-4.mp3");
                break;
            case "k":
                audio = new Audio("/sounds/crash.mp3");
                break;
            case "l":
                audio = new Audio("/sounds/tom-2.mp3");
                break;
            default:
                break;
        }
        audio.play();
}

function animationButton(value){
    document.querySelector("."+value).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+value).classList.remove("pressed")
    }, 100);
}
