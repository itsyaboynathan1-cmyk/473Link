(function () {
  let deferredPrompt = null;

  function isStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  }

  function createButton() {
    if (document.getElementById('install473LinkButton') || isStandalone()) return;
    const button = document.createElement('button');
    button.id = 'install473LinkButton';
    button.type = 'button';
    button.className = 'install-app-button hidden';
    button.textContent = 'Install 473Link';
    button.addEventListener('click', async () => {
      if (!deferredPrompt) {
        window.alert('To install 473Link, open your browser menu and choose “Add to Home Screen”.');
        return;
      }
      deferredPrompt.prompt();
      await deferredPrompt.userChoice.catch(() => null);
      deferredPrompt = null;
      button.classList.add('hidden');
    });
    document.body.appendChild(button);
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    createButton();
    const button = document.getElementById('install473LinkButton');
    if (button) button.classList.remove('hidden');
  });

  window.addEventListener('appinstalled', () => {
    const button = document.getElementById('install473LinkButton');
    if (button) button.classList.add('hidden');
    deferredPrompt = null;
  });

  window.addEventListener('DOMContentLoaded', createButton);
})();
