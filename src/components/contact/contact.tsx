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

export const openContacts = async (contacts: any) => {
  const props = ['name', 'email', 'tel', 'address', 'icon'];
  const opts = { multiple: true };
  const supported = 'contacts' in navigator && 'ContactsManager' in window;
  console.log('####', contacts);
  if (supported) {
    const nav = navigator as any;
    const res = await nav?.contacts?.select(props, opts);
    console.log('SELECTED CONTACTS', res);
    return res;
  } else {
    console.log('@@@@@ ELSE');
    return contacts;
  }
  console.log('$$$$$ PASSOU');
};

export const ContactComponent = component$(() => {
  const contacts = useContext(ContactsContext) as any;

  useWatch$(({ track }) => {
    track(contacts, 'contacts');
  });

  console.log('CONTACTS', contacts?.contacts);

  return (
    <>
      <button
        onClick$={() => (contacts.contacts = openContacts(contacts.contacts))}
        class='button button--green'
      >
        Contacts 📡
      </button>
    </>
  );
});
