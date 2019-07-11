





// /* Step 5: Now that you have your own card getting added to the DOM, either 
//           follow this link in your browser https://api.github.com/users/<Your github name>/followers 
//           , manually find some other users' github handles, or use the list found 
//           at the bottom of the page. Get at least 5 different Github usernames and add them as
//           Individual strings to the friendsArray below.
          
//           Using that array, iterate over it, requesting data for each user, creating a new card for each
//           user, and adding that card to the DOM.
// */

// /* Step 1: using axios, send a GET request to the following URL 
//            (replacing the palceholder with your Github name):
//            https://api.github.com/users/<your name>
// */

// const username = 'hamidoudiallo96';

// const promise = axios.get(`https://api.github.com/users/${username}`);

// const cards = document.querySelector('.cards');



// promise
// .then(item =>{
//   console.log(item);
//   const {imgUrl,name,location,address,followers,following,bio} = item.data;
//   // passing in data
//   const followersArray = ['tetondan','dustinmyers','justsml','luishrd',' bigknell'];
//   followersArray.forEach(item =>{
//     const element = myProfile(item);
//     cards.appendChild(element);
//   });
// })
// .catch(item =>{
//   console.log(item,'This was a failure');
// });



// /* Step 2: Inspect and study the data coming back, this is YOUR 
//    github info! You will need to understand the structure of this 
//    data in order to use it to build your component function 

//    Skip to Step 3.
// */


// const followersArray = ['tetondan','dustinmyers','justsml','luishrd',' bigknell'];

// /* Step 3: Create a function that accepts a single object as its only argument,
//           Using DOM methods and properties, create a component that will return the following DOM element:

// <div class="card">
//   <img src={image url of user} />
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:  
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div>

// */

// /* List of LS Instructors Github username's: 
//   tetondan
//   dustinmyers
//   justsml
//   luishrd
//   bigknell
// */

// const myProfile = (obj1) => {
//   // element creation
//   const {imgUrl,name,location,address,followers,following,bio} = obj1.data;
//   const card = document.createElement('div');
//   const image = document.createElement('img');
//   const cardInfo = document.createElement('div');
//   const head3 = document.createtElement('h3');
//   const para1 = document.createtElement('p');
//   const para2 = document.createtElement('p');
//   const para3 = document.createtElement('p');
//   const anchor = document.createElement('a');
//   const para4 = document.createtElement('p');
//   const para5 = document.createtElement('p');
//   const para6 = document.createtElement('p');


//   // adding classes

//   card.classList.add('card');
//   cardInfo.classList.add('card-info');
//   head3.classList.add('name');
//   para1.classList.add('username');

//   // appending:
//   card.appendChild(image);
//   card.appendChild(cardInfo);
//   cardInfo.appendChild(head3);
//   cardInfo.appendChild(para1);
//   cardInfo.appendChild(para2);
//   cardInfo.appendChild(para3);
//   para3.appendChild(anchor);
//   cardInfo.appendChild(para4);
//   cardInfo.appendChild(para5);
//   cardInfo.appendChild(para6);


//   // setting image src
//   image.setAttribute('src', obj.imgURL);

//   // adding text:
//   anchor.textContent = `${obj.address}`;
//   para2.textContent = `Location: ${obj.location}`;
//   para3.textContent = `Profile: ${obj.address}`;
//   para4.textContent = `Followers: ${ob.followers} `;
//   para5.textContent = `Following: ${obj.following} `;
//   para6.textContent = `Bio: ${obj.bio} `;

  
//   return card;
// };


// /* Step 4: Pass the data received from Github into your function, 
//            create a new component and add it to the DOM as a child of .cards

// */







// /* <div class="card">
//   <img src={image url of user} />
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:  
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div> */


/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const username = 'hamidoudiallo96';

const promise = axios.get(`https://api.github.com/users/${username}`);

const cards = document.querySelector('.cards');

promise
.then(data =>{
  console.log(data,'data');
  myProfile(data);
})
.catch(data =>{
  console.log(data,'This failed');
});



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const myProfile = (obj) => {
    // element creation
   
    const card = document.createElement('div');
    const image = document.createElement('img');
    const cardInfo = document.createElement('div');
    const head3 = document.createElement('h3');
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    const anchor = document.createElement('a');
    const para4 = document.createElement('p');
    const para5 = document.createElement('p');
    const para6 = document.createElement('p');
  
  
    // adding classes
  
    card.classList.add('card');
    cardInfo.classList.add('card-info');
    head3.classList.add('name');
    para1.classList.add('username');
  
    // appending:
    card.appendChild(image);
    card.appendChild(cardInfo);
    cardInfo.appendChild(head3);
    cardInfo.appendChild(para1);
    cardInfo.appendChild(para2);
    cardInfo.appendChild(para3);
    para3.appendChild(anchor);
    cardInfo.appendChild(para4);
    cardInfo.appendChild(para5);
    cardInfo.appendChild(para6);
  
  
    // setting image src
    image.src = `${obj.avatar_url}`;
  
    // adding text:
    anchor.textContent = `${obj.html_url}`;
    para2.textContent = `Location: ${obj.location}`;
    para3.textContent = "Profile:";
    para4.textContent = `Followers: ${obj.followers} `;
    para5.textContent = `Following: ${obj.following} `;
    para6.textContent = `Bio: ${obj.bio} `;
  
    
    return document.querySelector('.cards').appendChild(card);
  };
  