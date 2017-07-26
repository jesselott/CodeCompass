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

	var name = document.getElementById('yourName').value,
	email = document.getElementById('email').value,
	message = document.getElementById('msg').value;

	if (name.value === null || email.value === null || message.value === null)  
		alert('Please check your entries');
	
	else {

		$.ajax({
			url: "https://formspree.io/jesse.e.lott@outlook.com",
			method: "POST",
			data: $(this).serialize(), 
			datatype: "json"

		});

		e.preventDefault();
		$("#contact-form").trigger("reset");
		alert('Message Sent');
	}

});


