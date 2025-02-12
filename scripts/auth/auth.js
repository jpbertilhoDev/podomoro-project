document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const showRegister = document.getElementById('showRegister');
  const showLogin = document.getElementById('showLogin');

  // Verificar parâmetros da URL
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get('type');

  // Mostrar formulário apropriado baseado no parâmetro da URL
  if (type === 'register') {
      loginForm.classList.add('hidden');
      registerForm.classList.remove('hidden');
  }

  // Alternar entre formulários
  showRegister.addEventListener('click', (e) => {
      e.preventDefault();
      loginForm.classList.add('hidden');
      registerForm.classList.remove('hidden');
  });

  showLogin.addEventListener('click', (e) => {
      e.preventDefault();
      registerForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
  });

  // Manipular login
  loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      // Por enquanto, apenas simular o login
      localStorage.setItem('userToken', 'temp-token');
      window.location.href = '/pages/app.html';
  });

  // Manipular registro
  registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('registerName').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;

      // Por enquanto, apenas mostrar mensagem e redirecionar para login
      alert('Registro realizado com sucesso! Faça login para continuar.');
      registerForm.classList.add('hidden');
      loginForm.classList.remove('hidden');
  });
});