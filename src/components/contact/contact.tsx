import { component$, useStore, $, useWatch$ } from '@builder.io/qwik';
import { ContactList } from './contactList';

export const Contact = component$(() => {
  const store: any = useStore({
    contacts: [],
  });

  useWatch$(({ track }) => {
    track(store, 'contacts');
  });

  const openContacts = $(() => {
    const props = ['name', 'email', 'tel', 'address', 'icon'];
    const opts = { multiple: true };
    const supported = 'contacts' in navigator && 'ContactsManager' in window;
    if (supported) {
      const nav = navigator as any;
      nav?.contacts?.select(props, opts).then((res: any) => {
        store.contacts = res;
      });
    } else {
      store.contacts = [];
    }
  });

  console.log('CONTACTS', store?.contacts);

  return (
    <>
      <button onClick$={() => openContacts()} class='button button--green'>
        Contacts 📡
      </button>
      {store.contacts.length ? (
        <ContactList contacts={store.contacts} />
      ) : (
        <></>
      )}
    </>
  );
});
