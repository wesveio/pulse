import {
  component$,
  createContext,
  useContextProvider,
  useStore,
  useContext,
  useWatch$,
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
  if (supported) {
    const nav = navigator as any;
    nav?.contacts?.select(props, opts).then((data: any) => {
      console.log('SELECTED CONTACTS', data);
      return data;
      //   console.log('STORE CONTACTS', contacts);
    });
  } else {
    return contacts;
  }
};

export const ContactComponent = component$(() => {
  const contacts = useContext(ContactsContext) as any;

  useWatch$(({ track }) => {
    track(contacts);
  });

  console.log('CONTACTS', contacts);

  return (
    <>
      <button
        onClick$={() => (contacts.contacts = openContacts(contacts.contacts))}
        class='button button--green'
      >
        Contacts 📡
      </button>
      {contacts?.contacts.length && <p>Teste</p>}
    </>
  );
});
