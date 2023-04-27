import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";
import Script from "next/script";
import Head from "next/head";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Menu } from "~/components/Menu/Menu";
import { Footer } from "~/components/Footer/Footer";

const MyApp: AppType<{ session: Session | null }> = ({
                                                       Component,
                                                       pageProps: { session, ...pageProps }
                                                     }) => {
  return (
    <>
      <Script strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}`} />

      <Script strategy="lazyOnload" id="google-analytics">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}');
            `}
      </Script>

      <Head>
        <title>
          Redmonkez portfolio
        </title>
        <meta property="og:url" content="tomas-svojanovsky.eu" />

        <meta name="twitter:card" content="summary" />
        <meta property="og:image" content={"/images/monkey.jpg"} />
        <meta
          property="og:description"
          content="You can find a collection of my work that includes completed challenges from frontendmentor.io, my personal side projects, and my teaching work at SDA"
        />
      </Head>

      <SessionProvider session={session}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: "dark" }}>
          <div className={"container flex flex-col p-8 max-w-[72.5rem] mx-auto"}>
            <Menu />

            <div className={"flex-1"}>
              <Component {...pageProps} />
            </div>

            <Footer/>
          </div>
        </MantineProvider>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
