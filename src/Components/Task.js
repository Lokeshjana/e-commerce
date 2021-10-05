import React, { useState } from "react";
import { InputNumber, Card, Button, Row, Col } from "antd";
import moment from "moment";

export default function Task() {
  const [balance, setBalance] = useState(0);
  const [initailValue, setInitailValue] = useState(0);
  const [transcation, setTranscation] = useState([]);

  const handleAdd = () => {
    // if (initailValue !== "" && initailValue !== undefined){
    //     alert("Please enter value!")
    // }
    setBalance(initailValue + balance);
    const totalTranscationHistory = [];
    totalTranscationHistory.push(...transcation, {
      amount: initailValue,
      date: moment(new Date()).format(),
      type: "Add",
    });
    setTranscation(totalTranscationHistory);
  };

  const handleRemove = () => {
    setBalance(balance - initailValue);
    const totalTranscationHistory = [];
    totalTranscationHistory.push(...transcation, {
      amount: initailValue,
      date: moment(new Date()).format(),
      type: "Remove",
    });
    setTranscation(totalTranscationHistory);
  };

  const handleBalance = (e) => {
    setInitailValue(e);
  };

  return (
    <Card
      style={{
        border: "1px solid black",
        margin: "20px",
        textAlign: "center",
      }}
    >
      <h1>Expense Tracker- Basic</h1>

      <Card
        style={{
          border: "1px solid black",
          margin: "20px",
          textAlign: "center",
        }}
      >
        <Row>
          <Col span={24}>
            <h2>Balance: {balance}</h2>
          </Col>
          <Col span={24} style={{ marginBottom: "1vw" }}>
            <InputNumber
              value={initailValue}
              onChange={handleBalance}
              style={{ width: "25%", textAlign: "center" }}
            />
          </Col>
          <Col span={24} style={{ justifyContent: "space-between" }}>
            <Button
              onClick={handleAdd}
              style={{
                width: "10%",
                marginRight: "2.5%",
                background: "green",
                color: "white",
                fontWeight: "700",
                cursor:
                  initailValue === null || initailValue === 0
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              ADD
            </Button>
            <Button
              onClick={handleRemove}
              style={{
                width: "10%",
                background: "red",
                color: "white",
                fontWeight: "700",
                cursor:
                  initailValue === null || initailValue === 0
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Remove
            </Button>
          </Col>
        </Row>
      </Card>

      <Card
        style={{
          border: "1px solid black",
          margin: "20px",
        }}
      >
        <Row>
          <h3 style={{ float: "left" }}>Transcations:</h3>
        </Row>
        <Row>
          <h5 style={{ float: "left" }}>
            {transcation.map((history) => (
              <h2>
                {history.date + "-" + history.amount + "-" + history.type}{" "}
              </h2>
            ))}
          </h5>
        </Row>
      </Card>
    </Card>
  );
}
