$(window).scroll(function() {
  var scroll = $(window).scrollTop();
    if(scroll > 100){
      $('.header-container').addClass('active');
    }
    else{
      $('.header-container').removeClass('active');
    }
});
