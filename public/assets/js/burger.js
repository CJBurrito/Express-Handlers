$(document).ready(function () {
  $(".addBurger").submit(function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured: false
    };

    $.ajax("/api/burger/", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        location.reload();
      }
    )
  });

  $(".changeButton").on("click", function () {
    var id = $(this).data("id")
    console.log("Devour this ID:" + id);

    $.ajax("/api/burger/" + id, {
      type: "PUT",
    }).then(function() {
      console.log("Devoured this ID:" + id);

      location.reload()
    })
  })
});
