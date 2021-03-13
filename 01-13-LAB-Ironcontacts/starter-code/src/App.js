import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    }
  }

  addRandomContact = () => {
    this.setState({
      contacts: this.state.contacts.concat(contacts[Math.floor(Math.random() * contacts.length) + 4])
    })
  }

  sortByName = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))
    })
  }

  sortByPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => b.popularity - a.popularity)
    })
  }

  deleteContact = (index) => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(index, 1)
    this.setState({
      contacts: contactsCopy
    })
  }

  render() {
    const contactList = this.state.contacts.map((contact, index) => {
      return <tr key={contact.id}>
        <td><img src={contact.pictureUrl} alt="contact" width="100px" /></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td><button onClick={() => this.deleteContact(index)}>Delete</button></td>
      </tr>
    });
    return (
      <div className="App">
        <h2>Iron Contacts</h2>
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th><b>Picture</b></th>
              <th><b>Name</b></th>
              <th><b>Popularity</b></th>
            </tr>
          </thead>
          <tbody>
            {contactList}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;