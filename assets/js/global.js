// Global Java script file
$(function(){
	$('form').on('submit', function(){
		$form = $(this);
		$.ajax({
			'type': $form.attr('method'),
			'success':function(data){
				console.log('Show success', data);
				$form[0].reset();
			},
			'error':function(err){
				console.log('Show error', error);
			},
			'url': $form.attr('action'),
			'data': $form.serialize()
		});
		return false;
	});
});