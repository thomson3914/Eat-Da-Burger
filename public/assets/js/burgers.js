$(function() {

    $(".deleteBurger").on("click", function(event) {
      var id = $(this).data("this.id");
  
      // Send the DELETE request.
      $.ajax("/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted id ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  
    // $("#createburger").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var newburger = {
    //     burger: $("#createburger [name=burger]").val().trim()
    //   };
  
    //   // Send the POST request.
    //   $.ajax("/burgers/", {
    //     type: "POST",
    //     data: newburger
    //   }).then(
    //     function() {
    //       console.log("created new burger");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    // $("#updateburger").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var id = $("[name=id]").val().trim();
  
    //   var updatedburger = {
    //     burger: $("#updateburger [name=burger]").val().trim()
    //   };
  
    //   // Send the PUT request.
    //   $.ajax("/burgers/" + id, {
    //     type: "PUT",
    //     data: updatedburger
    //   }).then(
    //     function() {
    //       console.log("updated id ", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
  })