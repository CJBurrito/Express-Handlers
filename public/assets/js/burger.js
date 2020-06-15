$(document).ready(function() {
  $(".addBurger").submit(function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured: false
    };

    $.ajax("/api/burger/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    )
    .then(
      
    );
  });

  $(".changeButton")
});
