$(document).ready(function(){
  $("#menu, #bg").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
    top = $(id).offset().top;
    $("body, html").animate({scrollTop: top}, 1500);
  });
});