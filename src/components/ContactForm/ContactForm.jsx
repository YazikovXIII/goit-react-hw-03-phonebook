import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmit(contact);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const nameInputId = nanoid();
    const numberInputId = nanoid();
    const isFormFilled = name && number;
    return (
      <form onSubmit={this.handleSubmit} className="contact_add__form">
        <label htmlFor={nameInputId}>Name</label>
        <input
          id={nameInputId}
          className="form__input"
          onChange={this.handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={numberInputId}>Number</label>
        <input
          id={numberInputId}
          className="form__input"
          onChange={this.handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <div className="form__button_container">
          {isFormFilled ? (
            <button className="form__button" type="submit">
              Add contact
            </button>
          ) : (
            <p className="form__message">Fill the fields to Add contact</p>
          )}
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
