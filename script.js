// paralax

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/5 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2.5 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1 +'%)'
    });

    if ( wScroll > $('.portfolio').offset().top -250) {
        $('.portfolio .card').each(function(i) {
            setTimeout(function() {
                $('.portfolio .card').eq(i).addClass('muncul');
            }, 300 * (i+1));
        })
    }
});


// load about

$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan ').addClass('pMuncul');
});