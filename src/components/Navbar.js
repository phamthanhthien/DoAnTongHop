import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <section className="w3l-top-header-content">
        <div className="hny-top-menu">
          <div className="top-hd">
            <div className="container-fluid">
              <div className="row">
                <ul className="social-top col-md-7" style={{margin: 0}}>
                  <li className="log-link mr-3">
                    <NavLink
                      exact
                      activeClassName="active"
                      className="sign-in"
                      to="/login"
                    >
                      <span className="fa fa-user" /> Sign In
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <span className="fa fa-facebook" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <span className="fa fa-instagram" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <span className="fa fa-twitter" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <span className="fa fa-vimeo" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <span className="fa fa-linkedin" />
                    </NavLink>
                  </li>
                </ul>
                {/* <ul className="accounts col-md-5">
                  <li className="top_li">
                    <span className="fa fa-mobile" />
                    <a href="tel:+142 5897555">+142 5897555</a>
                  </li>
                  <li className="top_li mr-lg-0">
                    <span className="fa fa-envelope-o" />
                    <a href="mailto:info@example.com">Need help? Contact Us </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
