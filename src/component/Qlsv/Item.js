import React, { Component } from "react";
import { Button, Space } from "antd";
import { connect } from "react-redux";
import { DEL_USER } from "./redux/userReducer";
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
            <Button type="primary" className="bg-blue-500">
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
    removeUser: (id) => dispatch({ type: DEL_USER, payload: id }),
  };
};

export default connect(null, mapDispatchToProps)(Item);
