function isInView(options) {
  if (!options.selector || !options.callback)
    return;
  if (options.isElements) {
    (void 0).querySelectorAll(options.selector).forEach((element) => {
      new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting)
          options.callback(entries[0].target);
        else {
          if (options.whenOutOfView)
            options.whenOutOfView(entries[0].target);
        }
      }).observe(element);
    });
  } else {
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting)
        options.callback(entries[0].target);
      else {
        if (options.whenOutOfView)
          options.whenOutOfView(entries[0].target);
      }
    }).observe((void 0).querySelector(options.selector));
  }
}

export { isInView as i };
//# sourceMappingURL=isInView-VXyFXDVH.mjs.map
