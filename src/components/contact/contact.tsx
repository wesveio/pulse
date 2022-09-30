import {
  component$,
  createContext,
  useContextProvider,
  useStore,
  useContext,
} from '@builder.io/qwik';

export const ContactsContext = createContext('Contacts');

export const openContacts = component$(() => {
  const props = ['name', 'email', 'tel', 'address', 'icon'];
  const opts = { multiple: true };
  const supported = 'contacts' in navigator && 'ContactsManager' in window;
  const contacts = useContext(ContactsContext) as any;
  console.log('openContacts', contacts);
  
  if (supported) {
    const nav = navigator as any;
    nav?.contacts?.select(props, opts).then((data:any)=>{
        console.log('SELECTED CONTACTS', data);
    })
    // contacts.push(...contactsSelected)
    // console.log('STORE CONTACTS', contacts);
  }
  return <></>
});

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
        <button onClick$={() => openContacts} class='button button--green'>
          Contacts 📡
        </button>
      )}
    </>
  );
});
