// Log the index of the array where Waldo is found
function findWaldo(arr, found) {
    arr.forEach(function(element, index) {
      if (element === "Waldo") {
        found(index);   // execute callback
      }
    });
  }
  
  function actionWhenFound(waldoLocation) {
    console.log("Found Waldo at index " + waldoLocation + "!");
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
  