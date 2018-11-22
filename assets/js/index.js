$(document).ready(function(){
//COLUMNA IZQUIERDA
	
	$('#image').on('change', function(e){
		e.stopPropagation();
		$('.create__image .create__img').attr('src', 'assets/images/user/' + $(this).val());
		});

	$('.create__tweet').on('submit', function(e){
		e.preventDefault();

		var imgTw = $('#image').val();
		var tweet = $('#txt').val();
		var html  = '<div class="tweets__box row">' +
					'<div class="tweets__highlight">' +
					'<img class="tweets__img" src="assets/images/user/' + imgTw + '"alt="">' +
					'</div>' +
					'<div class="tweets__txt">' +
					'<p>' + tweet + '</p>' +
					'</div>' +
					'<a class="tweets__like" href="#">' +
					'<i class="fas fa-heart"></i>' +
					'<span class="counter"> 0 </span>' +
					'</a>' +
					'<input type="submit" class="delete__submit" value="Erase this!">' +
					'</div>';

		$('.tweets').append(html);
			$('#txt').val('');
			$('#txt').focus();
			$('#image').val('new.jpg');
			$('.create__image .create__img').attr('src', 'assets/images/user/new.jpg');
		});

//COLUMNA IZQUIERDA

		$('.tweets').on('click', '.tweets__like', function(e){
			e.preventDefault();
			e.stopPropagation();

			$(this).addClass('tweets__like--red')

			var counter = $(this).children('.counter').text();
			counter = parseInt(counter);
			counter = counter + 1
			
			$(this).children('.counter').text(' ' + counter + ' ');
			});

		$('.tweets').on('click', '.delete__submit', function(e){
			e.preventDefault();
			e.stopPropagation();
			$(this).parent().remove();
			});
		
}); //.document.ready