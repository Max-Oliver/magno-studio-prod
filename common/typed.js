// v-typed-loop: escribe y borra palabras en loop (SSR-safe)
export default {
  mounted(el, binding) {
    if (typeof window === 'undefined') return; // SSR guard

    // normalizar opciones
    const v = binding.value;
    const words =
      Array.isArray(v) ? v :
      typeof v === 'string' ? v.split('|').map(s => s.trim()).filter(Boolean) :
      Array.isArray(v?.words) ? v.words :
      (v?.words || '').split('|').map(s => s.trim()).filter(Boolean);

    const speed      = Number(v?.speed ?? 60);      // ms por carácter al escribir
    const backSpeed  = Number(v?.backSpeed ?? 40);  // ms por carácter al borrar
    const backDelay  = Number(v?.backDelay ?? 1200);
    const startDelay = Number(v?.startDelay ?? 0);
    const loop       = v?.loop ?? true;

    let wordIdx = 0, charIdx = 0, phase = 'typing', alive = true;

    const set = (t) => { el.textContent = t; };

    const step = () => {
      if (!alive) return;

      const current = words[wordIdx] || '';
      if (phase === 'typing') {
        set(current.slice(0, charIdx++));
        if (charIdx > current.length) {
          phase = 'pausing';
          setTimeout(() => { phase = 'deleting'; step(); }, backDelay);
          return;
        }
        setTimeout(step, speed);
      } else if (phase === 'deleting') {
        set(current.slice(0, --charIdx));
        if (charIdx <= 0) {
          wordIdx = (wordIdx + 1) % words.length;
          phase = loop ? 'typing' : 'done';
        }
        if (phase !== 'done') setTimeout(step, backSpeed);
      }
    };

    const start = () => {
      if (!words.length) return;
      wordIdx = 0; charIdx = 0; phase = 'typing'; alive = true;
      setTimeout(step, startDelay);
    };

    const stop = () => { alive = false; };

    // Exponer reset para re-ejecutar (ej: al cambiar de slide)
    el.__typedLoop__ = { start, stop };

    start();
  },
  unmounted(el) {
    el.__typedLoop__?.stop?.();
    delete el.__typedLoop__;
  }
};
