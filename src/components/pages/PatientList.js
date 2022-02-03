import { ArrowRightOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Image, Row, Table, Tag } from "antd";
import React, { useState } from "react";
import Headers from "../common/Headers";
import SearchField from "../common/SearchField";

const PatientList = () => {
  const [deceased] = useState(true);
  const columns = [
    {
      title: "DETAILS",
      dataIndex: "details",
      key: "details",
      render: (text) => (
        <p style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
          <Image
            width="48px"
            height="48px"
            style={{ borderRadius: "15px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQb4jJzXX5S9IgIQW_hUtTfl4e_CFiu9toQ&usqp=CAU"
          />
          <span>
            <span className="name"> {text}</span>
            <br />
            <span className="patientId">Patient ID Here</span>
          </span>
          {deceased ? <span className="deceased">Deceased</span> : ""}
        </p>
      ),
    },
    {
      title: "AGE",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "GENDER",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "OPTION",
      key: "option",
      dataIndex: "option",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag className="options" key={tag}>
                {tag.toUpperCase()}
                <span className="arrow">
                  <ArrowRightOutlined style={{ fontSize: "10px" }} />
                </span>
              </Tag>
            );
          })}
        </>
      ),
    },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (text, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
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
    <Row>
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
      <Col span={24}></Col>
      <Col span={24} >
        <Headers
          icon={<UserOutlined style={{ fontSize: "2rem" }} />}
          title={"Patients"}
        />
      </Col>{" "}
      <Col
        span={24}
        className="table"
        
      >
        <Table columns={columns} dataSource={data} />
      </Col>
    </Row>
  );
};

export default PatientList;
