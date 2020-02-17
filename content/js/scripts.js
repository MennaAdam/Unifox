$(function () {

//Smooth Scroll
$('.navbar-light .navbar-nav .nav-link').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
});

    //Counter
    $('.count-span').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 8000,
            easing: 'swing',
            step: function () {
                $(this).text(Math.ceil(this.Counter));
            }
        });
    });

    //Trigger Mixitup

    var mixer = mixitup('#container');

    // Adjust shuffle
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    $(window).scroll(function() {
        //scroll to top button
        var scrollToTop = $('.scroll-to-top');
        if ($(window).scrollTop() >= 1000) {
            if (scrollToTop.is(':hidden')) {
                scrollToTop.fadeIn(400);
            }
    
        } else {
            scrollToTop.fadeOut(400);
        }
    });
    

    $('.scroll-to-top').click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    
    
    });

});