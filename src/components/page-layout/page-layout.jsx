import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';

function PageLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageLayout;