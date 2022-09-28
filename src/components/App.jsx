import { React, Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevStat => ({
      contacts: [newContact, ...prevStat.contacts],
    }));
  };

  findContact = searchName => {
    this.setState({ filter: searchName });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  styleDefault = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#010101',
  };

  componentDidMount() {
    const contactsInLocalStorage = JSON.parse(localStorage.getItem('contacts'));
    if (contactsInLocalStorage)
      this.setState({ contacts: contactsInLocalStorage });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App component was update');
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div style={this.styleDefault}>
        React homework template
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onSearch={this.findContact} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}

export default App;
