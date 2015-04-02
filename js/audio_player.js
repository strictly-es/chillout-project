function play() {
   var audio = document.getElementById("audio");
   var button = document.getElementById("play");
   if (audio.paused) {
      audio.play();
      button.textContent = "||";
   } else {
      audio.pause();
      button.textContent = ">";
   }
}
