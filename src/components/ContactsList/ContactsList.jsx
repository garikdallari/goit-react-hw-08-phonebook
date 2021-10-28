import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import Button from 'components/Button/Button';
import s from './ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <p className={s.name}>
            {name} : <span className={s.number}>{number}</span>
          </p>
          <Button
            text="Delete"
            onClick={() => dispatch(contactsOperations.deleteContacts(id))}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
