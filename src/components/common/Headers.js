import { Col, Row } from "antd";
import React from "react";
import { FilterIcon } from "../assets/Icons/FilterIcon";
import { Patients } from "../assets/Icons/Patients";
import { PrintIcon } from "../assets/Icons/PrintIcon";
import { RepeateIcon } from "../assets/Icons/RepeateIcon";

const Headers = ({ icon, title, route }) => {
  return (
    <Row>
      <Col span={24}  className="headerContent">
        <div style={{display: 'flex', alignItems:'center'}}>
          <Patients/>
          <h1>Patient</h1>
        </div>
        <div style={{display: 'flex'}}>
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
