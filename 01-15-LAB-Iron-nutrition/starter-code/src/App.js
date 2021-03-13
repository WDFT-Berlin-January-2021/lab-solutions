import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import Form from './Components/Form';
import TodaysFood from './Components/TodaysFood';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foods: foods,
      searchTerm: "",
      todaysFood: [],
      formVisible: false
    }
  }

  handleFormVisible = () => {
    this.setState({
      formVisible: true
    })
  }

  addNewFood = food => {
    this.state.foods.unshift(food);
    this.setState({
      foods: this.state.foods,
      formVisible: false
    });
  }

  handleSearchTermChange = e => {
    this.setState({ searchTerm:e.target.value })
  }

  addTodaysFood = (foodItem, quantity) => {

    const copyToday = [...this.state.todaysFood]
    const food = {
      name: foodItem.name,
      calories: foodItem.calories,
      image: foodItem.image,
      quantity: quantity
    }
    const todaysFoodNames = copyToday.map(e => e.name) // create an array with all food names from copyToday

    if (todaysFoodNames.includes(food.name)) { // check if the current food is already in the list
      let index = todaysFoodNames.indexOf(food.name);
      copyToday[index].quantity += parseInt(food.quantity);
    } else {
      copyToday.push(food);
    }

    this.setState({ todaysFood: copyToday })
  }

  deleteOne = (index) => {
    this.state.todaysFood[index].quantity > 0 ? this.state.todaysFood[index].quantity -= 1 : this.state.todaysFood[index].quantity = 0
    this.setState({ todaysFood: this.state.todaysFood })
  }


  render() {

    const filteredFoods = this.state.foods.filter(food => food.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    const filteredFoodsJSX = filteredFoods.map((food, index) => {
      return <FoodBox addTodaysFoodMethod={this.addTodaysFood} {...food} key={index} />
    })

    const todaysFoodJSX =  this.state.todaysFood.map((food, index) => {
      return <TodaysFood deleteOneMethod={() => this.deleteOne(index)} {...food} key={index} />
    })
    const totalCalories = this.state.todaysFood.map(food => food.calories * food.quantity).reduce((acc, cv) => { return acc + cv }, 0)

    return (
      <div className="App">

        {this.state.formVisible && <Form addNewMethod={this.addNewFood} />}
        {!this.state.formVisible && <button onClick={this.handleFormVisible} className="button is-primary">Add new food</button>}

        <input onChange={this.handleSearchTermChange} className="input" type="text" name="searchTerm" value={this.state.searchTerm} placeholder="search for food" />
       
        <div className="columns">

          <div className="column">
            {filteredFoodsJSX}
          </div>

          <div className="column">
            <h1>Today's food</h1>
            { todaysFoodJSX }
            <h1>Total Calories: {totalCalories}</h1>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
