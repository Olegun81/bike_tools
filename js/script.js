'use strict';
(function(){
	 // $(document).ready(function(){
      $('.slick').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
        autoplay:true,
        adaptiveHeight:true,
        responsive: [
        {
        	breakpoint:775,
        	settings:{
        		slidesToShow: 1,
        		slidesToScroll:1
        		// dots: false	
        	}
        }
        ]
  });
      $('a[href^="#"]').on('click', function(){
        var scroll =$(this).attr('href');
        $('section').first().removeClass('navi__open');
        $('html, body').animate({
          scrollTop:$(scroll).offset().top
        },1200)
      });

      $(window).scroll(function(){
        if ($(window).scrollTop() > 90) {
        $('section').first().addClass('sticky');
    }
    else {
       $('section').first().removeClass('sticky');
    }
});
      $('.header__toggle').on('change' , function(){
        if( $('section').first().hasClass('navi__open')){
          $('section').first().removeClass('navi__open');
        } else {
          $('section').first().addClass('navi__open');
        }
      });


})();