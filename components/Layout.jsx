import Head from "next/head";
import PropTypes from "prop-types";
import FooterLinks from "./Footer";
import AppHeader from "./AppHeader";

export default function Layout({ pageTitle, children }) {
  return (
    <div>
      <Head>
        <title>{`BRIM | ${pageTitle}`}</title>
        <meta name="BRIM.org" content="BRIM.org" />
        <link rel="icon" href="/images/brim_png.png" />
      </Head>

      <main>
        <AppHeader />
        {children}
      </main>

      <FooterLinks />
    </div>
  );
}

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.node,
};
Layout.defaultProps = {
  children: null,
};
