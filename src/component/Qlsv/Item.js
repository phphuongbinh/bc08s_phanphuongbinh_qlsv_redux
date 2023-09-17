import React, { Component } from "react";
import { Button, Space } from "antd";
import { connect } from "react-redux";
import { DEL_USER, EDIT_USER } from "./redux/userReducer";
import axios from "axios";
import { BASE_URL } from "./ultis";
import { message } from "antd";

class Item extends Component {
  handleRemove = () => {
    axios
      .delete(`${BASE_URL}/${this.props.item.id}`)
      .then((result) => {
        this.props.removeUser(result.data.id);
        message.success("Xóa thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleEdit = () => {
    axios
      .get(`${BASE_URL}/${this.props.item.id}`)
      .then((result) => {
        this.props.editUser(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    let { id, phone, email, fullname } = this.props.item;
    return (
      <tr>
        <td className="px-6 py-4 border-b">{id}</td>
        <td className="px-6 py-4 border-b">{fullname}</td>
        <td className="px-6 py-4 border-b">{phone}</td>
        <td className="px-6 py-4 border-b">{email}</td>
        <td className="px-6 py-4 border-b">
          <Space wrap>
            <Button
              onClick={this.handleEdit}
              type="primary"
              className="bg-blue-500"
            >
              Sửa
            </Button>
            <Button
              type="primary"
              danger
              className="bg-red-500"
              onClick={this.handleRemove}
            >
              Xóa
            </Button>
          </Space>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: (id) => {
      return dispatch({ type: DEL_USER, payload: id });
    },
    editUser: (user) => {
      return dispatch({ type: EDIT_USER, payload: user });
    },
  };
};

export default connect(null, mapDispatchToProps)(Item);
