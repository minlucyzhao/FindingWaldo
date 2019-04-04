// Log the index of the array where Waldo is found
function findWaldo(arr, found) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "Waldo") {
        found(i);   // execute callback
      }
    }
  }
  
  function actionWhenFound(waldoLocation) {
    console.log("Found Waldo at index " + waldoLocation + "!");
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
  