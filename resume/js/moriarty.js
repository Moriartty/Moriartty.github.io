
(function(){
	template.helper('string2Lower',string2Lower);
	template.helper('string2Upper',string2Upper);
	function string2Lower(input){
	    return input?input.toLowerCase():'';
	}
	function string2Upper(input){
	    return input?input.toUpperCase():'';
	}

	/*
	加载整个page的步骤
	*/
	loadPage();
	function loadPage(){
		$('header').html(template('tempHeader',headerData));
		$('section#about').html(template('tempAboutSection',aboutSectionData));
		$('section#work').html(template('tempWorkSection',workSectionData)).find('.carousel').carousel('cycle');
		$('section#honor').html(template('tempHonorSection',{honorSectionList:honorSectionData}));

		let href = location.href.split('#')[1]?location.href.split('#')[1]:"";
		if(href.indexOf('work')>=0)
			toggleWorkSection($('.work-show-nav').find('a[href=#'+href+']'),href);
		else{
			let $target = $($('.work-show-nav').children('a').get(0));
			href = $target.prop('href').split('#')[1];
			toggleWorkSection($target,href);
		}
	}
	/*
	根据屏幕尺寸重新定义about区域中间圆形分割的大小
	*/
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
	function toggleWorkSection($this,href){
			$this.addClass('active').siblings('a').removeClass('active');
			var $targetSection = $this.closest('.work-show').find('section#'+href);
			$targetSection.addClass('active').siblings('section').removeClass('active');
	}
	$(document)
		.on('click','.out-link a',function(e){
			e.stopPropagation();
			let qrcode = $(this).attr('data-code');
			if(qrcode&&qrcode!==''){
				$('.modalQrcode').modal({width:"11rem",height:"11rem"}).find('.modal-content').html(template('tempQrcode',{qrcode}));
			}
			else if($(this).attr('data-content'))
				$(this).popover('show');
		})
		.on('click','.work-show-nav a',function(e){
			e.stopPropagation();
			var href = $(this).prop('href').split('#')[1];
			toggleWorkSection($(this),href);
		})
})()