const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const nextButton = document.getElementById('next');
const cover = document.getElementById('cover');
const trackNameDisplay = document.getElementById('track-name');
const trackListElement = document.getElementById('track-list');
const progressBar = document.getElementById('progress-bar');

const tracks = [
    { name: "Ray - Ресницы", url: "tracks/track1.mp3", cover: "images/cover1.jpg" },
    { name: "Егор Крид - Если ты меня не любишь", url: "tracks/track2.mp3", cover: "images/cover2.jpg" },
    { name: "Jony - Камин", url: "tracks/track3.mp3", cover: "images/cover3.jpg" },
    { name: "Gafur, JONY - Lollipop", url: "tracks/track4.mp3", cover: "images/cover4.jpg" },
    { name: "ROSÉ (Blackpink), Bruno Mars - APT", url: "tracks/track5.mp3", cover: "images/cover5.jpg" }
];

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextTrack);

audio.addEventListener('ended', playNextTrack);//след трек

populateTrackList();
loadTrack(currentTrackIndex); //первый трек и индекс

let currentTrackIndex = 0;

function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.url;
    cover.src = track.cover;
    trackNameDisplay.textContent = track.name;
    progressBar.value = 0; 
}

function togglePlayPause() { //если играет-пауза, если пауза-плей
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length; //считаем элементы массива
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseButton.textContent = 'Pause';
}

//отображаем список и выбор трека 
function populateTrackList() {
    tracks.forEach((track, index) => {
        const trackItem = document.createElement('li');
        trackItem.textContent = track.name;
        trackItem.addEventListener('click', () => { //выбираем трек
            currentTrackIndex = index;
            loadTrack(currentTrackIndex);
            audio.play();
            playPauseButton.textContent = 'Pause';// обновляем кнопки
        });
        trackListElement.appendChild(trackItem);
    });
}

// Обновляем линию
audio.addEventListener('timeupdate', () => { //отслеживаем изменения тайма
    const progress = (audio.currentTime / audio.duration) * 100; //показывает какая часть воспроизведена
    progressBar.value = progress;
});

// Перематывать
progressBar.addEventListener('input', () => {
    const newTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = newTime;
});
