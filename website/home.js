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
        $('#query-box > div:not(.interrupt)').hide();
        $('#phase1').show();
        $('#curtain').hide();
    });
    $('#reset-button').click(function () {
        $('#query-box > div:not(.interrupt)').hide();
        $('#phase2').show();
        $('#rec_storage').text('NONE');
    });

});

//jQuery Function Set 2: Carousel
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
