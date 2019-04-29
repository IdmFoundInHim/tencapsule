// Convenience Functions
function flexshow(selector) {
    if ($(selector).is(':visible')) {
        $(selector).css('display', 'flex');
    }
}

$(function () {
    $(document).click(function(event) { 
        if(!$(event.target).closest('#header').length) {
            if($(window).width() < 600 && $('#primary').is(':visible')) {
                $('#primary').slideUp('fast');
                $('.secondary').slideUp('fast');
            }
            else if($('.secondary').is(':visible')){
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

$(window).on('scroll touchmove', function () {
    $('header').toggleClass('following', $(document).scrollTop() > 0);
});