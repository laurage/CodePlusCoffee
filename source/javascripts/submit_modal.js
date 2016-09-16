$( document ).ready(function() {

  $(function () {
    $('body').on('click', '.btn_submit', function (e) {
        $('#myModal').modal('hide');
        document.getElementById("contact_form").submit();
    });
  });

});
