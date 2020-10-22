;(function($) {

  /**
   * Automatically submit the payment redirect form.
   */
  Drupal.behaviors.commerceVisanetPeru = {
    attach: function (context, settings) {
      $('div.payment-redirect-form .modal-opener').click();
      $('div.payment-redirect-form .modal-opener', context).hide();
    }
  }
})(jQuery);
