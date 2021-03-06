import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import { useEffect } from 'react';
import Section from '../../components/Section/Section';
import Form from '../../components/Form/Form';
import ContactsList from '../../components/ContactsList/ContactsList';
import Filter from '../../components/Filter/Filter';
import { TiContacts } from 'react-icons/ti';
import s from './PhoneBookViews.module.css';

export default function PhonebookView() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  return (
    <div className={s.container}>
      <TiContacts size={300} className={s.image} />
      <Section>
        <Form />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      )}
    </div>
  );
}
