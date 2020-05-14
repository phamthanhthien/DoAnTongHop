import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../../redux/action/index";

class UserItem extends Component {
  handleDelete = () => {
    this.props.onDelete(this.props.user);
  };

  render() {
    const { user } = this.props;
    return (
      <tr>
        <td>{user.hoTen}</td>
        <td>{user.taiKhoan}</td>
        <td>{user.email}</td>
        <td>{user.soDt}</td>

        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUserRedux"
            onClick={() => {
              this.props.onEdit(user);
            }}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={this.handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDelete: user => {
      dispatch(action.deleteUser(user));
    },
    onEdit: user => {
      dispatch(action.editUser(user));
    }
  };
};

export default connect ( null, mapDispatchToProps ) (UserItem);
