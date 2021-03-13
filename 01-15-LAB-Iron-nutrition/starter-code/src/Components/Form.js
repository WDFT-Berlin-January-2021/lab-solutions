import React from 'react';
import InputField from './InputField'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ',',
      calories: 0,
      image: '',
      quantity: 0,
    }
  }

  handleChangeInput = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addNewMethod(this.state);
  }

  render() {

    return (
      <form onSubmit={this.handleFormSubmit} >
        <InputField onChange={this.handleChangeInput} label="Name" type="text" name="name" />
        <InputField onChange={this.handleChangeInput} label="Number of calories" type="number" name="calories" value={this.state.calories} />
        <InputField onChange={this.handleChangeInput} label="Image Link" type="text" name="image" value={this.state.image} />
        <button type="submit" className="button is-primary" >Submit</button>
      </form>

    )
  }
}

export default Form;