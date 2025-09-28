(function () {
  const steps = document.querySelectorAll('[data-step]');
  steps.forEach((step) => {
    const header = step.querySelector('.step-header');
    if (!header) return;
    header.addEventListener('click', () => {
      step.classList.toggle('open');
    });
  });

  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.classList.add('open');
    }
  }
})();
