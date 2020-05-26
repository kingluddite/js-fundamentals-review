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
}

getRandomUser();
getRandomUser();
getRandomUser();


