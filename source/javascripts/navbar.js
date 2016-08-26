  $( document ).ready(function() {

    // Scroll to specific point in page

    $("#navbar_btn_process").on("click", function(event) {
      $('html, body').animate({
          scrollTop: $("#title_process").offset().top
      }, 1000);
    });

    // $( "p" ).click(function() {
    //   $( this ).slideUp();
    // });
  });
