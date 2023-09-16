import React, { Component } from "react";
import { BASE_URL } from "./ultis";
import axios from "axios";
import { message } from "antd";
import { connect } from "react-redux";
import { ADD_USER } from "./redux/userReducer";

class Form extends Component {
  state = {
    id: "",
    fullname: "",
    phone: "",
    email: "",
  };
  handleChangeForm = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleCreateUser = () => {
    axios
      .post(BASE_URL, this.state)
      .then((result) => {
        this.props.addUser(result.data);
        message.success("Thêm thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="p-4 border rounded-lg shadow-lg">
        <h1 className="p-3 text-3xl text-gray-800">Thông tin sinh viên</h1>
        <form>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2 input-group">
              <label htmlFor="">Mã sinh viên</label>
              <input
                type="text"
                name="id"
                onChange={this.handleChangeForm}
                className="block w-full p-3 mt-2 border rounded-md"
              />
            </div>
            <div className="w-1/2 input-group">
              <label htmlFor="">Họ Tên</label>
              <input
                type="text"
                name="fullname"
                onChange={this.handleChangeForm}
                className="block w-full p-3 mt-2 border rounded-md"
              />
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2 input-group">
              <label htmlFor="">Số điện thoại</label>
              <input
                type="text"
                name="phone"
                onChange={this.handleChangeForm}
                className="block w-full p-3 mt-2 border rounded-md"
              />
            </div>
            <div className="w-1/2 input-group">
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChangeForm}
                className="block w-full p-3 mt-2 border rounded-md"
              />
            </div>
          </div>
          <button
            type="button"
            className="p-3 text-white bg-blue-500 rounded-lg"
            onClick={this.handleCreateUser}
          >
            Thêm sinh viên
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch({ type: ADD_USER, payload: user }),
  };
};

export default connect(null, mapDispatchToProps)(Form);
