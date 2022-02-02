import { PlusOutlined } from "@ant-design/icons";
import { Col, Input, Row } from "antd";
import React from "react";
import { Notification } from "../assets/Icons/Notification";
import { SearchIcon } from "../assets/Icons/SearchIcon";

const SearchField = () => {
  return (
    <Row>
      <Col
        span={24}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <Input
            className="search"
            placeholder="Search"
            prefix={<SearchIcon className="site-form-item-icon" />}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
         <div> <PlusOutlined className="addIcon" /></div> &nbsp;
         <span className="notification"><Notification  /></span> 
        </div>
      </Col>
    </Row>
  );
};

export default SearchField;
