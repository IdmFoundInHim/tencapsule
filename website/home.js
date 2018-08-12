// jQuery CSS Initializer
$(function () {
    $('body').removeClass('nojs');
    $('.hideifjs').hide();
    $('.showifjs').show();
});

// Convenience Functions
function flexshow(selector) {
    if ($(selector).is(':visible')) {
        $(selector).css('display', 'flex');
    }
}


//jQuery Function Set 1: Website Guidance

$(function () {
    function toRec(){
        $('#phase2').hide();
        $('.phase3').hide();
        $('.phase4').hide();
        $($('#rec_storage').text()).show();
    }
    $('#phase1').click(function () {
        $('#phase1').hide();
        if ($('#rec_storage').text() == 'NONE'){
            $('#phase2').show();  
        }else{
            toRec($('#rec_storage').text());
        }
        $('#query-box').show();
        $('#curtain').show();
    });
    $('#p2y').click(function () {
        $('#phase2').hide();
        $('#saved').show();
    });
    $('#p2n').click(function () {
        $('#phase2').hide();
        $('#search').show();
    });
    $('#p3y').click(function () {
        $('.phase3').hide();
        $('#wants').show();
    });
    $('.c1r').click(function () {
        $('#rec_storage').text('#c1rec');
        toRec($('#rec_storage').text());
    });
    $('.c2r').click(function () {
        $('#rec_storage').text('#c2rec');
        toRec($('#rec_storage').text());
    });
    $('.c3r').click(function () {
        $('#rec_storage').text('#c3rec');
        toRec($('#rec_storage').text());
    });
    $('.rsr').click(function () {
        $('#rec_storage').text('#rtsrec');
        toRec($('#rec_storage').text());
    });
    $('#close-button').click(function () {
        $('#query-box').hide();
        $('#phase1').show();
        $('#curtain').hide();
    });
});

//jQuery Function Set 2: NavBar
$(function () {
    /*$('#slogan, #intro, #query, #links, #disclaim').click( function () {
        $('#iSeriesDropdown').hide();
    })*/
    /*Needs Revised
    $(document).width.change(function () {
        $('#iSeriesDropdown').hide();
        if($('#titlemobile').is(":visible")) {
            $('.showMD').hide();
            $('.hideMD').show();
        }
    })*/
});

$(function () {
    $(document).click(function(event) { 
        if(!$(event.target).closest('#titlemobile').length) {
            if($('#titlemobile').is(':visible')) {
                $('.showMD').hide();
                $('.hideMD').show();
            }
        }        
    });
    $('#iMobileButton').click(function () {
        $('.showMD').show();
        $('.hideMD').hide();
    });
});

// New NavBar

$(function () {
    $(document).click(function(event) { 
        if(!$(event.target).closest('#header').length &&
           $(window).width() < 600) {
            if($('#primary').is(':visible')) {
                $('#primary').slideUp('fast');
                $('.secondary').slideUp('fast');
            }
        }        
    });
    $('#Ilink').click(function() {
        $('#secondaryI').slideToggle('fast');
        flexshow('#secondaryI');
        return false;
    });
    $('#primary-show').click(function() {
        $('#primary').slideToggle('fast');
        flexshow('#primary');
        if ($('#primary').is(':visible')) {
            $('.secondary').slideUp('fast');
        }
    });
    $( window ).resize(function() {
        if ($(window).width() > 642){
            $('#primary').show();
            flexshow('#primary');
        }
        else{
            $('#primary').hide();
        }
    });
});
//jQuery Function Set 3: Carousel
$(function () {
    var contOut = 'iSCont';
    var contIn = 'sSCont';

    function cycle () {
        $('#' + contOut).fadeOut();
        $('#' + contIn).fadeIn();
        var cond = contIn;
        if (cond =='iSCont'){
            contOut = 'iSCont';
            contIn = 'sSCont';
        } else if (cond == 'sSCont'){
            contOut = 'sSCont';
            contIn = 'pSCont';
        } else {
            contOut = 'pSCont';
            contIn = 'iSCont';
        }
    }

    setInterval(cycle, 5000);
});
