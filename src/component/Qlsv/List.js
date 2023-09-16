import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";
import axios from "axios";
import { BASE_URL } from "./ultis";
import { SET_USER } from "./redux/userReducer";

class List extends Component {
  componentDidMount() {
    axios
      .get(BASE_URL)
      .then((result) => {
        let list = result.data;
        this.props.setUsers(list);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  renderTbody = () => {
    return this.props.users.map((item, index) => (
      <Item item={item} key={index} />
    ));
  };
  render() {
    return (
      <div>
        <table className="w-full mt-5 overflow-hidden shadow-lg rounded-xl">
          <thead className="p-3 text-white bg-gray-600 rounded-t-lg rounded-r-lg">
            <tr className="p-3">
              <th>Mã SV</th>
              <th>Họ Tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody className="text-center">{this.renderTbody()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      return dispatch({ type: SET_USER, payload: users });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
