import { DownOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Col, Dropdown, Menu, Row } from "antd";
import React from "react";

const CorePlan = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <span className="ongoing">Active</span>
      </Menu.Item>
      <Menu.Item>
        <span className="canceled">Canceled</span>
      </Menu.Item>
      <Menu.Item>
        <span className="finished">Finished</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Row>
        <Col span={24}>
          <span className="core-plan-title">Core Plan</span>
          <div className="core-plan-body">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                &nbsp;&nbsp;{" "}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="dises-name">
                    Allergic disorder management
                  </span>
                  <span className="plan-date">From 15 Jun, 2018</span>
                </div>
                <span className="ongoing">Active</span>
              </div>
              <span>
                <Dropdown overlay={menu}>
                  <span
                    style={{ color: "#959595" }}
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <DownOutlined />
                  </span>
                </Dropdown>
                &nbsp; &nbsp;
              </span>
            </div>
            <hr style={{ width: "98%" }} />
            <div style={{ marginLeft: "0.5rem" }}>
              <span className="details-field">Details</span>
              <div>
                <PlusCircleOutlined style={{ color: "#0078D4" }} />
                <span className="details-text">
                  Recommendation to avoid exercise
                </span>
              </div>
              <div>
                <PlusCircleOutlined style={{ color: "#0078D4" }} />
                <span className="details-text">
                  Deep breathing and coughing exercises
                </span>
              </div>
            </div>
          </div>
          <div className="respiratory-thrapy">
            <div style={{ display: "flex", alignItems: "center" }}>
              &nbsp;&nbsp;{" "}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="dises-name">Respiratory Therapy</span>
                <span className="plan-date">24 Sept, 2016- 22 Aug. 2018</span>
              </div>
              <span className="finished">Completed</span>
            </div>
            <span>
              <Dropdown overlay={menu}>
                <span
                  style={{ color: "#959595" }}
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <DownOutlined />
                </span>
              </Dropdown>
              &nbsp; &nbsp;
            </span>
          </div>
          <div className="respiratory-thrapy">
            <div style={{ display: "flex", alignItems: "center" }}>
              &nbsp;&nbsp;{" "}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="dises-name">Skin condition care</span>
                <span className="plan-date">From 25 Nov, 2015</span>
              </div>
              <span className="ongoing">Active</span>
            </div>
            <span>
              <Dropdown overlay={menu}>
                <span
                  style={{ color: "#959595" }}
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <DownOutlined />
                </span>
              </Dropdown>
              &nbsp; &nbsp;
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CorePlan;
