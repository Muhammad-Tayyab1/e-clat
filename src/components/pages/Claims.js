import { Col, Image, Row, Table, Tag } from "antd";
import React from "react";
import SearchField from "../common/SearchField";
import Headers from "../common/Headers";
import { ArrowRightOutlined, FolderOpenOutlined } from "@ant-design/icons";

const Claims = () => {
  const columns = [
    {
      title: "DATE",
      dataIndex: "date",
      key: "date",
      render: (date) => (
        <>
          <span
            className="date"
          >
            {date}
          </span>
        </>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description) => (
        <>
          <span className="description"> {description}</span>
          <br />
          <span className="patientId" style={{ margin: "0" }}>
            Routine checkup
          </span>
        </>
      ),
    },
    {
      title: "Claimant",
      dataIndex: "claimant",
      key: "claimant",
      render: (text) => (
        <p
          style={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            width: "max-content",
          }}
        >
          <Image
            width="48px"
            height="48px"
            style={{ borderRadius: "10px" }}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          />
          &nbsp;
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
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <>
          {status.map((tag) => {
            return (
              <Tag
                className={`${
                  tag === "Settled"
                    ? "finished"
                    : tag === "New"
                    ? "ongoing"
                    : tag === "Denied"
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
      date: "14 Feb, 2022",
      description: "RMO221749464",
      claimant: `John Brown`,
      provider: "Avon HMO",
      status: ["Settled"],
      action: ["More"],
    },
    {
      key: "2",
      date: "14 Feb, 2022",
      description: "RMO221749464",
      claimant: "Jim Green",
      provider: "Avon HMO",
      status: ["Denied"],
      action: ["More"],
    },
    {
      key: "3",
      date: "14 Feb, 2022",
      description: "RMO221749464",
      claimant: "Jac Green",
      provider: "Avon HMO",
      status: ["New"],
      action: ["More"],
    },
    {
      key: "4",
      date: "14 Feb, 2022",
      description: "Claim Number",
      claimant: "Jac Green",
      provider: "Avon HMO",
      status: ["Denied"],
      action: ["More"],
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
      <Col span={24} className="claimsHeader">
        <div className="claimRightBorder" />{" "}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="totalIndemity">₦7,650,000</span>
          <span className="indemityText">Total Indemnity</span>
        </div>
        <div className="newClaimBorder" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="totalIndemity">65</span>
          <span className="indemityText">New Claims</span>
        </div>
        <div className="resolvedClaim" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="totalIndemity">12</span>
          <span className="indemityText">Resolved Claims</span>
        </div>
        <div className="updateClaims" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="totalIndemity">8</span>
          <span className="indemityText">Updated Claims</span>
        </div>
      </Col>
      <Col span={24} style={{ padding: "0.3rem 0.7rem", marginTop: "1rem" }}>
        <Headers icon={<FolderOpenOutlined />} title={"Claims"} />
      </Col>
      <Col span={24} className="table" style={{ padding: "0rem 0.7rem" }}>
        <Table columns={columns} dataSource={data} />
      </Col>
    </Row>
  );
};

export default Claims;
