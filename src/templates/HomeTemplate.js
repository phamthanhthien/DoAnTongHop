import React, { Fragment } from "react";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { Route } from "react-router-dom";

const HomeLayout = (props) => {
  return (
    <Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
