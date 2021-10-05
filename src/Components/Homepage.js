import React, { Component } from "react";
// import Header from "../Common/Header";
// import { Button, Input, Dropdown, Row, Col } from "antd";
import Task from "../Components/Task";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        {/* <Header style={{ background: "#2874f0" }} /> */}
        <Task />
      </div>
    );
  }
}
