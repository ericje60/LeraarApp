laadcount = 2; // 2,5 seconde laden

$(function() {
	for (var i=0;i<laadcount;i++)
	{ 
			laden(i);	
	}
	
	$( "#login-button" ).on( "click", function() {
		quizShow();
	});
});



function laden(x) {
	$('#laden h3')
			.delay(250)
			.queue(function() {
		laadwaarde = $(this).html();
		$(this).append(".").dequeue();
	})
			.delay(250)
			.queue(function() {
		$(this).append(".").dequeue();
	})
			.delay(250)
			.queue(function() {
		$(this).append(".").dequeue();
	})
			.delay(500)
			.queue(function() {
		$(this).html(laadwaarde).dequeue();
		if(x == (laadcount-1)){
			loginShow();
		}
	});
}

function loginShow(){
	$('#splashscreen').hide();
	$('#login').show();	
}

function quizShow(){
	gebnaam = $('#gebruiker').val();
	ww = $('#wachtwoord').val();
	console.log(gebnaam+" - "+ww);
	$('#naam-val').hide();
	$('#wachtwoord-val').hide();
	if((gebnaam != "")&&(ww != "")){
		$('#login').hide();
		$('#quiz').show();	
	}else{
		if(gebnaam == ""){
			$('#naam-val').show();	
		}
		if(ww == ""){
			$('#wachtwoord-val').show();		
		}
	}
		
}