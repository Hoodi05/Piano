const pianoKeys = document.querySelectorAll(".piano-keys .key-white,.key-black"),
volumeSlider = document.querySelector(".volume input");

let  allKeys = [],
audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() =>{
        clickedKey.classList.remove("active");
    }, 150);
} 

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click",() => playTune(key.dataset.key));
});

const handleVolume = (x) =>{
    audio.volume = x.target.value;
}

const pressedKey = (x) => {
    if(allKeys.includes(x.key)) playTune(x.key);
}

document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);