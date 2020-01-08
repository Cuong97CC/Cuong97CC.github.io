$(document).on("click", ".nav-bar-toggle", function() {
  $(".sidebar").toggleClass("open");
})

$(document).on("click", ".hide-sidebar", function() {
  $(".sidebar").removeClass("open");
})

$(document).on("click", ".section-name", function() {
  var content = $(this).closest(".section").find(".section-content");
  if ($(content).is(":visible")) $(content).slideUp();
  else $(content).slideDown();
})

$(document).on("click", ".nav-item", function() {
  if ($(this).data("target")) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $($(this).data("target")).offset().top
    }, 500)
  }
})

$(document).on("click", ".sidebar-item", function() {
  $(".sidebar").removeClass("open");
  if ($(this).data("target")) {
    $([document.documentElement, document.body]).animate({
      scrollTop: $($(this).data("target")).offset().top
    }, 500)
  }
})
