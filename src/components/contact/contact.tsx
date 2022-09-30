import {
  component$,
  createContext,
  //   useContextProvider,
  useStore,
  //   useContext,
  //   useWatch$,
  $,
} from '@builder.io/qwik';

export const ContactsContext = createContext('Contacts');

export const Contact = component$(() => {
  /* useContextProvider(
    ContactsContext,
    useStore({
      contacts: [],
    })
  ); */

  return <ContactComponent />;
});

/* export const openContacts = async () => {
  const props = ['name', 'email', 'tel', 'address', 'icon'];
  const opts = { multiple: true };
  const supported = 'contacts' in navigator && 'ContactsManager' in window;
  //   console.log('####', contacts);
  if (supported) {
    const nav = navigator as any;
    return await nav?.contacts?.select(props, opts).then((res: any) => {
      console.log('SELECTED CONTACTS', res);
      return res;
    });
  } else {
    console.log('@@@@@ ELSE');
    return [];
  }
}; */

export const ContactComponent = component$(() => {
  const store: any = useStore({
    contacts: [],
  });

  const openContacts = $(() => {
    const props = ['name', 'email', 'tel', 'address', 'icon'];
    const opts = { multiple: true };
    const supported = 'contacts' in navigator && 'ContactsManager' in window;
    //   console.log('####', contacts);
    if (supported) {
      const nav = navigator as any;
      nav?.contacts?.select(props, opts).then((res: any) => {
        console.log('SELECTED CONTACTS', res);
        return res;
      });
    } else {
      console.log('@@@@@ ELSE');
      return [];
    }
  });

  /* useWatch$(async({ track }) => {
    track(store, 'contacts');
  }); */

  console.log('CONTACTS', store?.contacts);

  return (
    <>
      <button
        onClick$={() => (store.contacts = openContacts)}
        class='button button--green'
      >
        Contacts 📡
      </button>
      {JSON.stringify(store.contacts)}
      {store.contacts.length ? <p>Teste</p> : <></>}
    </>
  );
});
