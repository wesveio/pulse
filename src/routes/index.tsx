import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Vibration } from '../components/vibrate/vibrate'
import { Share } from '../components/share/share'

export default component$(() => {
  return (
    <>
      <Share />
      <Vibration />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Pulse',
};
