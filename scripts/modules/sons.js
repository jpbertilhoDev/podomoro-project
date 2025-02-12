// Gerenciamento de áudio
export const musica = new Audio('/sons/Amies - Postcard ft. cxlt [TaxGhLN0Qo4].mp3');
export const audioPlay = new Audio('/sons/play.wav');
export const audioPausa = new Audio('/sons/pause.mp3');
export const audioTempoFinalizado = new Audio('/sons/beep.mp3');

const volumeControl = document.getElementById('volume');
const volumeSlider = document.querySelector('.volume-slider');
const musicaCheckbox = document.getElementById('alternar-musica');

//! Função para mostrar/esconder o slider de volume
const toggleVolumeVisibility = (show) => {
    if (show) {
        volumeSlider.classList.add('visible');
    } else {
        volumeSlider.classList.remove('visible');
    }
}

//! Event Listener para o checkbox de música
musicaCheckbox.addEventListener('change', (event) => {
    toggleVolumeVisibility(event.target.checked);
});

volumeControl.addEventListener('input', (event) => {
    const volume = event.target.value / 100;
    ajustarVolume(volume);
});

export const inicializarMusica = () => {
    musica.loop = true;
    // Define o volume inicial baseado no valor do controle
    const volumeInicial = volumeControl.value / 100;
    ajustarVolume(volumeInicial);

    toggleVolumeVisibility(musicaCheckbox.checked);
}


const ajustarVolume = (volume) => {
    musica.volume = volume;
    audioPlay.volume = volume;
    audioPausa.volume = volume;
    audioPausa.volume = volume;
    audioTempoFinalizado.volume = volume;

}





export const tocarMusica = () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
}