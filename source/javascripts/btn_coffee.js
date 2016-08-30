$( document ).ready(function() {

  // Scroll to specific point in page

    $("#landinpage-btn").on("click", function(event) {
      $('html, body').animate({
          scrollTop: $("#title_solution").offset().top
      }, 1000);
    });

  });

