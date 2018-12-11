$('.nav-item').click(function() {
   var button_name = $(this).data('button');

   $('.about-text').addClass('hide');
   $('.nav-item').removeClass('active');
   $('.content').attr('class', 'column content');
   $(this).addClass('active');
   $('.content').addClass(button_name);
   
if (button_name == 'breakrem') {
    $('.waking').removeClass('hide');
    $('audio')[0].play();
} else if (button_name == 'about') {
    $('.about-text').removeClass('hide');
   }

});

$('.close').click(function() {
    $('.waking').addClass('hide');
    $('audio')[0].pause();
    $('.nav-item').removeClass('active');
});

setTimeout(function(){
    $('.waking').removeClass('hide');
}, 3000);

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if(!isChrome){
  $('#iframeAudio').remove()
}
else{
 $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
}