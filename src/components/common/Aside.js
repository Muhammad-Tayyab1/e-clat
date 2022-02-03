import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HomeOutlined,
  AccountBookOutlined,
  FileDoneOutlined,
  FolderOpenOutlined,
  TeamOutlined,
  DownOutlined,
  LoginOutlined,
  BellOutlined,
} from "@ant-design/icons";

import { Dropdown, Layout, Menu } from "antd";

import { useState } from "react";
import { Link } from "react-router-dom";
import { AsideRoutes } from "../../Routes/AsideRoutes";

import { Logo } from "../assets/logo";
import Encounters from "../pages/Encounters";
import PatientList from "../pages/PatientList";
import PreAuthorization from "../pages/PreAuthorization";
import Headers from "./Headers";
import SearchField from "./SearchField";

const { Header, Sider, Content } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  //   const onCollapse = (collapsed) => {
  //     console.log(collapsed);
  //     setCollapsed({ collapsed });
  //     };

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const menu = (
    <Menu>
      <Menu.Item key="0" icon={<LoginOutlined />}>
        Logout
      </Menu.Item>
      <Menu.Item key="1">Edit Profile</Menu.Item>
      <Menu.Divider />
    </Menu>
  );
  return (
    <Layout>
      <Sider
        className="sidebar"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="header">
          <div className="logo">{collapsed === true ? "" : <Logo />}</div>
          <div className="trigger" onClick={() => toggle()}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </div>

        <Menu mode="inline" defaultSelectedKeys={["Home"]}>
          <Menu.Item
            key="Home"
            icon={<HomeOutlined style={{ fontSize: "1.3rem" }} />}
          >
            <Link className="routelink" to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item
            key="PatientList"
            icon={<UserOutlined style={{ fontSize: "1.3rem" }} />}
          >
            <Link className="routelink" to="/patientList">
              Patient List
            </Link>
          </Menu.Item>
          <Menu.Item
            key="Encounters"
            icon={<AccountBookOutlined style={{ fontSize: "1.3rem" }} />}
          >
            <Link className="routelink" to="/encounters">
              {" "}
              Encounters
            </Link>
          </Menu.Item>
          <Menu.Item
            key="Pre-Authorization"
            icon={<FileDoneOutlined style={{ fontSize: "1.3rem" }} />}
          >
            <Link to="/pre-authorization"></Link>Pre-Authorization
          </Menu.Item>
          <Menu.Item
            key="Claims"
            icon={<FolderOpenOutlined style={{ fontSize: "1.3rem" }} />}
          >
            <Link className="routelink" to="/claims"></Link> Claims
          </Menu.Item>
          <Menu.Item
            key="Organizations"
            icon={<BellOutlined style={{ fontSize: "1.3rem" }} />}
          >
            <Link className="routelink" to="/organizations">
              {" "}
              Organizations
            </Link>
          </Menu.Item>

          <Menu.Item
            key="Users"
            icon={<TeamOutlined style={{ fontSize: "1.3rem" }} />}
          >
            <Link className="routelink" to="/users">
              Users
            </Link>
          </Menu.Item>
          <hr
            style={{
              border: "1px solid #E6E9EF",
              bottom: "0px",
            }}
          />
          <Menu.Item
            style={{
              display: "flex",
              bottom: "0px",
              // position:'fixed',
              // verticalAlign: "bottom",
              padding: "1.5rem",
            }}
            icon={
              <TeamOutlined
                style={{
                  fontSize: "1.3rem",
                  width: "48px",
                  height: "48px",
                  left: " 0px",
                  top: "0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#F5F5F5",
                  borderRadius: "10px",
                }}
              />
            }
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ lineHeight: "1.5715" }}>
                <div>
                  <b>Leroy Sane</b>
                </div>
                <div>Doctor</div>
              </div>

              <Dropdown overlay={menu} trigger={["click"]}>
                <span
                  className="ant-dropdown-link"
                  style={{ marginTop: "-5px" }}
                  onClick={(e) => e.preventDefault()}
                >
                  <DownOutlined
                    style={{ marginTop: "-5px", fontSize: "14px" }}
                  />
                </span>
              </Dropdown>
            </div>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* <Header
          className="site-layout-background"
          style={{ padding: '14px' }}
        ><SearchField/><hr
        style={{
          border: "1px solid #E5E5E5",
          bottom: "0px",
        }}
      /><Headers/> </Header>*/}
        <Content className="site-layout-background">
          <AsideRoutes />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
