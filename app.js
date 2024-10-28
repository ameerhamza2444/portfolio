$(document).ready(function ($) {
    /* Contact Form Interactions */
    $('.btnOpenForm').on('click', function (event) { // Change from id to class
        event.preventDefault();

        $('.form-popup-bg').addClass('is-visible');
    });

    //close popup when clicking x or off popup
    $('.form-popup-bg').on('click', function (event) {
        if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });
});