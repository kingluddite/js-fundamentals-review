
# JS Project
## Random Users
### Part 1
```
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
function getRandomUser() {
   fetch('https://randomuser.me/api').then(res => res.json()).then(data => {
     console.log(data)
   })
}

getRandomUser();
```

## Part 2
### Using Async/Await
* You don't have to tak on the `.then()`
* We just want results array -> name -> first and last
* We'll add money property onto the user object

```
async function getRandomUser() {
   const res = await fetch('https://randomuser.me/api');
   const data = await res.json();

   console.log(data);
}

getRandomUser();
getRandomUser();
getRandomUser();

```

## Part 3
!```
async function getRandomUser() {
   const res = await fetch('https://randomuser.me/api');
   const data = await res.json();

   const user = data.results[0];

   const newUser = {
     name: `${user.name.first} ${user.name.last}`,
     money: Math.floor(Math.random() * 1000000)
   };

   console.log(newUser);
}

getRandomUser();
getRandomUser();
getRandomUser();
```

## Part 4
```
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
// type `data` in client console and see 3 users
```
