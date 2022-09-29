import { component$ } from '@builder.io/qwik';

export const sharing = () => {
  /* console.log('window?.navigator', window?.navigator);
  window?.navigator.share({
    title: 'Trying to Share',
    text: 'This is a text share through the Site',
    url: 'https://bckstg.com.br'
  }); */
  const supported = 'share' in window.navigator;
  console.log('SUPPORTED', supported);
  alert(supported);
  if (supported) {
    const shareOpts = {
      title: 'Hello and Welcome to Pulse Share me 🍕!',
      text: 'This is a awesome feature to add in your project',
      url: 'https://bckstg.com.br',
    };
    window.navigator
      .share(shareOpts)
      .then(() => {
        alert(`👍 navigator.share succeeded.`);
      })
      .catch(() => {
        alert('👎 navigator.share failed');
      });
  }
};

export const Share = component$(() => {
  return (
    <>
      <button onClick$={() => sharing()} class='button button--green'>
        Share me 🍕
      </button>
    </>
  );
});
