const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => console.log('Connected to Mongo!'))
  .catch(err => console.error('Error connecting to mongo', err));

// iteration 2

let newRecipe = {
  title: 'miXto quente',
  level: 'Easy Peasy',
  ingredients: ['pão francês', 'queijo', 'presunto'],
  cuisine: 'Brasileira',
  dishType: 'Snack',
  image: 'http://culinaria.culturamix.com/blog/wp-content/gallery/misto-quente-3/Misto-Quente-6.jpg',
  duration: 5,
  creator: 'JOC'
};

Recipe
  .create(newRecipe)
  .then(result => console.log(`recipe added: ${result.title}`))
  .catch(err => console.log(err));

// iteration 3

Recipe
  .insertMany(data)
  .then(result => {
    result.forEach(item => {
      console.log(`recipe for ${item.title} inserted successfully`);
    });
  })
  .catch(err => console.log(err));

// iteration 4

Recipe
  .updateOne({title: 'Rigatoni alla Genovese'}, {duration: 100})
  .then(() => console.log(`The recipe is updated`))
  .catch(err => console.log(err));

// iteration 5

Recipe
  .deleteOne({title: 'Carrot Cake'})
  .then(() => console.log(`The recipe is deleted`))
  .catch(err => console.log(err));

// iteration 6

mongoose.connection
  .close()
  .then(() => console.log(`connection closed`))
  .catch(err => console.log(`an error while closing database connection has occurred: ${err}`));