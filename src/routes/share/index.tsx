import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';



export default component$(() => {
  const location = useLocation();
  const { query } = location
  console.log("LOCATIONS", location)
  return (
    <>
      <h1>Share Page</h1>
      <p>Title: {query.title}</p>
      <p>Text: {query.text}</p>
      <p>URL: {query.url}</p>
    </>
  );
});
