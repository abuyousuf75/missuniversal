$(function(){


// Add Bg

$(window).scroll(function(){

    var scrolling =$(this).scrollTop();
    if(scrolling>200){
        
        $('.navbar').addClass('nav-bg');
    }else{
        $('.navbar').removeClass('nav-bg')
    }

    if(scrolling > 200){
        $('.btm-top').fadeIn(500);
    }
    else {
        $('.btm-top').fadeOut(500);
    }


});

// Bottom-Top

$('.btm-top').click(function(){

    $('body, html').animate({scrollTop:0},1000);

});


// Side Bar


$('.side-click').click(function(){
    $('.sidebar').toggleClass('sideopen')

    $('.side-click').toggleClass('slide-click-2')
    $('.side-click').toggleClass('fa-bars')

});



    // counter
$('.counter').counterUp({
    delay: 10,
    time: 2500,
  });

// wow js

new WOW().init();

//Smoth Scroll 
var html_body = $('html, body');
$('.nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top -106
            }, 1500);
            return false;
        }
    }
});






});