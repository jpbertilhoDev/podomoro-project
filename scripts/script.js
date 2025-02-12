import { 
  focoBt,
  curtoBt,
  longoBt,
  startPauseBt,
  musicaFocoInput,
  iniciarOuPausarBt,     // Adicionar esta importação
  iniciarOuPausarBtIcone
  
} from "./modules/elementos.js";

import { 
  inicializarMusica, 
  tocarMusica, 
  audioPlay, 
  audioPausa 
} from './modules/sons.js';

import { 
  mostrarTempo, 
  contagemRegressiva, 
  iniciarTempo,
  zerar,
  getIntervaloId,
  setIntervaloId
} from './modules/timer.js';

import { alterarContexto } from "./modules/contexto.js";
import { setupLogout } from './auth/logout.js';

// No início do seu código ou no DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  setupLogout(); // Configura o logout
  // ... resto do seu código
});

// Inicialização
inicializarMusica();
mostrarTempo();

// Event Listeners
musicaFocoInput.addEventListener('change', tocarMusica);

focoBt.addEventListener('click', () => {
  iniciarTempo(1500);
  alterarContexto('foco');
  focoBt.classList.add('active');
});

curtoBt.addEventListener('click', () => {
  iniciarTempo(300);
  alterarContexto('descanso-curto');
  curtoBt.classList.add('active');
});

longoBt.addEventListener('click', () => {
  iniciarTempo(600);
  alterarContexto('descanso-longo');
  longoBt.classList.add('active');
});

startPauseBt.addEventListener('click', () => {
  const intervaloId = getIntervaloId();
  if (intervaloId) {
    audioPausa.play();
    zerar();
    return;
  }
  audioPlay.play();
  iniciarOuPausarBt.textContent = "Pausar";
  iniciarOuPausarBtIcone.setAttribute('src', `imagens/pause.png`);
  setIntervaloId(setInterval(contagemRegressiva, 1000));
});
