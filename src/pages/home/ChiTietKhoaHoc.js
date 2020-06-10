import React, { Component } from "react";
import * as action from "./../../redux/action/index";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Banner from "../../components/Banner";
import { Button } from "@material-ui/core";

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
        <Banner />

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
                    <h3>$30.0</h3>
                    <span style={{ textDecoration: "line-through" }}>
                      $300{" "}
                    </span>
                    <span>Off 90%</span>
                  </div>
                  <p>
                    <i className="fa fa-clock" /> 3 days left at this price!
                  </p>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="w-100"
                  >
                    Add to cart
                  </Button>
                  <button
                    type="button"
                    className="btn btn-outline-success w-100 mt-2"
                  >
                    <Link to="/checkout" className="text-decoration-none">
                      Buy now
                    </Link>
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
                    <Button color="primary">Apply coupon</Button>
                  </div>
                  <hr />
                  <Button color="primary">
                    <i className="fa fa-share" /> Share
                  </Button>
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
