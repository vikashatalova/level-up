function dec__hr() {
    const hr = parseInt($('.booking__hr').html());
    if (hr !== 0) {
        $('.booking__hr').html(hr - 1);
        $('.booking__min').html(30);
        $('.booking__sec').html(59);
    } else {
        pass();
    }
}


function dec__min() {
    const min = parseInt($('.booking__min').html());
    if (min !== 0) {
        $('.booking__min').html(min - 1);
        $('.booking__sec').html(59);
    } else {
        dec__hr();
    }
}

$(document).ready(function() {
    const Update = function() {
        $('.booking__sec').each(function() {
            const count = parseInt($(this).html());
            if (count !== 0) {
                $(this).html(count - 1);
            } else {
                dec__min();
            };
        });
    };
    setInterval(Update, 1000);
});

// scroll


$('.scrollto').on( 'click', function(){ 
    let el = $(this);
    let dest = el.attr('href');
    if(dest !== undefined && dest !== '') { 
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top 
        }, 500 
        );
    }
    return false;
});

//slider

$(document).ready(function() {
    $('.reviews__slides').slick({
        infinite: true,
        slideToScroll: 1,
        arrows: false,
        dots: true,
        speed: 1000,
    });
})
