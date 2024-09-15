import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-5MGQXDGFW4`}
      />

      <Script id='' strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5MGQXDGFW4', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
    </>
  );
}