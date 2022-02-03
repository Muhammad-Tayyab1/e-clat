import { AccountBookOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Col, Image, Row, Table, Tag } from "antd";
import React from "react";
import Headers from "../common/Headers";
import SearchField from "../common/SearchField";

const Encounters = () => {
  const columns = [
    {
      title: "DETAILS",
      dataIndex: "details",
      key: "details",
      render: (text) => (
        <p style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
          {/* <Image
            width="2rem"
            style={{ borderRadius: "8px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQb4jJzXX5S9IgIQW_hUtTfl4e_CFiu9toQ&usqp=CAU"
          /> */}
          <span className="date">14 Feb, 2022</span>
          <span className="border" />
          <span>
            <span style={{ fontWeight: "400" }}> {text}</span>
            <br />
            <span style={{ fontWeight: "300" }}>
              Federal Medical center, Gbobi
            </span>
          </span>
        </p>
      ),
    },
    {
      title: "PATIENT",
      dataIndex: "patient",
      key: "patient",
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
        </p>
      ),
    },
    {
      title: "TYPE",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <>
          {status.map((tag) => {
            return (
              <Tag
                className={`${
                  tag === "Finished"
                    ? "finished"
                    : tag === "Ongoing"
                    ? "ongoing"
                    : tag === "Canceled"
                    ? "canceled"
                    : ""
                }`}
                key={tag}
              >
                {tag}
              </Tag>
            );
          })}
        </>
      ),
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
      details: "Viral Sinus Disorder",
      patient: `John Brown`,
      type: "Physical",
      status: ["Ongoing"],
      action: ["More"],
    },
    {
      key: "2",
      details: "Viral Sinus Disorder",
      patient: "Jim Green",
      type: "Online",
      status: ["Finished"],
      action: ["More"],
    },
    {
      key: "3",
      details: "Viral Sinus Disorder",
      patient: "Jac Green",
      type: "Physical",
      status: ["Canceled"],
      action: ["More"],
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
      <Col span={24}>
        <Headers
          icon={<AccountBookOutlined style={{ fontSize: "2rem" }} />}
          title={"Encounters"}
        />
      </Col>{" "}
      <Col span={24} className="table">
        <Table columns={columns} dataSource={data} />
      </Col>
    </Row>
  );
};

export default Encounters;
