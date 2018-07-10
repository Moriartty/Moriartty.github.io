
(function(){
	loadPage();
	function loadPage(){
		$('header').html(template('tempHeader',headerData));
		console.log(aboutSectionData);
		$('section#about').html(template('tempAboutSection',aboutSectionData));
	}
	// function hashChanged(hashObj){
	// 	let oldHash = hashObj.oldURL.split('#')[1];
	// 	let newHash = hashObj.newURL.split('#')[1];
	// 	$('#'+newHash).show().siblings('section').hide();
	// }
	// window.onhashchange = hashChanged;

	 console.log($(window).width())
})()