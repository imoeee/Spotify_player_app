// Intialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
  {
    songName: "Alec-Benjamin - Let Me Down Slowly",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Sia - Unstoppable (Official Music Video)",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Jaymes Young - Infinity (Official Music)",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "The Kid LAROI, Justin Bieber - STAY ",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },

  {
    songName: "24kGoldn - Mood (Official) ft. iann dior",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Cartoon - On & On (feat. Daniel Levi)",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Imagine Dragons - Bad Liar (Official )",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Imagine Dragons - Believer (Official)",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Imagine Dragons - Demons (Official )",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
  {
    songName: "Imagine Dragons - Natural (Official)",
    filePath: "songs/11.mp3",
    coverPath: "covers/11.jpg",
  },
  {
    songName: "Imagine Dragons - Whatever It Takes ",
    filePath: "songs/12.mp3",
    coverPath: "covers/12.jpg",
  },
  {
    songName: "Sia - Cheap Thrills (Lyric ) ft.Sean",
    filePath: "songs/13.mp3",
    coverPath: "covers/13.jpg",
  },
  {
    songName: "Wiz Khalifa - See You Again ft. Charlie",
    filePath: "songs/14.mp3",
    coverPath: "covers/14.jpg",
  },
  {
    songName: "Fall Out Boy - Centuries (Official Music)",
    filePath: "songs/15.mp3",
    coverPath: "covers/15.jpg",
  },
  {
    songName: "K-391 & Alan Walker - Ignite (feat. Julie)",
    filePath: "songs/16.mp3",
    coverPath: "covers/16.jpg",
  },
  {
    songName: "ZAYN - Dusk Till Dawn (Official Video)",
    filePath: "songs/17.mp3",
    coverPath: "covers/17.jpg",
  },

];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//audioElement.play();

//Handle play/pause  click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //Update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= 16) {
    songIndex = 0
  }
  else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");

})

document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 0) {
    songIndex = 0
  }
  else {

    songIndex -= 1;

  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");

})