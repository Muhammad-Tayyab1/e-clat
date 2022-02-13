import { ArrowRightOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Image, Row, Table, Tag } from "antd";
import React, { useState } from "react";
import Headers from "../common/Headers";
import PatientDetailsModel from "../common/PatientDetailsModel";
import SearchField from "../common/SearchField";

const PatientList = () => {
  const [deceased] = useState(true);
  const [model, setModel] = useState(false);
  const onClick = () => {
    setModel(true);
  };
  const columns = [
    {
      title: "DETAILS",
      dataIndex: "details",
      key: "details",
      render: (text) => (
        <p
          style={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            width: "max-content",
          }}
          onClick={() => onClick()}
        >
          <Image
            width="48px"
            height="48px"
            style={{ borderRadius: "10px" }}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          />
          &nbsp;
          <span onClick={() => onClick()}>
            <span className="name"> {text}</span>
            <br />
            <span className="patientId">Patient ID Here</span>
          </span>
          &nbsp;
          {deceased ? <span className="deceased">Deceased</span> : ""}
        </p>
      ),
    },
    {
      title: "AGE",
      dataIndex: "age",
      key: "age",
      render: (text) => <span onClick={() => onClick()}>{text}</span>,
    },
    {
      title: "GENDER",
      dataIndex: "gender",
      key: "gender",
      render: (text) => (
        <span className="gender" onClick={() => onClick()}>
          {text}
        </span>
      ),
    },
    {
      title: "OPTION",
      key: "option",
      dataIndex: "option",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag className="options" key={tag} onClick={() => onClick()}>
                <span className="more">{tag.toUpperCase()}</span>
                <span className="arrow">
                  <ArrowRightOutlined style={{ fontSize: "10px" }} />
                </span>
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      details: `John Brown`,
      age: 32,
      gender: "Male",
      option: ["MORE"],
    },
    {
      key: "2",
      details: "Jim Green",
      age: 42,
      gender: "Male",
      option: ["MORE"],
    },
    {
      key: "3",
      details: "Joe Black",
      age: 32,
      gender: "Male",
      option: ["MORE"],
    },
  ];

  return (
    <Row style={{ overflow: "hidden" }}>
      <Col span={24}>
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
        <Headers icon={<UserOutlined />} title={"Patients"} />
      </Col>{" "}
      <Col span={24} className="table">
        <Table columns={columns} dataSource={data} />
      </Col>
      <PatientDetailsModel
        close={() => setModel(false)}
        model={() => setModel(true)}
        visible={model}
      />
    </Row>
  );
};

export default PatientList;
