import { ArrowRightOutlined, TeamOutlined } from "@ant-design/icons";
import { Col, Row, Table, Tag } from "antd";
import React from "react";
import Headers from "../common/Headers";
import SearchField from "../common/SearchField";

const Users = () => {
  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description) => (
        <div style={{ display: "flex", alignItems: "center",  width:'max-content' }}>
          <span className="userIcon">E</span>
          <span style={{margin: '0px 9px'}}>
            <span style={{fontWeight:'bold'}}> {description}</span>
            <br />
            <span className="patientId" style={{ margin: "0" }}>
              Admin
            </span>{" "}
          </span>
        </div>
      ),
    },
    {
      title: "PHONE",
      dataIndex: "Phone",
      key: "Phone",
      render: (text) => (
        <p style={{ marginTop: "10px", display: "flex", alignItems: "center", width:'max-content' }}>
          <span className="phone"> {text}</span>
        </p>
      ),
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
      render: (tags) => <span className="email">{tags}</span>,
    },
    {
      title: "ACTION",
      key: "action",
      dataIndex: "action",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag className="options" key={tag}>
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
      description: "Emmanuel Dennis",
      Phone: `09090527304`,
      email: "emekaemmanuel045@gmail.com",
      action: ["More"],
    },
    {
      key: "2",
      description: "Emmanuel Dennis",
      Phone: `09090527304`,
      email: "emekaemmanuel045@gmail.com",
      status: ["Denied"],
      action: ["More"],
    },
    {
      key: "3",
      description: "Emmanuel Dennis",
      Phone: `09090527304`,
      email: "emekaemmanuel045@gmail.com",
      action: ["More"],
    },
    {
      key: "4",
      description: "Emmanuel Dennis",
      Phone: `09090527304`,
      email: "emekaemmanuel045@gmail.com",
      action: ["More"],
    },
  ];
  return (
    <Row style={{overflow:'hidden'}}>
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
      <Col span={24}>
        <Headers
          icon={<TeamOutlined style={{ fontSize: "2rem" }} />}
          title={"Users"}
        />
      </Col>{" "}
      <Col span={24} className="table">
        <Table columns={columns} dataSource={data} />
      </Col>
    </Row>
  );
};

export default Users;
