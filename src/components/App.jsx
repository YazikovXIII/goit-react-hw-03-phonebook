import React from 'react';
import { Wrapper } from './Wrapper/Wrapper.styled';
import { Section } from './Section/Section.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = newContact => {
    const nameExist = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (nameExist) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const lowercasedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowercasedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Wrapper>
        <Section>
          <h1 className="form__title">Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        {this.state.contacts.length > 0 && (
          <Section>
            <h2 className="contacts__list_title">Contacts</h2>
            <Filter value={filter} onChangeFilter={this.changeFilter} />
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          </Section>
        )}
      </Wrapper>
    );
  }
}
