import { ArrowRightOutlined, DownOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";

const EncountersTab = () => {
  return (
    <div>
      <Row>
        <Col span={24}>
          <span className="core-plan-title">Encounters</span>
          <div className="Encounter-tab-body">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
              }}
            >
              &nbsp;&nbsp;
              <span className="verticle-line" />
              <span className="plan-date" style={{ marginLeft: "0.5rem" }}>
                14 Aug, 2018
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="dises-name">Skin condition care</span>
                <span className="plan-date">
                  St. Mary’s Hospital, Sabo Yaba
                </span>
              </div>
            </div>
            <span>
              <ArrowRightOutlined style={{ color: "#959595" }} /> &nbsp; &nbsp;
            </span>
          </div>
          <div className="Encounter-tab-body">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
              }}
            >
              &nbsp;&nbsp;
              <span className="verticle-line" />
              <span className="plan-date" style={{ marginLeft: "0.5rem" }}>
                14 Aug, 2018
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="dises-name">Viral Sinus Disorder</span>
                <span className="plan-date">Federal Medical center, Gbobi</span>
              </div>
            </div>
            <span>
              <ArrowRightOutlined style={{ color: "#959595" }} /> &nbsp; &nbsp;
            </span>
          </div>
          <div className="Encounter-tab-body">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
              }}
            >
              &nbsp;&nbsp;
              <span className="verticle-line" />
              <span className="plan-date" style={{ marginLeft: "0.5rem" }}>
                14 Aug, 2018
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="encounters-name">
                  Child attention deficit disorder
                </span>
                <span className="plan-date">
                  Lagos University Teaching Hospital
                </span>
              </div>
            </div>
            <span>
              <ArrowRightOutlined style={{ color: "#959595" }} /> &nbsp; &nbsp;
            </span>
          </div>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'0.5rem'}}>
             <div className="more-button">
            <span className="show-more">Show More</span>
            <DownOutlined style={{color:' #555555'}} />
          </div>  
          </div>
         
        </Col>
      </Row>
    </div>
  );
};

export default EncountersTab;
