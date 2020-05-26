# JS Project - Reduce
* Aggregate every users's money
* [docs on reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value
    - **note** We are not returning an array we are returning a single value where we want it to be the total

## Part 2 - REPL
```
const arr = [1,2,3,4,5];

// 0 is "start value"
// acc is "accumulator"
const total = arr.reduce((acc, num) => (acc + num), 0);

console.log(total); // 15
```

## Part 3 - Calculate wealth
```
// Calculate the total wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  console.log(wealth);
}
// Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
```

## Part 4 - Format Money
```
// Calculate the total wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  console.log(formatMoney(wealth));
}
```

## Part 5 - Add wealth to UI using DOM
```
// Calculate the total wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
  // add to DOM
  main.appendChild(wealthEl);
}
```
