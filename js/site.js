$( document ).ready(function() {
    // $('.websites').jScrollPane();

    $('.btn-mobile').on('click',function(){
        $('html, body').animate({scrollTop: $(".section-mobile").offset().top}, 300);
    });

    $('.btn-games').on('click',function(){
        $('html, body').animate({scrollTop: $(".section-games").offset().top}, 300);
    });

    $('.btn-web').on('click',function(){
        $('html, body').animate({scrollTop: $(".section-web").offset().top}, 300);
    });

    setTimeout(function(){
        $('.corner-bottom').animate({left: 0, bottom: 0}, 1000);
        $('.corner-top').animate({right: 0, top: 0}, 1000);

    },250);

    setTimeout(function(){
        $('#en').animate({right: 0}, 500);
    },600);

    setTimeout(function(){
        $('#lv').animate({right: 0}, 500);
    },750);
});