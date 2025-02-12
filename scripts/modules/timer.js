import { audioPausa, audioTempoFinalizado } from './sons.js';
import { tempoNaTela, iniciarOuPausarBt, iniciarOuPausarBtIcone, startPauseBt } from './elementos.js';

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

export const iniciarTempo = (tempo) => {
    tempoDecorridoEmSegundos = tempo;
    mostrarTempo();
}

export const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        audioTempoFinalizado.play();
        alert('Tempo esgotado!');
        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

export function iniciarOuPausar() {
    if(intervaloId) {
        audioPausa.play();
        zerar();
        return;
    }
    audioPlay.play();
    iniciarOuPausarBt.textContent = "Pausar";
    iniciarOuPausarBtIcone.setAttribute('src', 'imagens/pause.png');
    intervaloId = setInterval(contagemRegressiva, 1000);
}


export function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = "Começar";
    iniciarOuPausarBtIcone.setAttribute('src', `imagens/play_arrow.png`);
    intervaloId = null;
}


export function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

export const getIntervaloId = () => intervaloId;
export const setIntervaloId = (id) => intervaloId = id;
