$( document ).ready(function() {
  // btn logo
  $(".js-navbar-btn-logo").click(function(event) {
    console.log("click on js-navbar-btn-logo");

    // check where you are
    var pathname = window.location.pathname;
    console.log(pathname);

    // case where you aren't on index page
    if((pathname != '/')&&(pathname != '/index.html')&&(pathname != '/en/index.html')){
      console.log("on est dans le if");
      // you are on /en legal notice, so send you to /en/index page before
      if(pathname == '/en/legalnotice.html'){
        console.log("mettre l'action d'aller à l'index en");
        window.location.pathname = '/en/index.html';
      }
      // you are on /fr legal notice, so send you to /fr/index page before
      else {
        console.log("mettre l'action d'aller à l'index fr");
        window.location.pathname = '/index.html';
      }
    }

    // go to the good place in index
    $('html, body').animate({
      scrollTop: $(".head_of_landingpage").offset().top
       - 100}, 1000);
  });

  // btn solution
  $(".navbar_btn_solution").click(function(event) {
    console.log("click on navbar_btn_solution");


    // check where you are
    var pathname = window.location.pathname;
    console.log(pathname);

    // case where you aren't on index page
    if((pathname != '/')&&(pathname != '/index.html')&&(pathname != '/en/index.html')){
      console.log("on est dans le if");
      // you are on /en legal notice, so send you to /en/index page before
      if(pathname == '/en/legalnotice.html'){
        console.log("mettre l'action d'aller à l'index en");
        window.location.pathname = '/en/index.html';
      }
      // you are on /fr legal notice, so send you to /fr/index page before
      else {
        console.log("mettre l'action d'aller à l'index fr");
        window.location.pathname = '/index.html';
      }
    }

    // go to the good place in index
    $('html, body').animate({
      scrollTop: $("#title_solution").offset().top-50
      }, 1000);
  });

  // btn process
  $(".navbar_btn_process").click(function(event) {
    console.log("click on navbar_btn_process");
    $('html, body').animate({
      scrollTop: $("#title_process").offset().top-50
      }, 1000);
  });


  // btn philo
  $(".navbar_btn_philo").click(function(event) {
    console.log("click on navbar_btn_philo");
    $('html, body').animate({
      scrollTop: $("#title_philo").offset().top-50
      }, 1000);
  });

  // btn about (TEAM)
  $(".navbar_btn_about").click(function(event) {
    console.log("click on navbar_btn_about");
    $('html, body').animate({
      scrollTop: $("#title_about").offset().top-50
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
