import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const location = useLocation();
  const { query } = location

  return (
    <>
      <h1>Share Page</h1>
      <p>Title: {query.title}</p>
      <p>Text: {query.text}</p>
      <p>URL: {query.url}</p>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Share',
};