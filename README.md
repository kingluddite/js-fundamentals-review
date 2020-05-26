# JS Project - DOM
* Display users in DOM

## Part 1
```
// MORE CODE

getRandomUser();


// Update DOM
// set a default (if nothing is passed in just use default data array)
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData[i].forEach(function(item) {

  })
}
// MORE CODE
```

## Part 2 - Arrow function
```
// MORE CODE

// Update DOM
// set a default (if nothing is passed in just use default data array)
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${item.money}`;
  })
}
// MORE CODE
```

## Part 3 - Insert into DOM
```
// MORE CODE

// Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

getRandomUser();
getRandomUser();
getRandomUser();


// Update DOM
// set a default (if nothing is passed in just use default data array)
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${item.money}`;
    main.appendChild(element);
  })
}
// MORE CODE
```

## Part 4 - Format as money
* [short and fast solution - link stackoverflow](https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string)

```
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
    main.appendChild(element);
  })
}

// Short and fast solution (works everywhere!)
function formatMoney(number) {
  return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
}
```

## Part 5 - Event Listener
```
// Short and fast solution (works everywhere!)
function formatMoney(number) {
  return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
}

// Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
```
