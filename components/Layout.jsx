/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";
import PropTypes from "prop-types";
import { NotificationsProvider } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import FooterLinks from "./Footer";
import AppHeader from "./AppHeader";

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <Head>
        <title>{`BRIM | ${pageTitle}`}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="./images/brim_png.png" />
      </Head>

      <NotificationsProvider
        position="top-center"
        zIndex={99999999999}
        autoClose={4000}
      >
        <ModalsProvider
          modalProps={{
            centered: true,

            classNames: {
              modal: "max-w-[min(95vw,550px)] ",
              body: "border-none !p-2",
            },
          }}
        >
          <main>
            <AppHeader />
            {children}
          </main>
          <FooterLinks />
        </ModalsProvider>
      </NotificationsProvider>
    </>
  );
}

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node,
};
Layout.defaultProps = {
  children: null,
};
