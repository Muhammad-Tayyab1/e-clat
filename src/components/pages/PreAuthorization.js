import { FileDoneOutlined } from "@ant-design/icons";
import { Col, Image, Row, Table, Tag } from "antd";
import React from "react";
import Headers from "../common/Headers";
import SearchField from "../common/SearchField";

const PreAuthorization = () => {
  const columns = [
    {
      title: "#",
      dataIndex: "srNo",
      key: "srNo",
    },
    {
      title: "REQ ID",
      dataIndex: "reqId",
      key: "reqId",
    },
    {
      title: "AUTH CODE",
      dataIndex: "authCode",
      key: "authCode",
    },
    {
      title: "ENROLLEE",
      dataIndex: "enrollee",
      key: "enrollee",
      render: (text) => (
        <p style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
          <Image
            width="2rem"
            style={{ borderRadius: "8px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQb4jJzXX5S9IgIQW_hUtTfl4e_CFiu9toQ&usqp=CAU"
          />
          <span className="name"> {text}</span>
        </p>
      ),
    },
    {
      title: "PROVIDER",
      dataIndex: "provider",
      key: "provider",
      render: (tags) => <p className="provider">{tags}</p>,
    },
    {
      title: "SUBMITTED AT",
      dataIndex: "submittedAt",
      key: "submittedAt",
      render: (date) => <p className="date">{date}</p>,
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
                  tag === "Completed"
                    ? "finished"
                    : tag === "Ongoing"
                    ? "onGoing"
                    : tag === "Denied"
                    ? "canceled"
                    : tag === "Pending"
                    ? "ongoing"
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
  ];

  const data = [
    {
      key: "1",
      srNo: "1",
      reqId: "A2228-024-000",
      authCode: "33272",
      enrollee: `John Brown`,
      provider: "Avon HMO",
      submittedAt: "14 Feb, 2022",
      type: "Physical",
      status: ["Ongoing"],
    },
    {
      key: "2",
      srNo: "2",
      reqId: "A2228-024-000",
      authCode: "33272",
      enrollee: "Jim Green",
      provider: "Avon HMO",
      submittedAt: "14 Feb, 2022",
      type: "Online",
      status: ["Completed"],
    },
    {
      key: "3",
      srNo: "3",
      reqId: "A2228-024-000",
      authCode: "33272",
      provider: "Reliance HMO",
      enrollee: "Jac Green",
      submittedAt: "14 Feb, 2022",
      type: "Physical",
      status: ["Denied"],
    },
    {
      key: "4",
      srNo: "4",
      reqId: "A2228-024-000",
      authCode: "33272",
      provider: "Reliance HMO",
      enrollee: "Jac Green",
      submittedAt: "14 Feb, 2022",
      type: "Physical",
      status: ["Pending"],
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
          icon={<FileDoneOutlined style={{ fontSize: "2rem" }} />}
          title={"Encounters"}
        />
      </Col>{" "}
      <Col span={24}>
        <Table columns={columns} dataSource={data} />
      </Col>
    </Row>
  );
};

export default PreAuthorization;
