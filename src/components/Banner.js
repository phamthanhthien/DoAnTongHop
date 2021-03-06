/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { NavLink, userHistory, useHistory } from "react-router-dom";
import { routesHome } from "../routes";

export default function banner() {
  const routes = routesHome;

  let history = useHistory();

  const onCheckOut = () => {
    if(localStorage.getItem(`user`)){
      history.push('/checkout');
    } else { 
      history.push(`/login`)
    }
  }

  const [title, setTitle] = useState(``);
  useEffect(() => {
    setTitle(``);
  }, []);

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
                  {routes.map((text, index) => (
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="active"
                        className="nav-link"
                        key={text}
                        to={text.name === `Checkout` ? "/login" : text.path}
                        button
                        onClick={text.name === `Checkout` ? onCheckOut : () => setTitle(text.name)}
                      >
                        {text.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div className="cart">
                  <NavLink to="/shopping-cart">
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
            <h2 className="hny-title text-center">{title}</h2>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {title}
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
