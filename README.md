# JS Project - sort
* [docs on MDN sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## REPL MDN
```
const arr = [1, 2, 110, 3, 4, 330]

const sortedArr = arr.sort();

console.log(sortedArr) // [1, 110, 2, 3, 330, 4]
// why not in order?
// "built upon converting the elements into strings, then comparing their sequences"
// when using .sort() you have to use a compare function
// firstEl for comparing and secondEl for comparing
```

## REPL with sort and compare function (ascending order)
```
const arr = [1, 2, 110, 3, 4, 330]

const sortedArr = arr.sort(function(a, b) {
  return a - b;
});

console.log(sortedArr) // [1, 2, 3, 4, 110, 330]
```

## REPL with sort and compare function (decending order)
```
const arr = [1, 2, 110, 3, 4, 330]

const sortedArr = arr.sort(function(a, b) {
  return b - a;
});

console.log(sortedArr); // [330, 110, 4, 3, 2, 1]
```

## REPL with sort compare and arrow function
```
const arr = [1, 2, 110, 3, 4, 330]

const sortedArr = arr.sort((a, b) => a - b);

console.log(sortedArr)
```

## Add sort function and event listener
```
// Sort users by richest
function sortByRichest() {
  // b.money b is an object (not just a single number)
  // b - a because want sort descending (to sort by richest first)
  data.sort((a, b) => b.money - a.money);

  updateDOM();
}
// Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
```
