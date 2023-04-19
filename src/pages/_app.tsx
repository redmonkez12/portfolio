import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Menu } from "~/components/Menu/Menu";

const MyApp: AppType<{ session: Session | null }> = ({
                                                       Component,
                                                       pageProps: { session, ...pageProps }
                                                     }) => {
  return (
    <SessionProvider session={session}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: "dark" }}>
        <div className={"flex flex-col p-8 max-w-[72.5rem] mx-auto"}>
          <Menu />

          <Component {...pageProps} />
        </div>
      </MantineProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
