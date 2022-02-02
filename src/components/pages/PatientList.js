import { ArrowRightOutlined } from "@ant-design/icons";
import { Col, Image, Row, Table, Tag } from "antd";
import React from "react";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <p style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
        <Image
          width="2rem"
          style={{ borderRadius: "8px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQb4jJzXX5S9IgIQW_hUtTfl4e_CFiu9toQ&usqp=CAU"
        />
        <span>
          {text}
          <br />
          id
        </span>
      </p>
    ),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Option",
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
    name: `John Brown`,
    age: 32,
    gender: "Male",
    option: ["More"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    gender: "Male",
    option: ["More"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    gender: "Male",
    option: ["More"],
  },
];

const PatientList = () => {
  return (
    <Row>
      <Col span={24} style={{ padding: "1rem", marginTop: "1.5rem" }}>
        <Table columns={columns} dataSource={data} />
      </Col>
    </Row>
  );
};

export default PatientList;
