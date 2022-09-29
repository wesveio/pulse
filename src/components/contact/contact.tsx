import { component$ } from '@builder.io/qwik';


export const openContacts = async () => {
    const props = ['name', 'email', 'tel', 'address', 'icon'];
    const opts = { multiple: true };
    const supported = 'contacts' in navigator && 'ContactsManager' in window;
  if (supported) {
    const nav = navigator as any
    const contacts = await nav?.contacts?.select(props, opts);
    console.log('CONTACTS', contacts);
  }
};

export const Contact = component$((props: any) => {
  const { contacts } = props;
  return (
    <>
      {contacts ? (
        <p>{JSON.stringify(contacts)}</p>
      ) : (
        <button onClick$={() => openContacts()} class='button button--green'>
          Contacts 📡
        </button>
      )}
    </>
  );
});
