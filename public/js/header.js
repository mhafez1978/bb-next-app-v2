$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".header").addClass("header-scrolled");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $(".header").removeClass("header-scrolled");
    }
  });
});
