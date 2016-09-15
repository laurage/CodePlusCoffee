// The option arrow doesn't transform into a minus when mouseout.

$( document ).ready(function() {
  var clicked = false;
  changeColorOnHover("arrow");
  changeSymbolOnClick();

  function changeSymbolOnClick()  {


    $(".process-essential").click(function() {
       clicked = !(clicked);

      if(clicked == true){
        var src = "/images/cercle-minus-darker.png";
        $(this).attr("src", src);
        changeColorOnHover("minus");
      }

      if(clicked == false){
        var src = "/images/cercle-arrow-darker.png";
        $(this).attr("src", src);
        changeColorOnHover("arrow");
      }

    });

    // $(".process-option").click(function() {
    //    clicked = !(clicked);

    //   if(clicked == true){
    //     var src = "/images/cercle-minus.png";
    //     $(this).attr("src", src);
    //     changeColorOnHover("minus");

    //   }

    //   if(clicked == false){
    //     var src = "/images/cercle-arrow.png";
    //     $(this).attr("src", src);
    //     changeColorOnHover("arrow");

    //   }
    //   console.log(clicked);
    // });

  };

  function changeColorOnHover(symbol) {
    $(".process-essential")
        .mouseover(function() {
            var src = "/images/cercle-"+symbol+"-darker.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = "/images/cercle-"+symbol+".png";
            $(this).attr("src", src);
        });


    // $(".process-option")
    //     .mouseover(function() {
    //         var src = "/images/cercle-"+symbol+".png";
    //         $(this).attr("src", src);
    //     })
    //     .mouseout(function() {
    //         var src = "/images/cercle-"+symbol+"-lighter.png";
    //         $(this).attr("src", src);
    //     });
  };



//JS version:
  // var clicked = false;

  // function changeIcon() {
  //   clicked = !(clicked);
  //   console.log(clicked);
  // }

  // // Function to add event listener to clickable-element
  // var clickable_element = document.getElementById("clickable-element");
  // clickable_element.addEventListener("click", changeIcon, true);

});
