export const SLIDE_DROP_COLORS = ['#FA7F08', '#22BABB', '#348888', '#9EF8EE', '#F24405'];

export function playDropEffect(color: string, speed = 500) {
  if (typeof document === 'undefined') return;

  let overlay = document.getElementById('badm-drop-effect');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'badm-drop-effect';
    document.body.appendChild(overlay);
  }

  overlay.style.backgroundColor = color;
  overlay.style.transitionDuration = `${speed}ms`;
  overlay.classList.remove('drop-effect--out', 'drop-effect--active');

  requestAnimationFrame(() => {
    overlay?.classList.add('drop-effect--active');
  });

  window.setTimeout(() => {
    overlay?.classList.remove('drop-effect--active');
    overlay?.classList.add('drop-effect--out');
  }, speed);
}
