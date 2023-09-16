import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

export default class QlsvPage extends Component {
  render() {
    return (
      <div className="container max-w-6xl m-3 mx-auto">
        <Form />
        <List />
      </div>
    );
  }
}
