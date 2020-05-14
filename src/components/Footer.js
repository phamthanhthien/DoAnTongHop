import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* footer */}
        <section className="w3l-footer-16">
          <div className="w3l-footer-16-main py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 column">
                  <div className="row">
                    <div className="col-md-8 column">
                      <NavLink className="logo-2" to="index.html">
                        <label className="lohny-2">
                          <span
                            className="fa fa-graduation-cap"
                            aria-hidden="true"
                          />
                          Edu
                        </label>
                        Line
                      </NavLink>
                      <div className="ad-text-inf">
                        <p>
                          <span className="color-hny">Address :</span> 27
                          Division St, New York, NY 10002, USA
                        </p>
                      </div>
                      <div className="ad-text-inf">
                        <p>
                          <span className="color-hny">Email :</span>{" "}
                          <NavLink to="mailto:info@example.com">
                            example.com
                          </NavLink>
                        </p>
                      </div>
                      <div className="ad-text-inf">
                        <p>
                          <span className="color-hny">Phone :</span>{" "}
                          <NavLink to="tel:+142 5897555">+142 5897555</NavLink>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 column">
                      <h3>Pages</h3>
                      <ul className="footer-gd-16">
                        <li>
                          <NavLink to="index.html">Home</NavLink>
                        </li>
                        <li>
                          <NavLink to="about.html">About Us</NavLink>
                        </li>
                        <li>
                          <NavLink to="services.html">Courses</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Blog</NavLink>
                        </li>
                        <li>
                          <NavLink to="contact.html">Contact Us</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 column column3 mt-lg-0 mt-4">
                  <h3>Articles</h3>
                  <ul className="list-unstyled d-flex flex-wrap">
                    <li>
                      <div className="row">
                        <NavLink className="col-md-5 col-4" to="#">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="../../images/bg1.jpg"
                            alt=""
                          />
                        </NavLink>
                        <div className="col pl-0">
                          <NavLink className="footer-small-text" to="#">
                            Lorem ipsum dolor sit amet adipiscin elit
                          </NavLink>
                          <div className="text-sub-small">Feb 20th</div>
                        </div>
                      </div>
                    </li>
                    <li className="mt-md-0 mt-2">
                      <div className="row my-2 my-md-3">
                        <NavLink className="col-md-5 col-4" to="#">
                          <img
                            className="rounded img-fluid img-responsive"
                            src="../../images/bg3.jpg"
                            alt=""
                          />
                        </NavLink>
                        <div className="col pl-0">
                          <NavLink className="footer-small-text" to="#">
                            Cras at nunc sagittis, suscipit dolor
                          </NavLink>
                          <div className="text-sub-small">Feb 22nd</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 column column4 mt-lg-0 mt-4">
                  <h3>Newsletter </h3>
                  <div className="end-column">
                    <h4>Subscribe Here Now</h4>
                    <form action="#" className="subscribe" method="post">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                      />
                      <button>
                        <span
                          className="fa fa-paper-plane"
                          aria-hidden="true"
                        />
                      </button>
                    </form>
                    <p>
                      Subscribe to our mailing list and get updates to your
                      email inbox.
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex below-section justify-content-between align-items-center pt-4 mt-5">
                <div className="columns text-lg-left text-center">
                  <p>
                    © 2020 Eduline. All rights reserved. Design by{" "}
                    <a href="https://phamthanhthien.com/">
                      phamthanhthien.com
                    </a>
                  </p>
                </div>
                <div className="columns-2 mt-md-0 mt-3">
                  <ul className="social">
                    <li>
                      <NavLink to="#facebook">
                        <span className="fa fa-facebook" aria-hidden="true" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#linkedin">
                        <span className="fa fa-linkedin" aria-hidden="true" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#twitter">
                        <span className="fa fa-twitter" aria-hidden="true" />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#google">
                        <span
                          className="fa fa-google-plus"
                          aria-hidden="true"
                        />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#github">
                        <span className="fa fa-github" aria-hidden="true" />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* move top */}
          <button onclick="topFunction()" id="movetop" title="Go to top">
            <span className="fa fa-angle-up" />
          </button>
          {/* //move top */}
        </section>
      </div>
    );
  }
}
