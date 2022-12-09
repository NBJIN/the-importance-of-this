//$('p').click(function() {
   // $(this).slideToggle('slow');
//})

$('button').mouseenter(function() {
    $(this).removeClass('makeRed').addClass('makeBlue');
});
$("button").mouseleave(function() {
    $(this).removeClass('makeBlue').addClass('makeRed');
});
