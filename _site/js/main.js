$(window).scroll(function (e) {

  let scrolled = $(window).scrollTop();
  let containerHeight = $(".banner").innerHeight() - 60;
  let nav = $(".navbar");
  let logo = $(".nav-logo");

  if (scrolled > containerHeight) {
    nav.addClass('js-fixed');
    logo.addClass('js-active');
  } else if (scrolled <= containerHeight) {
    nav.removeClass('js-fixed');
    logo.removeClass('js-active');
  }

});

$("#toggleCertificationModal").click(function () {
  $("#certificationModal").slideDown();
  $("body").css({ overflowY: 'hidden' });
});

$("#closeCertificationModal").click(function () {
  $("#certificationModal").slideUp();
  $("body").css({ overflowY: 'auto' });
});
