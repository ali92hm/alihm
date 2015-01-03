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
			'global':	{ range: '*', href: '/styles/style.css' },
			'desktop':	{ range: '737-', href: '/styles/style-desktop.css', containers: 1200, grid: { gutters: 25 } },
			'1000px':	{ range: '737-1200', href: '/styles/style-1000px.css', containers: 960, grid: { gutters: 25 }, viewport: { width: 1080 } },
			'mobile':	{ range: '-736', href: '/styles/style-mobile.css', containers: '100%!', grid: { collapse: true, gutters: 15 }, viewport: { scalable: false } }
		}
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');
			
		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');
		
		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

		$('.close').click(function(){
            $('.notification.error').slideUp(300);
            $('.notification.success').slideUp(300);
            return false;
        });
			
		// Forms (IE<10).
		// var $form = $('form');
		// if ($form.length > 0) {
			
		// 	if (skel.vars.IEVersion < 10) {
		// 		$.fn.n33_formerize=function(){var _fakes=new Array(),_form = $(this);_form.find('input[type=text],textarea').each(function() { var e = $(this); if (e.val() === '' || e.val() === e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() ===
		// 		 '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() === e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = $(this); var x = $($('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() === '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = $(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() === '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = $(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { $(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() === e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind('reset', function(event) { event.preventDefault(); $(this).find('select').val($('option:first').val()); $(this).find('input,textarea').each(function() { var e = $(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() === '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() === '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
		// 		$form.n33_formerize();
		// 	}

		// }
		
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