$(document).on("click", ".nav-bar-toggle", function() {
  $(".sidebar").toggleClass("open");
})
$(document).on("click", ".hide-sidebar", function() {
  $(".sidebar").removeClass("open");
})
