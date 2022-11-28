function play() {
  var audio = document.getElementById("audio");
  audio.play();
  document.getElementById("play").style.display = "none";
  document.getElementById("pause").style.display = "block";
}

function pause() {
  var audio = document.getElementById("audio");
  audio.pause();
  document.getElementById("play").style.display = "block";
  document.getElementById("pause").style.display = "none";
}

var volume = 0.5;

function changevolume(amount) {
  var audioobject = document.getElementsByTagName("audio")[0];
  audioobject.volume = amount;
  volume = amount;
  if (amount > 0.5){
    document.getElementById("volumeUP").style.display = "inline";
    document.getElementById("volumeDOWN").style.display = "none";
    document.getElementById("volumeMUTE").style.display = "none";
  } else if (0.5 > amount && amount > 0.01){
    document.getElementById("volumeUP").style.display = "none";
    document.getElementById("volumeDOWN").style.display = "inline";
    document.getElementById("volumeMUTE").style.display = "none";
  } else if (amount == 0)if (0.5 > amount > 0.01){
    document.getElementById("volumeUP").style.display = "none";
    document.getElementById("volumeDOWN").style.display = "none";
    document.getElementById("volumeMUTE").style.display = "inline";
  }
  console.log(volume)
}

function mute() {
  var audioobject = document.getElementsByTagName("audio")[0];
  audioobject.volume = 0;
  document.getElementById("volumeUP").style.display = "none";
  document.getElementById("volumeDOWN").style.display = "none";
  document.getElementById("volumeMUTE").style.display = "inline";
  document.getElementById("volume").value = "0";
}

function volumeup() {
  var audioobject = document.getElementsByTagName("audio")[0];
  audioobject.volume = volume;
  document.getElementById("volume").value = volume;
  document.getElementById("volumeMUTE").style.display = "none";
  if (volume > 0.5){
    document.getElementById("volumeUP").style.display = "inline";
  } else if (0.5 > volume && volume > 0.01){
    document.getElementById("volumeDOWN").style.display = "inline";
  } else {
    volume = 0.1;
    audioobject.volume = volume;
    document.getElementById("volume").value = volume;
    document.getElementById("volumeDOWN").style.display = "inline";
  }
}
