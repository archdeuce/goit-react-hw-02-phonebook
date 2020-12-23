import './App.css';
import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onCreate = newContact => {
    if (this.state.contacts.find(({ name }) => name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  onFilterChanged = filter => {
    this.setState({ filter });
  };

  onDelete = removeItemId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== removeItemId),
      };
    });
  };

  filteredContacts = () => {
    let { contacts, filter } = this.state;
    filter = filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  render() {
    const contacts = this.filteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onCreate={this.onCreate} />

        <h2>Contacts</h2>
        <Filter onFilterChanged={this.onFilterChanged} />
        <ContactList contacts={contacts} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
