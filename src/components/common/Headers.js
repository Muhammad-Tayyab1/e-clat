import { Col, Row } from "antd";
import React from "react";
import { FilterIcon } from "../assets/Icons/FilterIcon";
import { PrintIcon } from "../assets/Icons/PrintIcon";
import { RepeateIcon } from "../assets/Icons/RepeateIcon";

const Headers = ({ icon, title, route }) => {
  return (
    <Row>
      <Col span={24} className="headerContent">
        <div style={{ display: "flex"}}>
          {/* <Patients/> */}
          <span style={{color:'#0078D4'}}>{icon}</span> &nbsp;
          <h1 className="title">{title}</h1>
        </div>
        <div style={{ display: "flex" }}>
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
