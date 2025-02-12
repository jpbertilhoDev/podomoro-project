function checkAuth() {
  const token = localStorage.getItem('userToken');
  if (!token) {
    window.location.href = '/pages/login.html';
  }
} 

export { checkAuth };