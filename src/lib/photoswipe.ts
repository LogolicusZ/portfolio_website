import "photoswipe/style.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";

/**
 * Attach a PhotoSwipe lightbox to a container and return its teardown.
 *
 * Returning the destroy function (rather than keeping a module-level
 * singleton) lets several galleries coexist on one page — previously a second
 * init tore down the first.
 *
 * `children` is scoped to anchors carrying pswp dimensions so that ordinary
 * links inside the container, such as figcaption credits, are not treated as
 * gallery items.
 */
export function initPhotoSwipe(
  galleryEl: HTMLElement,
  children = "a[data-pswp-width]",
): () => void {
  const lightbox = new PhotoSwipeLightbox({
    gallery: galleryEl,
    children,
    pswpModule: () => import("photoswipe"),
  });

  lightbox.init();

  return () => lightbox.destroy();
}
