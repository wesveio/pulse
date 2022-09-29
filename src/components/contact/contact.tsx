import { component$ } from '@builder.io/qwik';

export const openContacts = () => {
    
};

export const Contact = component$(() => {
  return (
    <>
      <button onClick$={() => openContacts()} class='button button--green'>
        Open Contacts 📡
      </button>
    </>
  );
});
