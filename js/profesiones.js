$(document).on('ready',function(){

	/*filtro por zonas*/
	$('.zonas_menu .filter').on('click',function(){
		zona = $(this).attr('data-filter');
		$('.portfolio').css('display','none');
		$(zona).fadeIn();
		distancia  = $('#portfoliolist').offset().top;
		$("html, body").animate({
		    scrollTop: distancia
		}, 1500);
	});


	
	/*filtro por profesiones*/
	$('.especialidades').css('display','none');
	$('.portfolio').on('click',function(){
		profesion = $(this).attr('data-cat');
		
		$('.espcialides-title').fadeIn();
		$('.especialidades').css('display','none');
		$('.'+profesion).fadeIn();


		distancia  = $('.espcialides-title').offset().top;
		$('.especialidades-text').text(profesion.toUpperCase());
		//alert(distancia);
	    $("html, body").animate({
		    scrollTop: distancia
		}, 1500);


	});
	
	
});