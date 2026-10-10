(function (Drupal, $) {
  'use strict';

  const photoSelector = 'a[data-colorbox-gallery^="gallery-photomedia-"][href]';

  Drupal.behaviors.photosColorboxGallery = {
    attach(context) {
      // Bind once per album container; do not depend on when the Colorbox
      // contrib behavior initializes its own links.
      $(context).find('.photos-colorbox-gallery-all[data-photos-colorbox-album]')
        .addBack('.photos-colorbox-gallery-all[data-photos-colorbox-album]')
        .each(function () {
          const container = this;
          if (container.dataset.photosGalleryBound) return;
          container.dataset.photosGalleryBound = '1';
          const albumId = container.dataset.photosColorboxAlbum;
          const node = container.closest('.node--type-photos');
          if (!node) return;

          const links = [...container.querySelectorAll(photoSelector)]
            .filter(a => a.getAttribute('href').trim());
          if (!links.length) return;

          const byHref = new Map();
          links.forEach(link => byHref.set(link.href, link));

          function initializeFullGallery() {
            if (!$.fn.colorbox) return false;
            // Reapply to ALL links immediately before opening. This avoids
            // Drupal Colorbox behaviors overriding the gallery grouping.
            $(links).colorbox({
              rel: 'photos-album-' + albumId,
              loop: true,
              returnFocus: false,
              previous: 'Vorige',
              next: 'Volgende'
            });
            return true;
          }

          initializeFullGallery();

          // Capture before the original Colorbox click handler on thumbnails.
          node.addEventListener('click', function (event) {
            const clicked = event.target.closest('a');
            if (!clicked || container.contains(clicked) || !clicked.matches(photoSelector)) return;
            const target = byHref.get(clicked.href);
            if (!target || !initializeFullGallery()) return;
            event.preventDefault();
            event.stopImmediatePropagation();
            $(target).trigger('click');
          }, true);
        });
    }
  };
})(Drupal, jQuery);
