$( document ).ready(function() {

// Change color image when hovers
  $(function() {
    $(".clickable")
        .mouseover(function() {
            var src = "/images/cercle-arrow-lighter.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = "/images/cercle-arrow.png";
            $(this).attr("src", src);
        });
  });

  //Change picto when clicks (=when reveals text)

  $(function() {
    var clicked = false;
    $(".clickable").click(function() {
       clicked = !(clicked);
      console.log(clicked);

      if(clicked == true){
        var src = "/images/cercle-minus.png";
        $(this).attr("src", src);
      }

      if(clicked == false){
        var src = "/images/cercle-arrow.png";
        $(this).attr("src", src);
      }
    });

  });

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
