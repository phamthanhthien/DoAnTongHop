import React, { Component } from "react";
import * as action from "./../../redux/action/index";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

class ChiTietKhoaHoc extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetailCourse(id);
  }

  render() {
    console.log(this.props.course);
    // let { course } = this.props;
    return (
      <div>
        <section className="w3l-banner-slider-main w3l-inner-page-main">
          <div className="breadcrumb-infhny">
            <header className="top-headerhny">
              {/*/nav*/}
              <nav className="navbar navbar-expand-lg navbar-light fill">
                <div className="container-fluid">
                  <NavLink className="navbar-brand" to="/index.html">
                    <label className="lohny">
                      <span
                        className="fa fa-graduation-cap"
                        aria-hidden="true"
                      />
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
                        <NavLink className="nav-link" to="/about">
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
            {/* /breadcrumbs*/}
            <div className="container">
              <nav aria-label="breadcrumb" className="breadcrumb-info">
                <h2 className="hny-title text-center">Courses</h2>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item">
                    <NavLink to="/danh-sach-khoa-hoc">Courses</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {this.props.course.tenKhoaHoc}
                  </li>
                </ol>
              </nav>
            </div>
            {/* //breadcrumbs*/}
          </div>
          {/*//banner-slider*/}
        </section>

        <section className="info__couser my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div
                  className="info__couser-top d-block w-100 p-3"
                  style={{ backgroundColor: "#f9fafb", borderRadius: 15 }}
                >
                  <h2>{this.props.course.tenKhoaHoc}</h2>
                  <h6>{this.props.course.moTa}</h6>
                  <div className="star">
                    <span style={{ color: "#f4c150" }}>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half" />
                    </span>
                    <span className="pl-2">4.5 (9,235 ratings)</span>
                    <span className="pl-2">32,240 students enrolled</span>
                  </div>
                  <div className="author">
                    <span>Created by Chris Croft</span>
                    <span className="pl-3">
                      Last updated {this.props.course.ngayTao}
                    </span>
                    <span className="pl-3">
                      <i className="fa fa-comment" /> English
                    </span>
                    <span className="pl-3">
                      <i className="fa fa-creative-commons" /> English
                    </span>
                  </div>
                </div>
                <div
                  className="info__couser-bottom mt-3 p-3"
                  style={{ backgroundColor: "#f9fafb", borderRadius: 15 }}
                >
                  <h5>What you'll learn</h5>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-2">
                          <i className="fa fa-check" /> Enjoy selling by
                          befriending customers
                        </div>
                        <div className="mb-2">
                          <i className="fa fa-check" /> Be organised and
                          efficient
                        </div>
                        <div className="mb-2">
                          <i className="fa fa-check" /> Enjoy selling by
                          befriending customers
                        </div>
                        <div>
                          <i className="fa fa-check" /> Master body language and
                          rapport to build relationships
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-2">
                          <i className="fa fa-check" /> Enjoy selling by
                          befriending customers
                        </div>
                        <div className="mb-2">
                          <i className="fa fa-check" /> Understand the selling
                          process and how to master it
                        </div>
                        <div className="mb-2">
                          <i className="fa fa-check" /> Enjoy selling by
                          befriending customers
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4"
                style={{
                  backgroundColor: "#f9fafb",
                  borderRadius: 15,
                  width: "100vh",
                  boxShadow: "0 0 10px rgba(0,0,0,.3)",
                }}
              >
                <img
                  className="img-fluid w-100 mt-3"
                  src={this.props.course.hinhAnh}
                  alt=""
                />
                <div style={{ margin: 15 }}>
                  <div className="d-flex justify-content-around">
                    <h3>$9.99</h3>
                    <span style={{ textDecoration: "line-through" }}>
                      $104.99{" "}
                    </span>
                    <span>Off 90%</span>
                  </div>
                  <p>
                    <i className="fa fa-clock" /> 3 days left at this price!
                  </p>
                  <button type="button" className="btn btn-danger w-100">
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success w-100 mt-2"
                  >
                    Buy now
                  </button>
                </div>
                <p>This course includes</p>
                <div className="mb-2 mt-2">
                  <i className="fa fa-play-circle" /> 2 hours on-demand video
                </div>
                <div className="mb-2">
                  <i className="fa fa-check" /> Enjoy selling by befriending
                  customers
                </div>
                <div className="mb-2">
                  <i className="fa fa-check" /> Enjoy selling by befriending
                  customers
                </div>
                <div className="mb-2">
                  <i className="fa fa-check" /> Enjoy selling by befriending
                  customers
                </div>
                <div className="mb-2">
                  <i className="fa fa-check" /> Enjoy selling by befriending
                  customers
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: 20,
                    marginTop: 20,
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Link href="#" style={{ textDecoration: "none" }}>
                      Apply coupon
                    </Link>
                  </div>
                  <hr />
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <i className="fa fa-share" /> <span>Share</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    course: state.khoaHocReducer.course,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailCourse: (id) => {
      dispatch(action.actDetailCourseAPI(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChiTietKhoaHoc);
