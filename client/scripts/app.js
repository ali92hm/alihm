/*
    Miniport by HTML5 UP
    html5up.net | @n33co
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

'use strict';
(function($) {

    skel.init({
        reset: 'full',
        breakpoints: {
            'global':   { range: '*', href: '/styles/style.css' },
            'desktop':  { range: '737-', href: '/styles/style-desktop.css', containers: 1200, grid: { gutters: 25 } },
            '1000px':   { range: '737-1200', href: '/styles/style-1000px.css', containers: 960, grid: { gutters: 25 }, viewport: { width: 1080 } },
            'mobile':   { range: '-736', href: '/styles/style-mobile.css', containers: '100%!', grid: { collapse: true, gutters: 15 }, viewport: { scalable: false } }
        }
    });

    $(function() {

        var $window = $(window),
            $body = $('body');
            
        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');
        
        $window.on('load', function() {
            $body.removeClass('is-loading');
        });

        // CSS polyfills (IE<9).
        if (skel.vars.IEVersion < 9){
            $(':last-child').addClass('last-child');
        }

        // Scrolly.
        $window.load(function() {

            var x = parseInt($('.wrapper').first().css('padding-top')) - 15;
            $('#nav a, .scrolly').scrolly(1000, x);

        });
        
    });

})(jQuery);

$(function(){
    $('.close').click(function(){
        $('.notification.error').slideUp(300);
        $('.notification.success').slideUp(300);
        return false;
    });
    // Submitting forms
    $('#contact_us').on('submit', function(){
        console.log('hey');
        var error = $('.notification.error');
        var success = $('.notification.success');
        success.slideUp(300);
        error.slideUp(300);
        var $form = $(this);
        var email = $('#email').val();
        if (!isValidateEmail(email)) {
            error.slideDown(300);
            return false;
        }
        success.slideDown(300);
        sendMail('New Message: '+$('#subject').val(), 
            'New message from contact us.\n\nFrom: ' + $('#name').val() + '\nEmail: '+ email + '\n\nContent:\n\n'+$('#message').val(),
            function(data){
                success.slideDown(300);
                $form[0].reset();
            },
            function(err){
                error.slideDown(300);
            }
        );
        return false;
    });

    // Sending emails using mandrill
    function sendMail(subject, body, success, error)
    {
        var mailer = new mandrill.Mandrill('fkX3tt_MZMIoCTUJ395dQg');
        var message = {
            'message': {
                'text': body+'\n\n Note: This is an automated email send by alihm.net',
                'subject': subject,
                'from_email': 'info@alihm.net',
                'from_name': 'Ali Hajimirza Website',
                'to': [{'email': 'info@alihm.net'}]
            }
        };
        mailer.call('/messages/send', message, success, error);
    }
    // Validating an email address
    function isValidateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
});