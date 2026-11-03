import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Whatsapp from "@/components/Whatsapp";
import ToastProvider from "@/components/ToastProvider";

import { Poppins } from "next/font/google";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title:
    "Titanium Dioxide Supplier | Rutile TiO₂ Supplier | Corechem Corporation",
  description:
    "Corechem Corporation is a trusted supplier of Titanium Dioxide, pigments, carbon black, calcite powder, and industrial chemicals. High-quality products with consistent supply and reliable service.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="IucxGfPZSGl_kyppvob4UBS3U41pV-Daq8NKBrMOUno"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18212761323"
          strategy="lazyOnload"
        />
        <Script id="google-ads" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18212761323');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TBH4FLZ5');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){
                  (c[a].q=c[a].q||[]).push(arguments)
                };
                t=l.createElement(r);
                t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x2q5cnroj9");
          `}
        </Script>
      </head>

      <body className={`${poppins.className} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TBH4FLZ5"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        <ToastProvider />
        <Whatsapp />

        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}