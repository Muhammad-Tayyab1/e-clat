import { BellOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Tabs } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "../assets/Icons/SearchIcon";
import SearchField from "../common/SearchField";
const { TabPane } = Tabs;
const Organizations = () => {
  const states = [
    { title: "Abia" }, { title: "Adamawa" }, { title: "Akwa Ibom" }, { title: "Anambra" }, { title: 'Bauchi' },
    { title: 'Bayelsa' }, { title: ' Benue' }, { title: 'Ekiti' }, { title: 'Cross River' }, { title: 'Delta' },
    { title: 'Ebonyi' }, { title: 'Edo' }, { title: 'Ekiti' }, { title: 'Gombe' }, { title: 'Imo' }, { title: 'Jigawa' },
    { title: 'Kaduna' }, { title: 'Kano' }, { title: 'Katsina' }, { title: 'Kebbi' },
    { title: 'Kogi' }, { title: 'Kwara' }, { title: 'Lagos' }, { title: 'Nasarawa' }, { title: 'Niger' },
    { title: 'Ogun' }, { title: 'Ondo' }, { title: 'Osun' }, { title: 'Oyo' }, { title: 'Plateau' }, { title: 'Rivers' },
    { title: 'Sokoto' }, { title: 'Taraba' }, { title: 'Yobe' }, { title: 'Zamfara' }, { title: 'FCT' }
  ];
  return (
    <Row style={{ overflow: 'hidden' }}>
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
        <BellOutlined className='iconStyle' />
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
        <div className="location-field">
          <span>Enter Location</span>{" "}
          <span> <Input
            className="searchField"
            placeholder="e.g State, Town or Name"
            prefix={<SearchIcon className="site-form-item-icon" />}
          />{" "}
            <Button type="primary" className="searchbutton">
              Search
            </Button></span>
        </div>
      </Col>
      <Col>
        <div>Browse Organizations by State</div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent:'space-between' }}>
          {states.map((d) => (
            <Link to='' style={{flex: '1 0 21%', width: 'calc(100% * (1/4) - 10px - 1px)', color:'black', textDecoration:'underline'}}>{d.title}</Link>
          ))}{" "}
        </div>
      </Col>
    </Row>
  );
};

export default Organizations;
