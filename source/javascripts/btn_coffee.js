$( document ).ready(function() {

  // Scroll to specific point in page

    $("#landingpage-btn").on("click", function(event) {
      console.log("clicked!");
      $('html, body').animate({
          scrollTop: $("#title_solution").offset().top
      }, 1000);
    });



  });

