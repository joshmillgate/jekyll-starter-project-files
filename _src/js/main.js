$(document).ready(function(){

  $('#mobnavicon').click(function(){
    $(this).toggleClass('is-active');
  });

  $('#mobnavicon').click(function(){
    $('.nav').toggleClass('responsive');
    $('.nav').addClass('fadein');
  });
});
