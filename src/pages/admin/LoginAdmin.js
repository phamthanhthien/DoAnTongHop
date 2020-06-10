import React, { Component } from "react";
import * as action from "../../redux/action/index";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
// import "../../css/login.css";

class LoginAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taiKhoan: "",
      matKhau: "",
    };
  }

  handleOnChane = (event) => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.loginAdmin(this.state, this.props.history);
  };

  render() {
    return (
      <div className="login_admin">
        <div className="container login_admin-content">
          <div className="d-flex justify-content-center h-100 login_content">
            <div className="card">
              <div className="card-header">
                <h3>Sign In</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span>
                    <i className="fa fa-facebook-square" />
                  </span>
                  <span>
                    <i className="fa fa-google-plus-square" />
                  </span>
                  <span>
                    <i className="fa fa-twitter-square" />
                  </span>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleOnSubmit}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-user" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="taiKhoan"
                      onChange={this.handleOnChane}
                      placeholder="username"
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fa fa-key" />
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      name="matKhau"
                      onChange={this.handleOnChane}
                      placeholder="password"
                    />
                  </div>
                  {/* <div className="row align-items-center remember">
                  <input type="checkbox" />
                  Remember Me
                </div> */}
                  <div className="form-group">
                    <input
                      type="submit"
                      defaultValue="Login"
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center">
                  <NavLink to="/">Forgot your password?</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAdmin: (user, history) => {
      dispatch(action.actLoginAdmin(user, history));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginAdmin);
