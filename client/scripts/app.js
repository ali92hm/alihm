"use strict"

$(function(){
    $('.close').click(function(){
        $('.notification.error').slideUp(300);
        $('.notification.success').slideUp(300);
        return false;
    });
    // Submitting forms
    $('#contact-me').on('submit', function(){
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