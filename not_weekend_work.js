// var array = [["a", "b", "z"], ["c", "d"], ["e", "f"], ["g", "h", "i", "j"]];
// var finalArray = [];
// for (var i = 0; i < array.length; i++) {
//   var innerArray = array[i];
//   for (var n = 0; n < innerArray.length; n++) {
//     finalArray.push(innerArray[n]);
//   }
// }
// console.log(finalArray);
// ==========================
// var meals = [["breakfast", "pancakes with maple syrup"], ["lunch", "BLT"], ["dinner", "salmon with lemon rice"]];

// var mealsObject = {};
// for (var i = 0; i < meals.length; i++) {
//   var meal = meals[i];
//   mealsObject[meal[0]] = meal[1];
// }
// console.log(mealsObject);
// ==========================
function mutation(firstWord, secondWord) {
  var firstSplit = firstWord.split("");
  var secondSplit = secondWord.split("");
  var there = false;
  for (var i = 0; i < secondSplit.length; i++) {
    var charactor = secondSplit[i];
    for (var n = 0; n < firstSplit.length; n++) {
      if (charactor === firstSplit[n]) {
        there = true;
        break;
      }
    }
    if (there === false) {
      break;
    }
  }
  return there;
}

console.log(mutation("burly", "ruby"));    // true
console.log(mutation("burly", "python"));  // false