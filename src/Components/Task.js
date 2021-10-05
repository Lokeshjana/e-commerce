import React, { useState } from "react";
import { InputNumber, Card, Button, Row, Col } from "antd";
import moment from "moment";

export default function Task() {
  const [balance, setBalance] = useState(0);
  const [initailValue, setInitailValue] = useState(0);
  const [transcation, setTranscation] = useState([]);

  const handleAdd = () => {
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
    <Card className="card-style">
      <h1>Expense Tracker- Basic</h1>

      <Card className="card-style">
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
              className="Btn-Add"
              onClick={handleAdd}
              style={{
                cursor:
                  initailValue === null || initailValue === 0
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              ADD
            </Button>
            <Button
              className="Btn-Remove"
              onClick={handleRemove}
              style={{
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

      <Card className="card-style">
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
