$( document ).ready(function() {
  // btn logo
  $(".navbar_btn_logo").click(function(event) {
    console.log("click on navbar_btn_logo");
    $('html, body').animate({
      scrollTop: $(".head_of_landingpage").offset().top
       - 100}, 1000);
  });

  // btn solution
  $(".navbar_btn_solution").click(function(event) {
    console.log("click on navbar_btn_solution");
    $('html, body').animate({
      scrollTop: $("#title_solution").offset().top
      }, 1000);
  });

  // btn process
  $(".navbar_btn_process").click(function(event) {
    console.log("click on navbar_btn_process");
    $('html, body').animate({
      scrollTop: $("#title_process").offset().top
      }, 1000);
  });

  // btn philo
  $(".navbar_btn_philo").click(function(event) {
    console.log("click on navbar_btn_philo");
    $('html, body').animate({
      scrollTop: $("#title_philo").offset().top
      }, 1000);
  });

  // btn about (TEAM)
  $(".navbar_btn_about").click(function(event) {
    console.log("click on navbar_btn_about");
    $('html, body').animate({
      scrollTop: $("#title_about").offset().top
      }, 1000);
  });

  // btn contact
  $(".navbar_btn_contact_test").click(function(event) {
    console.log("click on navbar_btn_contact_test");
    $('html, body').animate({
      scrollTop: $("#title_contact").offset().top
      }, 1000);
  });
});
