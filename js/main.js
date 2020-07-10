$(function(){
    // Adjust slider height
    var windowH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
        $('.slider, .carousel-item, .carousel-item img').height(windowH - (upperH + navH));
        
        // Add class active
        $('.featured-work ul li').on('click', function(){
            $(this).addClass('active').siblings().removeClass('active');
            if($(this).data('class') === 'all'){
                $('.shuffle-img .col-sm').css('opacity', '1');
            } else {
                $('.shuffle-img .col-sm').css('opacity', '.07');
                $($(this).data('class')).css('opacity', '1');
            }
        });
        
        // fit head text
        $('.head').fitText(1.4);
});