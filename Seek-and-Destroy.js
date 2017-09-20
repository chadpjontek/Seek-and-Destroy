// Removes all elements from an array (1st arg) that are of the same value as the subsequent args.
function destroyer(arr /*, arg2, ... */) {
  //create array from arguments skipping first
  var args = Array.from(arguments).slice(1);
  //loop through argArr and filter out results from arr
  for (var j = 0; j < args.length; j++) {
    arr = arr.filter(function(val){
      return val !== args[j];
    });
  }
  return arr; 
}
// examples
destroyer([1, 2, 3, 1, 2, 3], 2, 3); // returns [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // returns [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // returns [1].
destroyer([2, 3, 2, 3], 2, 3); // returns [].
destroyer(["tree", "hamburger", 53], "tree", 53); // returns ["hamburger"].