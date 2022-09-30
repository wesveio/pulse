import { component$ } from '@builder.io/qwik';

export const ContactList = component$((props: any) => {
  const { contacts } = props;
  return (
    <div class='contacts'>
      {contacts.map((contact: any) => (
        <div class='contact_card'>
          <div class='contact_icon'>
            <img src='/images/user.jpg' />
          </div>
          <div class='contact_info'>
            <p>Name: {contact.name}</p>
            <p>
              Email:{' '}
              {contact.email.map((email: any) => (
                <span>{email}</span>
              ))}
            </p>
            <p>
              Phone:{' '}
              {contact.tel.map((tel: any) => (
                <span>{tel}</span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
});
