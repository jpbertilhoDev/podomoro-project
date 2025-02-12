export function setupLogout() {
  const logoutButton = document.querySelector('.logout-button');

  logoutButton.addEventListener('click', () => {
    //Limpa os dados de autenticação
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');

    window.location.href = '/index.html';
  });
}

export function confirmLogout() {
  const confirmar = confirm('Tem certeza que deseja sair?');
  if (confirmar) {
      localStorage.removeItem('userToken');
      localStorage.removeItem('userData');
      window.location.href = '/index.html';
  }
}

