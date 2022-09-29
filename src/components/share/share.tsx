import { component$ } from '@builder.io/qwik';

export const sharing = () => {
  const supported = 'share' in window.navigator;
  if (supported) {
    const shareOpts = {
      title: 'Hello and Welcome to Pulse!',
      text: 'A better way to share 🍕!',
      url: 'https://bckstg.com.br',
    };
    window.navigator
      .share(shareOpts)
      .catch((_err) => {
        console.error('👎 navigator.share failed: ', _err);
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
