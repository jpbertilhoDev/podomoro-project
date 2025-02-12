import { html, banner, titulo, botoes } from './elementos.js';
import { mostrarTempo } from './timer.js';

const MENSAGENS = {
    foco: {
        titulo: `
        Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>
        `
    },
    "descanso-curto": {
        titulo: `Que tal dar uma respirada?
        <strong class="app__title-strong">Faça uma pausa curta.</strong>`
    },
    "descanso-longo": {
        titulo: `Hora de voltar á superfície.
        <strong class="app__title-strong">Faça uma pausa longa.</strong>`
    }
}

export function alterarContexto(contexto) {
    mostrarTempo();
    botoes.forEach(function (botao) {
        botao.classList.remove('active');
    });

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);
    titulo.innerHTML = MENSAGENS[contexto].titulo;
}