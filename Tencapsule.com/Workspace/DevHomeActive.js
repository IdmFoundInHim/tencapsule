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
    $('#iSeriesButton').click(function () {
        $('#iSeriesDropdown').show();
    })
})