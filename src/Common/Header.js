import React from "react";
import { Button, Input, Dropdown, Row, Col } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Search } = Input;

export default function Header() {
  return (
    <div>
      <Row>
        <Col
          xl={{ span: 8, offset: 4 }}
          lg={{ span: 8, offset: 4 }}
          md={{ span: 8, offset: 4 }}
          xs={{ span: 8, offset: 4 }}
          sm={{ span: 8, offset: 4 }}
          style={{ marginTop: "5px", marginBottom: "5px" }}
        >
          <Search
            placeholder="Search for products, brands for more"
            enterButton
          />
        </Col>
        <Col
          xl={{ span: 12 }}
          lg={{ span: 12 }}
          md={{ span: 12 }}
          xs={{ span: 12 }}
          sm={{ span: 12 }}
          style={{ marginTop: "5px", marginBottom: "5px" }}
        >
          <Row>
            <Col
              xl={{ span: 6, offset: 6 }}
              lg={{ span: 6, offset: 6 }}
              md={{ span: 6, offset: 6 }}
              xs={{ span: 6, offset: 6 }}
              sm={{ span: 6, offset: 6 }}
            >
              <Button className="login-btn" style={{  }}>
                <a href="/" style={{ color: "#1890ff" }}>
                  Login
                </a>
              </Button>
            </Col>
            <Col
              xl={{ span: 6 }}
              lg={{ span: 6 }}
              md={{ span: 6 }}
              xs={{ span: 6 }}
              sm={{ span: 6 }}
              // style={{ marginTop: "5px", marginBottom: "5px" }}
            >
              <Dropdown>
                <p>
                  More <DownOutlined />
                </p>
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
      </Row>
    </div>
  );
}
