$(document).ready(function(){
	alert('hola') //para comprobar JS. No sacar hasta que esté listo.

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
					'<a class="tweets__like tweets__like--blue" href="#">' +
					'<i class="far fa-heart"></i>' +
					'<span class="counter"> 0 </span>' +
					'</a>' +
					'<input type="submit" class="delete__submit" value="Erase this!">' +
					'</div>';

		$('.tweets').append(html);
			//me falta que vuelva con la foto anterior
			//$('#image').val('src', 'assets/images/user/new.jpg');
			$('#txt').val('');
			$('#txt').focus();
		})


//COLUMNA IZQUIERDA

		$('.tweets').on('click', '.tweets__like', function(e){
			e.preventDefault();
			e.stopPropagation();
			
			$(this).addClass('tweets__like--red')

			});

		//con este código logro algo muy raro
		/*$('.tweets').on('click', '.counter', function(e){
			e.preventDefault();
			e.stopPropagation();
			
			var counter = $('.counter').text();
			counter = parseInt(counter);
		
			$(this).text(counter + 1);
		})*/



		$('.tweets').on('click', '.delete__submit', function(e){
			e.preventDefault();
			e.stopPropagation();
			$(this).parent().remove();
		})
		
}); //.document.ready