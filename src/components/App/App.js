import React, { Component } from 'react';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components//ContactList/ContactList';

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
  onSubmit = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  checkNewContact = newContact => {
    if (
      this.state.contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase()
      )
    ) {
      alert(newContact.name + ' is alredy in contacts');
      return true;
    }
    return false;
  };
  onChangeFilter = async e => {
    await this.setState({ filter: e.target.value });
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    const normFilter = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normFilter)
    );
    const deleteContact = this.deleteContact;
    const onChangeFilter = this.onChangeFilter;
    const onSubmit = this.onSubmit;
    const checkNewContact = this.checkNewContact;

    return (
      <div className="main">
        <h1>Phonebook</h1>
          <ContactForm
             onSubmit={onSubmit}
             checkNewContact={checkNewContact} />
        <h2>Contacts</h2>
          <Filter
             filter={filter}
             onChange={onChangeFilter} />
        <ContactList
          visibleContacts={visibleContacts}
          deleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
