import '@/styles/globals.scss';
import { Footer } from '@/components/sections/Footer';
import { Header } from '@/components/sections/Header';
import { VideoWidget } from '@/components/blocks/VideoWidget';
import Script from 'next/script';


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {


    return (
        <html lang="ru">

        <head>
          {/*  /!* Yandex.Metrika *!/*/}
          {/*  <Script id="yandex-metrika" strategy="afterInteractive">*/}
          {/*      {`*/}
          {/*  (function(m,e,t,r,i,k,a){*/}
          {/*    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};*/}
          {/*    m[i].l=1*new Date();*/}
          {/*    for (var j = 0; j < document.scripts.length; j++) {*/}
          {/*      if (document.scripts[j].src === r) { return; }*/}
          {/*    }*/}
          {/*    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,*/}
          {/*    a.parentNode.insertBefore(k,a)*/}
          {/*  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");*/}

          {/*  ym(103397251, "init", {*/}
          {/*    clickmap:true,*/}
          {/*    trackLinks:true,*/}
          {/*    accurateTrackBounce:true,*/}
          {/*    ecommerce:"dataLayer"*/}
          {/*  });*/}
          {/*`}*/}
          {/*  </Script>*/}

          {/*  /!* Google Analytics *!/*/}
          {/*  <Script*/}
          {/*      src="https://www.googletagmanager.com/gtag/js?id=G-DVNL9EV2LK"*/}
          {/*      strategy="afterInteractive"*/}
          {/*  />*/}
          {/*  <Script id="google-analytics" strategy="afterInteractive">*/}
          {/*      {`*/}
          {/*  window.dataLayer = window.dataLayer || [];*/}
          {/*  function gtag(){dataLayer.push(arguments);}*/}
          {/*  gtag('js', new Date());*/}
          {/*  gtag('config', 'G-DVNL9EV2LK');*/}
          {/*`}*/}
          {/*  </Script>*/}
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        </head>
        <body>
        {/*<noscript>*/}
        {/*    <div>*/}
        {/*        <img src="https://mc.yandex.ru/watch/103397251" style={{ position: 'absolute', left: '-9999px' }} alt="" />*/}
        {/*    </div>*/}
        {/*</noscript>*/}
        <Header />
        {children}
        <Footer />
        <VideoWidget />
        </body>
        </html>
    );
}
