import React from "react";
import { NavLink } from "react-router-dom";

export default function banner() {
  return (
    <section className="w3l-banner-slider-main w3l-inner-page-main">
      <div className="breadcrumb-infhny">
        <header className="top-headerhny">
          {/*/nav*/}
          <nav className="navbar navbar-expand-lg navbar-light fill">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
                <label className="lohny">
                  <span className="fa fa-graduation-cap" aria-hidden="true" />
                  Edu
                </label>
                Line
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-lg-auto ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/courses">
                      Courses
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <div className="cart">
                  <NavLink to="/gio-hang">
                    <i
                      className="fa fa-shopping-cart mx-3"
                      style={{ color: "#fff", fontSize: "35px" }}
                    ></i>
                  </NavLink>
                </div>
              </div>
              <form action="#" method="post" className="d-flex searchhny-form">
                <input
                  type="search"
                  placeholder="Search Here..."
                  required="required"
                />
                <button type="submit">
                  <span className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </div>
          </nav>
          {/*//nav*/}
        </header>
        {/* /breadcrumbs*/}
        <div className="container">
          <nav aria-label="breadcrumb" className="breadcrumb-info">
            <h2 className="hny-title text-center">Shopping cart</h2>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Shopping cart
              </li>
            </ol>
          </nav>
        </div>
        {/* //breadcrumbs*/}
      </div>
      {/*//banner-slider*/}
    </section>
  );
}
