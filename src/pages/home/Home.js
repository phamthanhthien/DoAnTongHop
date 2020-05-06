import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  
  return (
    <div>
      <section className="w3l-banner-slider-main">
        <div className="bannerhny-content">
          <header className="top-headerhny">
            {/*/nav*/}
            <nav className="navbar navbar-expand-lg navbar-light fill">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/index.html">
                  <label className="lohny">
                    <span className="fa fa-graduation-cap" aria-hidden="true" />
                    Edu
                  </label>
                  Line
                </NavLink>
                {/* if logo is image enable this   
    <NavLink class="navbar-brand" to="/#index.html">
      <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
    </NavLink> */}
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
                      <NavLink className="nav-link" to="/about.html">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/danh-sach-khoa-hoc">
                        Courses
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact.html">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <form
                  action="#"
                  method="post"
                  className="d-flex searchhny-form"
                >
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
          {/*/banner-slider*/}
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              <li data-target="#carouselExampleIndicators" data-slide-to={3} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="carousel-caption">
                    <h3>Motivated by the desire to Achieve</h3>
                    <p>They get their doubts solved instantly, 24x7</p>
                    <div className="button-4 mx-auto">
                      <div className="eff-4" />
                      <NavLink to="/danh-sach-khoa-hoc"> View Courses</NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item item2">
                <div className="container">
                  <div className="carousel-caption">
                    <h3>One class can change everything.</h3>
                    <p>We believe that every student is unique</p>
                    <div className="button-4 mx-auto">
                      <div className="eff-4" />
                      <NavLink to="/danh-sach-khoa-hoc"> View Courses</NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item item3">
                <div className="container">
                  <div className="carousel-caption">
                    <h3>Motivated by the desire to Achieve</h3>
                    <p>They get their doubts solved instantly, 24x7</p>
                    <div className="button-4 mx-auto">
                      <div className="eff-4" />
                      <NavLink to="/danh-sach-khoa-hoc"> View Courses</NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item item4">
                <div className="container">
                  <div className="carousel-caption">
                    <h3>Better learning for better results.</h3>
                    <p>We believe that every student is unique</p>
                    <div className="button-4 mx-auto">
                      <div className="eff-4" />
                      <NavLink to="/danh-sach-khoa-hoc"> View Courses</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NavLink
              className="carousel-control-prev"
              to="/#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </NavLink>
            <NavLink
              className="carousel-control-next"
              to="/#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </NavLink>
          </div>
        </div>
        {/*//banner-slider*/}
      </section>
    </div>
  );
}
