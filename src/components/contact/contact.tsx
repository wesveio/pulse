import {
  component$,
  createContext,
  useContextProvider,
  useStore,
  useContext,
} from '@builder.io/qwik';

export const ContactsContext = createContext('Contacts');

export const Contact = component$(() => {
  useContextProvider(
    ContactsContext,
    useStore({
      contacts: [],
    })
  );

  return <ContactComponent />;
});

export const openContacts = (contacts: any) => {
  const props = ['name', 'email', 'tel', 'address', 'icon'];
  const opts = { multiple: true };
  const supported = 'contacts' in navigator && 'ContactsManager' in window;
  console.log('openContacts', contacts.contacts);

  if (supported) {
    const nav = navigator as any;
    nav?.contacts?.select(props, opts).then((data: any) => {
      console.log('SELECTED CONTACTS', data);
      contacts.contacts.push(...data);
      console.log('STORE CONTACTS', contacts);
    });
  }
};

export const ContactComponent = component$(() => {
  const contacts = useContext(ContactsContext) as any;
  console.log('CONTACTS', contacts);

  return (
    <>
      <button
        onClick$={() => openContacts(contacts)}
        class='button button--green'
      >
        Contacts 📡
      </button>
      {
        contacts.length && (
            <p>Teste</p>
        )
      }
    </>
  );
});
