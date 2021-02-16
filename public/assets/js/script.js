$(function() {
    $(".devoured").on("click", function(event) {
        console.log("clicked")
      const id = $(this).data("id");
      const eatBurger = $(this).data("devoured");
  
      const burgerDevoured = {
        devoured: eatBurger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerDevoured
      }).then(
        function() {
          console.log("changed to", eatBurger );
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".createBurger").on("click", function(event) {
        console.log("clicked");
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
        devoured: 0
      };
      console.log(newBurger);
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log(`you made a new burger ${newBurger}` );
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  