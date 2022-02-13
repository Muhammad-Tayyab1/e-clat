import { Col, Row } from "antd";
import React from "react";
import { FilterIcon } from "../assets/Icons/FilterIcon";
import { PrintIcon } from "../assets/Icons/PrintIcon";
import { RepeateIcon } from "../assets/Icons/RepeateIcon";

const Headers = ({ icon, title, text, result }) => {
  return (
    <Row>
      <Col span={24} className="headerContent">
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="iconStyle">{icon}</span> &nbsp;
          <div className="title">{title}</div>
          <div className="text">
            {text}
            <span className="result">{result}</span>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="rotate">
            <RepeateIcon />
          </div>
          &nbsp;
          <div className="printField">
            <PrintIcon />
          </div>
          <div className="filterField">
            <FilterIcon />
            Filter
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Headers;
