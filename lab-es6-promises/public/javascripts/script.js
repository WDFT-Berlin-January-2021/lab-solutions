// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                document.querySelector('#table').innerHTML += `<img src="public/images/steak.jpg" alt=""/>`
              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
        document.querySelector('#table').innerHTML += `<img src="public/images/mashPotatoes.jpg" alt=""/>`
      })
    })
  })
});
// Iteration 3 using async and await

async function makeFood(steps, id) {
  for (let step of steps) {
    await addFood(step, id);
  }
  console.log('add', id);
  document.querySelector('#table').innerHTML += `<img src="public/images/${id.replace('#', '')}.jpg" alt=""/>`
}

// makeFood(brusselSprouts, '#brusselSprouts');


// Bonus 1: add all the images -> already added to the code above


// possible refactoring : add an addImage method
// const addImage = (image) => document.querySelector('#table').innerHTML += `<img src="public/images/${image}.jpg" alt="${image}"/>`


// Bonus 2: 



async function makeFood(steps, id) {
  for (const step of steps) {
    await addFood(step, id);
  }
  document.querySelector('#table').innerHTML += `<img src="public/images/${id.replace('#', '')}.jpg" />`;
}

Promise.all([
  makeFood(steak, '#steak'),
  makeFood(brusselSprouts, '#brusselSprouts'),
  makeFood(mashPotatoes, '#mashPotatoes')
]).then(res => {
  document.body.innerHTML += `<button onclick="new Audio('public/media/dinnerIsServed.mp3').play()">Dinner is served.</button>`;
});