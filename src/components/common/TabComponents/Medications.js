import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import { TabletIcon } from "../../assets/Icons/TabletIcon";

const Medications = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <div className="medications-tab">
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="medicine-box">
                <TabletIcon />
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="tablet-title">
                  1 ML Depo-Provera 150 MG/ML
                </span>
                <span className="last-update">Last Updated:13 Jan. 2021</span>
              </div>
            </div>
            <div>
              <ArrowRightOutlined style={{ color: "#959595" }} /> &nbsp; &nbsp;
            </div>
          </div>
          <div className="medications-tab" style={{marginTop:'0.5rem'}}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="medicine-box">
                <TabletIcon />
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="tablet-title">
                  1 ML Depo-Provera 150 MG/ML
                </span>
                <span className="last-update">Last Updated:13 Jan. 2021</span>
              </div>
            </div>
            <div>
              <ArrowRightOutlined style={{ color: "#959595" }} /> &nbsp; &nbsp;
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Medications;
