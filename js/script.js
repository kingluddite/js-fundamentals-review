// grab UI elements
const mainBtn = document.querySelector('#main');
const addUserBtn = document.querySelector('#add-user');
const doubleBtn = document.querySelector('#double');
const showMillionairesBtn = document.querySelector('#show-millionaires');
const sortBtn = document.querySelector('#sort');
const calculateWealthBtn = document.querySelector('#calculate-wealth');

// put all people here
let data = [];

// Fetch random user and add money
// API https://randomuser.me/api
async function getRandomUser() {
   const res = await fetch('https://randomuser.me/api');
   const data = await res.json();

   const user = data.results[0];

   const newUser = {
     name: `${user.name.first} ${user.name.last}`,
     money: Math.floor(Math.random() * 1000000)
   };

   addData(newUser);
}

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
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
    main.appendChild(element);
  })
}

// Short and fast solution (works everywhere!)
function formatMoney(number) {
  return '$ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
}

function doubleMoney() {
  data = data.map(user => {
    return { ...user, money: user.money * 2}
  });

  // don't forget to update the DOM!
  updateDOM();
}

// Sort users by richest
function sortByRichest() {
  // b.money b is an object (not just a single number)
  // b - a because want sort descending (to sort by richest first)
  data.sort((a, b) => b.money - a.money);

  updateDOM();
}

// Filter only millionaires
function showMillionaires() {
  data = data.filter(user => user.money > 1000000);

  updateDOM();
}

// Calculate the total wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
  // add to DOM
  main.appendChild(wealthEl);
}

// Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
