
(function(){
	loadPage();
	function loadPage(){
		$('header').html(template('tempHeader',headerData));
		console.log(aboutSectionData);
		$('section#about').html(template('tempAboutSection',aboutSectionData));
	}
	resizeAboutDivide();
	function resizeAboutDivide(){
		if($(window).width()<700){
			$('.divide').hide();
			$('.intro,.skills').css('width','43%');
		}
		else{
			$('.divide .out').css('width',$('.divide').width()-5).css('height',$('.divide').width()-5);
			$('.divide .in').css('width',$('.divide').width()*0.8).css('height',$('.divide').width()*0.8);
		}
	}
})()