var laadcount = 2; // 2,5 seconde laden
var disableScroll = true; // disable scrollen op de iPad

$(function() {
	for (var i=0;i<laadcount;i++)
	{ 
			laden(i);	
	}
	
	$( "#login-button" ).on( "click", function() {
		quizShow();
	});
	
	$( "#gebruiker" ).on( "focus", function() {
		hideVal();
		
	});
	
	$( "#wachtwoord" ).on( "focus", function() {
		hideVal();
	});
});

/* ----- Laadpuntjes weergeven ----- */

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

/* ----- Log in pagina weergeven ----- */

function loginShow(){
	disableScrolling();
	$('#header').hide();
	$('#splashscreen').remove();
	$('#login').show();	
}

/* ----- Quiz pagina weergeven ----- */

function quizShow(){
	gebnaam = $('#gebruiker').val();
	ww = $('#wachtwoord').val();
	console.log(gebnaam+" - "+ww);
	$('#naam-val').hide();
	$('#wachtwoord-val').hide();
	if((gebnaam != "")&&(ww != "")){
		$('#login').hide();
		$('#quiz').show();
		$('#header').show();
		enableScrolling();	
	}else{
		if(gebnaam == ""){
			$('#naam-val').show();	
		}
		if(ww == ""){
			$('#wachtwoord-val').show();		
		}
	}
		
}

/* ----- Validatie items verbergen ----- */

function hideVal(){
	$('#naam-val').hide();
	$('#wachtwoord-val').hide();
}

/* ----- Disable/Enable scrolling ----- */

function disableScrolling() {
    disableScroll = true;
}


function enableScrolling() {
    disableScroll = false;
}

document.ontouchmove = function(e){
   if(disableScroll){
     e.preventDefault();
   } 
}