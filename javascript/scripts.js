const nightModeButton = document.getElementById('night-mode-toggle');
const container = document.querySelector('.container');

nightModeButton.addEventListener('click', () => {
  container.classList.toggle('night-mode');
});