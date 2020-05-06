import React, { Component } from "react";
import KhoaHoc from "./../../components/KhoaHoc";
import { connect } from "react-redux";
import * as action from "./../../redux/action/index";
import { NavLink } from "react-router-dom";

class DanhSachKhoaHoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 5,
    };
  }

  componentDidMount() {
    this.props.getListCourse();
  }

  functionAdd = () => {
    this.setState({
      number: this.state.number + 6,
    });
  };

  renderHTML = () => {
    return this.props.listCourse.map((item, index) => {
      if (index <= this.state.number) {
        return (
          <KhoaHoc
            key={index}
            khoaHoc={item}
            actionFunction={this.functionAdd}
          />
        );
      }
      return null;
    });
  };

  render() {
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
            {/* /breadcrumbs*/}
            <div className="container">
              <nav aria-label="breadcrumb" className="breadcrumb-info">
                <h2 className="hny-title text-center">Courses</h2>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Courses
                  </li>
                </ol>
              </nav>
            </div>
            {/* //breadcrumbs*/}
          </div>
          {/*//banner-slider*/}
        </section>

        <section className="features-6">
          <div className="features6-block py-5">
            <div className="container py-lg-5">
              <div className="row title-content">
                {/* <div className="col-lg-4 title-left">
                  <h3 className="hny-title">What We Provide</h3>
                </div>
                <div className="col-lg-8 title-info">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae eligendi minima accusantium reiciendis,
                    cupiditate optio corrupti quis quam at!.Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum.
                  </p>
                </div> */}
              </div>
              <div className="features6-grids text-center mt-5">
                {/* <img src="assets/images/bg3.jpg" className="img-fluid" alt /> */}
                <div className="three-grids d-grid grid-columns-3">
                  <div className="grid">
                    <div className="icon">
                      <span className="fa fa-id-card-o" aria-hidden="true" />
                    </div>
                    <div className="icon-info">
                      <h4>
                        <NavLink to="/">Trusted Content</NavLink>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab sint consectetur quasi mollitia.
                      </p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="icon">
                      <span
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="icon-info">
                      <h4>
                        <NavLink to="/">Learning into Practice</NavLink>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab sint consectetur quasi mollitia.
                      </p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="icon">
                      <span
                        className="fa fa-graduation-cap"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="icon-info">
                      <h4>
                        <NavLink to="/">Personalize Learning</NavLink>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab sint consectetur quasi mollitia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w3l-services-2">
          {/* /content-6-section */}
          <div className="services-2-mian py-5">
            <div className="container py-lg-5">
              <div className="row title-content">
                <div className="col-lg-4 title-left">
                  <h3 className="hny-title">Online Courses</h3>
                </div>
                <div className="col-lg-8 title-info">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae eligendi minima accusantium reiciendis,
                    cupiditate optio corrupti quis quam at!.Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum.
                  </p>
                </div>
              </div>
              <div className="welcome-grids row">
                <div className="container">
                  <div className="row mt-3">{this.renderHTML()}</div>
                </div>
              </div>
              {/* /pagination*/}
              <div className="pagination p1">
                {this.state.number < this.props.listCourse.length && (
                  <button
                    className="price-course btn"
                    style={{ width: "20%" }}
                    onClick={this.functionAdd}
                  >
                    <i className="fa fa-bars" /> More
                  </button>
                )}
              </div>
              {/* //pagination*/}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listCourse: state.khoaHocReducer.listCourse,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListCourse: () => {
      dispatch(action.actGetListCourseAPI());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachKhoaHoc);
