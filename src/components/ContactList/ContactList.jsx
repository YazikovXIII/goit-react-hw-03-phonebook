import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contacts__list">
      {contacts.length > 0 ? (
        contacts.map(contact => (
          <li className="contacts__list_item" key={contact.id}>
            {contact.name}: {contact.number}
            <button
              onClick={() => onDeleteContact(contact.id)}
              className="filter__delete_button"
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p className="form__message">No such contact</p>
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
