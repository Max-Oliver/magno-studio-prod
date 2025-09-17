// common/loadBackgroudImages.ts
export default function loadBackgroudImages(
  opts: { selector?: string; mobileQuery?: string } = {}
) {
  const selector = opts.selector ?? '[data-background], [data-bg-desktop], [data-bg-mobile]';
  const mobileQuery = opts.mobileQuery ?? '(max-width: 768px)';

  const pickSrc = (el: HTMLElement, isMobile: boolean) => {
    const d = el.dataset as any;
    // prioridad: desktop/mobile nuevos, luego legacy data-background
    if (isMobile)  return d.bgMobile   || d.background || d.bgDesktop || '';
    else           return d.bgDesktop  || d.background || d.bgMobile  || '';
  };

  const applyAll = (isMobile: boolean) => {
    const nodes = document.querySelectorAll<HTMLElement>(selector);
    nodes.forEach(el => {
      const src = pickSrc(el, isMobile);
      if (src) el.style.backgroundImage = `url('${src}')`;
    });
  };

  // primera aplicación
  const mql = window.matchMedia(mobileQuery);
  applyAll(mql.matches);

  // re-aplicar en cambios de viewport
  const onChange = () => applyAll(mql.matches);
  mql.addEventListener?.('change', onChange);
  window.addEventListener('resize', onChange, { passive: true });
}
