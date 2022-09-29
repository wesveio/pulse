import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel='canonical' href={loc.href} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins&amp;display=swap'
        rel='stylesheet'
      />

      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='images/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='images/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='images/favicon-16x16.png'
      />
      <link rel='shortcut icon' href='images/favicon.ico' />
      <link rel="manifest" href="/manifest.json"></link>

      <meta property='og:site_name' content='Qwik' />
      <meta name='twitter:site' content='@QwikDev' />
      <meta name='twitter:title' content='Qwik' />

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
