const audio = document.querySelector('audio'); // pega o elemento <audio>
const playPauseBtn = document.getElementById('playPause'); // botão de play/pause

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play(); // toca a música
    playPauseBtn.textContent = 'pause'; // muda o ícone para pause
  } else {
    audio.pause(); // pausa a música
    playPauseBtn.textContent = 'play_arrow'; // volta o ícone pra play
  }
});