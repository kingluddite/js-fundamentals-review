# JS Project - filter()
* [filter mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* Allows us to filter things out
* We want to filter to see only millionaires

## Part 1 - REPL
```
const arr = [20, 23, 39, 1, 3, 100, 200];

const over30 = arr.filter(function(item) {
  return item > 30;
})

console.log(over30); // [39, 100, 200]
```

## Part 2 - filter only millionaires
```
// Filter only millionaires
function showMillionaires() {
  data = data.filter(user => user.money > 1000000);

  updateDOM();
}
// Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
```
