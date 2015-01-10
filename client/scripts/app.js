/*
    Arcana by HTML5 UP
    html5up.net | @n33co
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
'use strict';
(function($) {

    skel.init({
        reset: 'full',
        breakpoints: {
            global:     { range: '*', href: '/styles/style.css', containers: 1400, grid: { gutters: 50 } },
            wide:       { range: '-1680', href: '/styles/style-wide.css', containers: 1200, grid: { gutters: 40 } },
            normal:     { range: '-1280', href: '/styles/style-normal.css', containers: 960, grid: { gutters: 30 }, viewport: { scalable: false } },
            narrow:     { range: '-980', href: '/styles/style-narrow.css', containers: '95%' },
            narrower:   { range: '-840', href: '/styles/style-narrower.css', containers: '95%!', grid: { zoom: 2 } },
            mobile:     { range: '-736', href: '/styles/style-mobile.css', containers: '90%!', grid: { gutters: 20 } },
            mobilep:    { range: '-480', href: '/styles/css/style-mobilep.css', grid: { zoom: 3 }, containers: '100%' }
        },
        plugins: {
            layers: {
                config: {
                    mode: 'transform'
                },
                navPanel: {
                    animation: 'revealX',
                    breakpoints: 'narrower',
                    clickToHide: true,
                    height: '100%',
                    hidden: true,
                    html: '<div data-action="navList" data-args="nav"></div>',
                    orientation: 'vertical',
                    position: 'top-left',
                    side: 'left',
                    width: 275
                },
                titleBar: {
                    breakpoints: 'narrower',
                    height: 44,
                    html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span><span class="title" data-action="copyHTML" data-args="logo"></span>',
                    position: 'top-left',
                    side: 'top',
                    width: '100%'
                }
            }
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

        // Dropdowns.
            $('#nav > ul').dropotron({
                offsetY: -15,
                hoverDelay: 0,
                alignment: 'center'
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