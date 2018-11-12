import React from "react";
import PropTypes from "prop-types";

import { Nav, Footer } from "../Global";
import Content from "./Content";

const NotFoundPage = ({
  match: {
    params: { unfoundLocation }
  }
}) => (
  <>
    <Nav />
    <main className="not-found-page">
      <Content unfoundLocation={unfoundLocation} />
    </main>
    <Footer />
  </>
);

NotFoundPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default NotFoundPage;
