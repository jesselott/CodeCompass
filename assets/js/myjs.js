$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 120
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

$('#contact-form').submit(function(e){

	var name = document.getElementById('yourName'),
	email = document.getElementById('email'),
	message = document.getElementById('msg')

	if (!name.value || !email.value || !message.value)  
		alertify.error('Please check your entries')
	
	else {

		$.ajax({
			url: "https://formspree.io/jesse.e.lott@outlook.com",
			method: "POST",
			data: $(this).serialize(), 
			datatype: "json"

		});

		e.preventDefault()
		$(this).get(0).reset()
		alertify.success('Message Sent')
	}

});


