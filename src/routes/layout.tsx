import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://bckstg.com.br/?utm_source=Pulse" target="_blank">
          Made with ♡ by BCKSTG
        </a>
        <a href="https://qwik.builder.io/?ref=bckstg.com.br" target="_blank">
          Powered by qwik
        </a>
      </footer>
    </>
  );
});
