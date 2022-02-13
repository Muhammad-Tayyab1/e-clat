import { CloseOutlined } from "@ant-design/icons";
import { Col, Drawer, Image, Row, Tabs } from "antd";
import React from "react";
import { Calendar } from "../assets/Icons/Calendar";
import { Genderlogo } from "../assets/Icons/Genderlogo";
import { Location } from "../assets/Icons/Location";
import CorePlan from "./TabComponents/CorePlan";
import EncountersTab from "./TabComponents/EncountersTab";
import Medications from "./TabComponents/Medications";

const PatientDetailsModel = ({ close, model, visible }) => {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }
  return (
    <div>
      <Row>
        <Col span={24}>
          <Drawer
            placement="right"
            closable={false}
            onClose={model}
            visible={visible}
            getContainer={false}
          >
            <div className="patient-details-header">
              <span className="patient-details">Patient Details</span>{" "}
              <span className="close-button" onClick={close}>
                <CloseOutlined />
              </span>
            </div>
            <div className="patient-div">
              <Image
                className="patient-image"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              />
              &nbsp; &nbsp;
              <div className="patient-name-div">
                <span className="patient-name">Eugene Ward</span>
                <span className="patient-id">Patient ID Here</span>
              </div>
            </div>
            <div className="patient-personal-details">
              <div className="gender-div">
                <span>
                  <Genderlogo />
                </span>
                &nbsp; &nbsp;
                <span className="gender-content">
                  <span className="gender-heading">Gender</span>
                  <span className="gender-text">Male</span>
                </span>
              </div>
              &nbsp; &nbsp;
              <div className="gender-div">
                <span>
                  <Calendar />
                </span>
                &nbsp; &nbsp;
                <span className="gender-content">
                  <span className="gender-heading">DOB</span>
                  <span className="gender-text">1987-05-12 (35yr)</span>
                </span>
              </div>
              &nbsp;
              <div className="gender-div">
                <span>
                  <Location />
                </span>
                &nbsp; &nbsp;
                <span className="gender-content">
                  <span className="gender-heading">Address</span>
                  <span className="gender-text">
                    93218 Schmitt Passage 01961 Peabody US
                  </span>
                </span>
              </div>
              &nbsp;
            </div>

            <div>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane
                  className="tabs-content"
                  tab="Care Plan"
                  key="CarePlan"
                >
                  <CorePlan />
                </TabPane>
                <TabPane
                  className="tabs-content"
                  tab="Medications"
                  key="Medications"
                >
                  <Medications />
                </TabPane>
                <TabPane tab="Encounters" key="Encounters">
                  <EncountersTab />
                </TabPane>
                <TabPane tab="Laboratories" key="Laboratories">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Organizations" key="Organizations">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </div>
          </Drawer>
        </Col>
      </Row>
    </div>
  );
};

export default PatientDetailsModel;
