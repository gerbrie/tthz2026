(function (Drupal, $) {
  'use strict';

  Drupal.behaviors.colorboxMediaGallery = {
    attach: function (context) {

      // Groepeer afbeeldingen per Drupal-inhoudsitem.
      const $items = $('.node[data-history-node-id]');

      $items.each(function () {
        const $node = $(this);
        const nid = $node.attr('data-history-node-id');

        if (!nid) {
          return;
        }

        $node.find('a.colorbox.d8-has-image').each(function () {
          const $link = $(this);

          $link.colorbox({
            rel: 'gallery-node-' + nid,
            loop: true,
            previous: 'Vorige',
            next: 'Volgende'
          });
        });
      });
    }
  };

})(Drupal, jQuery);