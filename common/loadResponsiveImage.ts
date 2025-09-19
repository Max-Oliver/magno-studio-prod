// directives/responsiveImg.ts
import type { Directive } from 'vue';

const responsiveImg: Directive<HTMLImageElement, { mobileQuery?: string }> = {
  mounted(el, binding) {
    const mq = window.matchMedia(binding.value?.mobileQuery ?? '(max-width: 768px)');

    const pick = () => {
      const d = el.dataset as any;
      return mq.matches
        ? d.srcMobile || el.getAttribute('src') || d.srcDesktop
        : d.srcDesktop || el.getAttribute('src') || d.srcMobile;
    };

    const apply = () => {
      const src = pick();
      if (src && el.src !== src) el.src = src;
    };

    apply();

    const onChange = () => apply();
    mq.addEventListener?.('change', onChange);
    window.addEventListener('resize', onChange, { passive: true });

    (el as any).__respCleanup__ = () => {
      mq.removeEventListener?.('change', onChange);
      window.removeEventListener('resize', onChange);
    };
  },
  unmounted(el) {
    (el as any).__respCleanup__?.();
  }
};

export default responsiveImg;
