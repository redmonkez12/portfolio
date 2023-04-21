import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";
import Script from 'next/script';

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Menu } from "~/components/Menu/Menu";

const MyApp: AppType<{ session: Session | null }> = ({
                                                       Component,
                                                       pageProps: { session, ...pageProps }
                                                     }) => {
  return (
    <>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}`} />

      <Script strategy="lazyOnload" id="google-analytics">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}');
            `}
      </Script>

      <SessionProvider session={session}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: "dark" }}>
          <div className={"flex flex-col p-8 max-w-[72.5rem] mx-auto"}>
            <Menu />

            <Component {...pageProps} />
          </div>
        </MantineProvider>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
