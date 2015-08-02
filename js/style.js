$(function(){

	if($('.homebg').length>0){
		$('.homebg').height($(window).height()).backstretch("img/首图3.jpg");
		$(window).resize(function() {
			setTimeout(function(){$('.homebg').backstretch("img/首图3.jpg");},500);
		});
	}


	//主页幻灯片
	if($('.fullscreenbanner').length>0){
	 	var revapi;
       revapi = jQuery('.fullscreenbanner').revolution(
        {
            delay:5000,
            startwidth:1170,
            startheight:500,
            hideThumbs:10,
            fullWidth:"on",
            fullScreen:"on",
            hideCaptionAtLimit: "",
            dottedOverlay:"twoxtwo",
            navigationStyle:"preview4",
            fullScreenOffsetContainer: ""
        });		
	}
	//导航栏鼠标移进移出
	var nav_index=$('.nav-item-active').index();

	$('.nav-item').hover(function(){
		$(this).css({'background-color':'#024427'});
		$('.menu ul').children('li').eq(nav_index).removeClass('nav-item-active');
	},function(){
		$(this).css({'background-color':'transparent'});
	});

	$('.menu ul').hover(function(){

	},function(){
		$(this).children('li').eq(nav_index).addClass('nav-item-active');
	});


	//图片轮播	
	if($('#owl-demo').length>0){
		$("#owl-demo").owlCarousel({
	 
	      autoPlay: 2000, //Set AutoPlay to 3 seconds
	 
	      items : 4,
	      itemsDesktop : [1199,3],
	      itemsDesktopSmall : [979,3]
	 
	  });		
	}
	if($('#owl-demo-product').length>0){
		$("#owl-demo-product").owlCarousel({
	 
	      autoPlay: 2000, //Set AutoPlay to 3 seconds
	 
	      items : 3,
	      itemsDesktop : [1199,3],
	      itemsDesktopSmall : [979,3]
	 
	  });		
	}

	//easing.js	
	
	$().UItoTop({ easingType: 'easeOutQuart' });
	//单页滚动监听
	if($('.recruit-main').length>0){
		$('.recruit-main').onepage_scroll({
			sectionContainer: '.recruit-page'
		});
	}else{
		
	}
	if($('.popup-with-zoom-anim').length>0){
		$('.popup-with-zoom-anim').magnificPopup({
			type: 'inline',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in'
		});	
	}
	$('.open-img').click(function(){
		var img=$(this).attr('src');
		var top=$(document).scrollTop();	
		$('.body').append('<div id="masklayer" style="display:none;z-index:1000;text-align:center; background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;">'+
			'<div style="position:absolute;margin-top:100px;left:50%;margin-left:-250px">'+		
			'<img class="masklayer-img" style=" border:10px solid #fff; width:500px;" />'+
			'<span id="mask-span" class="glyphicon glyphicon-remove" style="cursor:pointer; font-size:30px;line-height:50px;text-align:center; display:block;position:relative; background-color:rgba(0,0,0,0.4);top:0px;left:450px;width:50px;height:50px;"></span>'+
			'</div>'+'</div>');
		$('#masklayer').css('top',top);
		$('.masklayer-img').attr('src',img);
		$('#masklayer').fadeIn();
		$('.body').css('overflow','hidden');
	});


	$('.team-img div').click(function(){
		var img=$(this).parent().find('img').attr('src');
		var top=$(document).scrollTop();
		$('.body').append('<div id="masklayer" style="display:none;z-index:1000;text-align:center; background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;">'+
			'<div style="position:absolute;margin-top:100px;left:50%;margin-left:-250px">'+		
			'<img class="masklayer-img" style=" border:10px solid #fff; width:500px;" />'+
			'<span id="mask-span" class="glyphicon glyphicon-remove" style="cursor:pointer; font-size:30px;line-height:50px;text-align:center; display:block;position:relative; background-color:rgba(0,0,0,0.4);top:0px;left:450px;width:50px;height:50px;"></span>'+
			'</div>'+'</div>');
		$('#masklayer').css('top',top);
		$('.masklayer-img').attr('src',img);
		$('#masklayer').fadeIn();
		$('.body').css('overflow','hidden');			
	});

	$('.body').on('click','#mask-span',function(){
		$('#masklayer').remove();
		$('.body').css('overflow','auto');
	});
			
});
