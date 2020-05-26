# JS Project - Map and sort
## Part 1 - Map
* REPL
* [docs map array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* Add the following code to MDN REPL

```
const arr = [1,2,3,4,5];

const arr2 = arr.map(item => {
  return `Number: ${item}`;
});

console.log(arr2)
```
* Click `Run`
* `> Array ["Number: 1", "Number: 2", "Number: 3", "Number: 4", "Number: 5"]`

## Part 2 - Double it with map
```
const arr = [1,2,3,4,5];

const arr2 = arr.map(item => {
  return item * 2;
});

console.log(arr2) // Array [2, 4, 6, 8, 10]
```

## Part 3 - Double and show DOM updated
```
function doubleMoney() {
  data = data.map(user => {
    // using spread operator
    return { ...user, money: user.money * 2}
  });

  // don't forget to update the DOM!
  updateDOM();
}

// Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
```

