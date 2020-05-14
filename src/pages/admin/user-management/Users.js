import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";
import * as action from "../../../redux/action/index"

class Users extends Component {
  renderHTML = () => {
    let { userList, keyword } = this.props;

    userList = userList.filter(item => {
      return item.hoTen.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    })

    return userList.map((user, index) => {
      return (
        <UserItem key={index} user={user} />
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Họ têntên</th>
              <th>Tài khoảnkhoản</th>
              <th>Email</th>
              <th>Số điện thoại</th>
            </tr>
          </thead>
          <tbody>{this.renderHTML()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userList: state.nguoiDungReducer.userList,
    keyword: state.nguoiDungReducer.keyword,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userList: () => {
      dispatch(action.actLayDanhSachHV())
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Users);
