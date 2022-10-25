const musicButton = document.querySelector("#sicko")
const text = document.querySelector(".test");
let isPlaying = false;
let music = new Audio('audio.mp3');

musicButton.addEventListener("click", () => {
    
    if (isPlaying) {
        music.pause();
        isPlaying = false;
        text.style.color = "white";
        console.log("Paused");
    }
    else if (!isPlaying) {
        music.play();
        isPlaying = true;
        text.style.color = "black";
        console.log("Playing");
    }
});