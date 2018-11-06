// $('.nav-item').click(function() {
//     var target = $(this).html();

// console.log(target);

//     if (target == 'APPLE') {
//     $('.apple').removeClass('hide');
//     } else if (target == 'NIKE') {
//     $('.nike').removeClass('hide');
//     } else if (target == 'DISNEY') {
//     $('.disney').removeClass('hide');
//     } else if (target == 'VOGUE') {
//     $('.vogue').removeClass('hide');
//     }
// });

$('.nav-item').click(function() {
    var img = $(this).data('img');
    var classname = $(this).data('classname');
    var img_to_show = '<div class= "logo ' + classname + '"> <img src="assets/img/' + img + '" /> </div>';

    $('.content').prepend(img_to_show);

});