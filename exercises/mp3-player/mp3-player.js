window.addEventListener("load", function () {
  const song = document.querySelector("#song");
  const progressBar = document.querySelector("#progress-bar");
  const playerDuration = document.querySelector(".player-duration");
  const playerRemaining = document.querySelector(".player-remaining");
  const playerPlay = document.querySelector(".player-play");
  const playerPrev = document.querySelector(".player-prev");
  const playerNext = document.querySelector(".player-next");
  let isPlaying = true;
  let songIndex = 0;
  const musicList = ["holo.mp3", "home.mp3", "spark.mp3", "summer.mp3"];

  playerPlay.addEventListener("click", handlePlayMusic);
  playerNext.addEventListener("click", function () {
    handleChangeMusic(1);
  });
  playerPrev.addEventListener("click", function () {
    handleChangeMusic(-1);
  });

  function handlePlayMusic() {
    if (isPlaying) {
      song.play();
      playerPlay.classList.add("fa-pause");
      isPlaying = false;
    } else {
      song.pause();
      playerPlay.classList.remove("fa-pause");
      isPlaying = true;
    }
  }

  function handleChangeMusic(direction) {
    if (direction === 1) {
      songIndex++;
      if (songIndex > musicList.length - 1) {
        songIndex = 0;
      }
      song.setAttribute("src", `./files/${musicList[songIndex]}`);
      isPlaying = true;
      handlePlayMusic();
    } else if (direction === -1) {
      songIndex--;
      if (songIndex < 0) {
        songIndex = musicList.length - 1;
      }
      song.setAttribute("src", `./files/${musicList[songIndex]}`);
      isPlaying = true;
      handlePlayMusic();
    }
  }

  const { duration, currentTime } = song;
  console.log(duration);
});
