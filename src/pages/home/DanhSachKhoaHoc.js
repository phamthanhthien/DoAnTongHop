import React, { Component } from "react";
import KhoaHoc from "./../../components/KhoaHoc";
import { connect } from "react-redux";
import * as action from "./../../redux/action/index";
import { NavLink } from "react-router-dom";
import Banner from '../../components/Banner';

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
        <Banner />

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
