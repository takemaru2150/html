import $ from 'jquery';
$(function(){
    $('.gnav_trigger').on('click', function() {
        $(this).toggleClass('_active');
        $('.gnav_sp').toggleClass('_active');
    })
})
