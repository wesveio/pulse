import {
  component$,
  createContext,
  useContextProvider,
  useStore,
  useContext,
} from '@builder.io/qwik';

export const ContactsContext = createContext('Contacts');

export const openContacts = async () => {
  const props = ['name', 'email', 'tel', 'address', 'icon'];
  const opts = { multiple: true };
  const supported = 'contacts' in navigator && 'ContactsManager' in window;
  const contacts = useContext(ContactsContext) as any;
  if (supported) {
    const nav = navigator as any;
    const contactsSelected = await nav?.contacts?.select(props, opts);
    // contacts.push(...contactsSelected)
    console.log('STORE CONTACTS', contacts);
    console.log('SELECTED CONTACTS', contactsSelected);
  }
};

export const Contact = component$(() => {
    useContextProvider(
      ContactsContext,
      useStore({
        contacts: [],
      })
    );

    return <ContactComponent />
  });

export const ContactComponent = component$(() => {
  const contacts = useContext(ContactsContext) as any;
  console.log("CONTACTS", contacts)
  return (
    <>
      {contacts.length ? (
        <p>{JSON.stringify(contacts?.name)}</p>
      ) : (
        <button onClick$={() => openContacts()} class='button button--green'>
          Contacts 📡
        </button>
      )}
    </>
  );
});
