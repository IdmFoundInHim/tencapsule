//jQuery Function Set 1: Website Guidance

$(function () {
    $('#phase1').click(function () {
        $('#phase1').hide();
        $('#phase2').show();
    })
    $('#p2y').click(function () {
        $('#phase2').hide();
        $('#saved').show();
    })
    $('#p2n').click(function () {
        $('#phase2').hide();
        $('#search').show();
    })
    $('#p3y').click(function () {
        $('.phase3').hide();
        $('#wants').show();
    })
    $('.c1r').click(function () {
        $('#phase2').hide();
        $('.phase3').hide();
        $('.phase4').hide();
        $('#c1rec').show();
    })
    $('.c2r').click(function () {
        $('#phase2').hide();
        $('.phase3').hide();
        $('.phase4').hide();
        $('#c2rec').show();
    })
    $('.c3r').click(function () {
        $('#phase2').hide();
        $('.phase3').hide();
        $('.phase4').hide();
        $('#c3rec').show();
    })
    $('.rsr').click(function () {
        $('#phase2').hide();
        $('.phase3').hide();
        $('.phase4').hide();
        $('#rtsrec').show();
    })
})

//jQuery Function Set 2: NavBar
$(function () {
    $('#slogan, #intro, #query, #links, #disclaim').click( function () {
        $('#iSeriesDropdown').hide();
    })
    $(document).click(function(event) { 
        if(!$(event.target).closest('#titlebar').length) {
            if($('#titlebar').is(":visible")) {
                    $('#iSeriesDropdown').hide();
            }
        }        
    });
    $('#iSeriesButton').click(function () {
        $('#iSeriesDropdown').show();
    })
    /*Needs Revised
    $(document).width.change(function () {
        $('#iSeriesDropdown').hide();
        if($('#titlemobile').is(":visible")) {
            $('.showMD').hide();
            $('.hideMD').show();
        }
    })*/
})

$(function () {
    $(document).click(function(event) { 
        if(!$(event.target).closest('#titlemobile').length) {
            if($('#titlemobile').is(":visible")) {
                $('.showMD').hide();
                $('.hideMD').show();
            }
        }        
    });
    $('#iMobileButton').click(function () {
        $('.showMD').show();
        $('.hideMD').hide();
    })
})

//jQuery Function Set 3: Carousel
var contOut = 'iSCont';
var contIn = 'sSCont';

setInterval(cycle, 5000);

function cycle () {
    $('#' + contOut).fadeOut();
    $('#' + contIn).fadeIn();
    var cond = contIn
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