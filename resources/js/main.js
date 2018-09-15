$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: true
  });

  $('#tab-container').easytabs({
    animate			: true,
    updateHash		: true,
    transitionIn	: 'slideDown',
    transitionOut	: 'slideUp',
    animationSpeed	: 600,
    
    });

});
