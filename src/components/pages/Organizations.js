import { BellOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Tabs } from "antd";
import React from "react";
import { SearchIcon } from "../assets/Icons/SearchIcon";
import SearchField from "../common/SearchField";
const { TabPane } = Tabs;
const Organizations = () => {
  const states = [
    { Abia: "Abia" },
    { Adamawa: "Adamawa" },
    "Akwa Ibom",
    "Anambra",
  ];
  return (
    <Row>
      <Col span={24} style={{ padding: "0.3rem 0.7rem" }}>
        <SearchField />
      </Col>
      <hr
        style={{
          border: "1px solid #E5E5E5",
          height: "0",
          width: "100%",
        }}
      />
      <Col span={24}>
        <BellOutlined style={{ fontSize: "2rem", color: "#0078D4" }} />
        <span className="title">Organizations</span>
        <p style={{ margin: "0 0.3rem" }}>
          Enter a location or{" "}
          <a href="https://www.google.com/maps">browse all locations</a> to
          continue. Find Hospitals, Labs or departments by selecting a tab
          below.
        </p>
        <div></div>
      </Col>
      <Col span={24} className="searchLocation" style={{ margin: "0.5rem 0" }}>
        <Tabs defaultActiveKey="1" style={{ padding: "0rem 0.9rem" }}>
          <TabPane tab="Hospital" key="Hospital"></TabPane>
          <TabPane tab="Laboratories" key="Laboratories"></TabPane>
          <TabPane tab="Departments" key="Departments"></TabPane>
        </Tabs>
        <div style={{ padding: "0rem 0.9rem" }}>
          <span>Enter Location</span>{" "}
          <Input
            className="searchField"
            placeholder="Search"
            prefix={<SearchIcon className="site-form-item-icon" />}
          />{" "}
          <Button type="primary" className="searchbutton">
            Search
          </Button>
        </div>
      </Col>
      <Col>
        <div>Browse Organizations by State</div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {states.map((d) => (
            <span>{d}</span>
          ))}{" "}
        </div>
      </Col>
    </Row>
  );
};

export default Organizations;
