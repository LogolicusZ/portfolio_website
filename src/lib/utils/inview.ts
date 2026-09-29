export function inview(node: HTMLElement, delay = 0) {
  if (typeof IntersectionObserver === "undefined") {
    node.classList.add("is-visible");
    return {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        setTimeout(() => node.classList.add("is-visible"), delay);
        observer.unobserve(node);
      }
    },
    { threshold: 0.15 },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
