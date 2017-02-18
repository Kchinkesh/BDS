$(document).ready(function(){
    
    //Smooth Scrolliing
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    $('.js-section-work').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('stiky');
        }else{
            $('nav').removeClass('stiky');
        }
    },{offset: '60px;'});
    
    $('.logo,.logo-trans').click(function(){
        $('html,body').animate({
            scrollTop: $('header').offset().top
        },1000);
    })
    
    //Mobile Navigation
    $('.js-nav-icon').click(function(){
       var nav=$('.main-nav');
        var icon=$('.js-nav-icon i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    });
    
    //back to top
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    
});
