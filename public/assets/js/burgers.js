//Front-end code for the burger-sequelize


// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  ///////////////////////////////////////////////////////////
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");
    var isDevoured = true;

    var newDevouredState = {
      devoured : isDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log(`Burger with id = ${id} has been devoured.`);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  /////////////////////////////////////////////////////////
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim()      
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(result) {
        console.log("created new burger " + result);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //////////////////////////////////////////////////////////
  $(".clear-devoured").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var id = $(this).data("id");

    //Call API to delete all burgers with devoured = true
    $.ajax("/api/clear-devoured", 
    {
      type: "DELETE"
    }).then(
      function() {
        console.log("Deleted devoured burger.");
        // Reload the page to get the updated list
        location.reload();
      }
    ).fail (function(jqxhr, textStatus, errorThrown)  {
      alert("Error: " + textStatus + " : " + errorThrown) ;
    });
  });

});
