export function inview(node: HTMLElement, delay: number | (() => number) = 0) {
  if (typeof IntersectionObserver === "undefined") {
    node.classList.add("is-visible");
    return {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        setTimeout(
          () => node.classList.add("is-visible"),
          typeof delay === "function" ? delay() : delay,
        );
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
