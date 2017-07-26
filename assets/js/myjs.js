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

// $('#contact-form').submit(function(e){

// 	var name = document.getElementById('yourName').value,
// 	email = document.getElementById('email').value,
// 	message = document.getElementById('msg').value;

// 	if (name.value === null || email.value === null || message.value === null)  
// 		alert('Please check your entries');
	
// 	else {

// 		$.ajax({
// 			url: "https://formspree.io/jesse.e.lott@outlook.com",
// 			method: "POST",
// 			data: {$(this).serialize()}, 
// 			datatype: "json"

// 		});

// 		e.preventDefault();
// 		$("#contact-form").trigger("reset");
// 		alert('Message Sent');
// 	}

// });

// var message = "";

// $("#sendMessage").on("click", function() {
//     message = $("#contact-form").serialize();
//     $.ajax({
//         url: "//formspree.io/jesse.e.lott@outlook.com", 
//         method: "POST",
//         data: {message: message},
//         dataType: "json"
//     });
//     alert('I will contact you as soon as I can.  Have a great day!');
//     return false;
// });

var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/jesse.e.lott@outlook.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Message sent!</div>');
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Oops, there was an error.</div>');
		}
	});
});


