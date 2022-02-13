import { Col, Rate, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Avon } from "../assets/Icons/Avon";
import { LagosUniversity } from "../assets/Icons/LagosUni";
import { StHospital } from "../assets/Icons/StHospitalLogo";
import { SunuHealth } from "../assets/Icons/SunuHealth";
import Headers from "./Headers";
import SearchField from "./SearchField";

const SearchResultPage = () => {
  return (
    <div>
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
        <Col span={24}>
          <Headers text={"Results for"} result={"“Lagos”"} />
        </Col>{" "}
        <Col span={24} style={{ display: "flex", flexWrap: "wrap" }}>
          <div className="card">
            <div style={{ display: "flex", padding: "0.5rem" }}>
              <span className="hospital-logo">
                <StHospital />
              </span>
              &nbsp; &nbsp;
              <div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="uni-name">Allergic disorder management</span>
                  <span className="plan-date">Hospital</span>
                </div>
              </div>
            </div>

            <div className="hospital-address">
              <span>57 Campbell St, Lagos Island 101001, Lagos</span>
            </div>
            <div style={{ padding: "0 0.5rem" }}>
              4.5 <Rate allowHalf defaultValue={4.5} />
              <span>18 Reviews</span>
            </div>
            <div style={{ padding: "0.5rem", textDecoration: "underline" }}>
              <Link to="">Learn More</Link>
            </div>
          </div>
          &nbsp; &nbsp;
          <div className="card">
            <div style={{ display: "flex", padding: "0.5rem" }}>
              <span className="hospital-logo">
                <LagosUniversity />
              </span>
              &nbsp; &nbsp;
              <div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="uni-name">
                    Lagos University Teaching Hospital...
                  </span>
                  <span className="plan-date">Hospital</span>
                </div>
              </div>
            </div>

            <div className="hospital-address">
              <span>Idi-Araba, Lagos State, Lagos, Nigeria</span>
            </div>
            <div style={{ padding: "0 0.5rem" }}>
              4.5 <Rate allowHalf defaultValue={4.5} />
              <span>18 Reviews</span>
            </div>
            <div style={{ padding: "0.5rem", textDecoration: "underline" }}>
              <Link to="">Learn More</Link>
            </div>
          </div>
          &nbsp; &nbsp;
          <div className="card">
            <div style={{ display: "flex", padding: "0.5rem" }}>
              <span className="hospital-logo">
                <SunuHealth />
              </span>
              &nbsp; &nbsp;
              <div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="uni-name">SUNU HEALTH</span>
                  <span className="plan-date">Health insurance agency</span>
                </div>
              </div>
            </div>

            <div className="hospital-address">
              <span>
                174B Muritala Muhammed way, Ebute meta, by Adekunle Bus stop,
                Oyingbo, Lagos
              </span>
            </div>
            <div style={{ padding: "0 0.5rem" }}>
              4.5 <Rate allowHalf defaultValue={4.5} />
              <span>18 Reviews</span>
            </div>
            <div style={{ padding: "0.5rem", textDecoration: "underline" }}>
              <Link to="">Learn More</Link>
            </div>
          </div>
          &nbsp; &nbsp;
          <div className="card">
            <div style={{ display: "flex", padding: "0.5rem" }}>
              <span className="hospital-logo">
                <Avon />
              </span>
              &nbsp; &nbsp;
              <div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="uni-name">Avon Healthcare Ltd.</span>
                  <span className="plan-date">HMO</span>
                </div>
              </div>
            </div>

            <div className="hospital-address">
              <span>97/101 Broad St, Lagos Island 102273, Lagos</span>
            </div>
            <div style={{ padding: "0 0.5rem" }}>
              4.5 <Rate allowHalf defaultValue={4.5} />
              <span>18 Reviews</span>
            </div>
            <div style={{ padding: "0.5rem", textDecoration: "underline" }}>
              <Link to="">Learn More</Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SearchResultPage;
