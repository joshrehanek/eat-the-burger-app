$(function() {
    $(".devoured").on("click", function(event) {
        console.log("clicked")
      let id = $(this).data("id");
      let eatBurger = $(this).data("devoured");
  
      var burgerDevoured = {
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
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#newBurger").val().trim()
      };
  
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
  