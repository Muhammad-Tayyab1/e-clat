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

const { Sider, Content } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  //   const onCollapse = (collapsed) => {
  //     console.log(collapsed);
  //     setCollapsed({ collapsed });
  //     };

  const toggle = () => {
    if (window.innerWidth >= "480px") {
      setCollapsed(false);
    }
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
        className={`sidebar`}
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={() => toggle()}
      >
        <div
          className={` ${
            collapsed === true ? "sidelayout" : "ant-side-Layout"
          }`}
        >
          <div className="header">
            <Link to="/">
              <div className="logo">{collapsed === true ? "" : <Logo />}</div>
            </Link>
            <div className="trigger" onClick={() => toggle()}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
          </div>

          <Menu mode="inline" defaultSelectedKeys={["Home"]}>
            <Menu.Item
              key="Home"
              className="menu-item-content"
              icon={<HomeOutlined style={{ fontSize: "1.3rem" }} />}
            >
              <Link className="routelink" to="/">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item
              className="menu-item-content"
              key="PatientList"
              icon={<UserOutlined style={{ fontSize: "1.3rem" }} />}
            >
              <Link className="routelink" to="/patientList">
                Patient List
              </Link>
            </Menu.Item>
            <Menu.Item
              className="menu-item-content"
              key="Encounters"
              icon={<AccountBookOutlined style={{ fontSize: "1.3rem" }} />}
            >
              <Link className="routelink" to="/encounters">
                {" "}
                Encounters
              </Link>
            </Menu.Item>
            <Menu.Item
              className="menu-item-content"
              key="Pre-Authorization"
              icon={<FileDoneOutlined style={{ fontSize: "1.3rem" }} />}
            >
              <Link to="/pre-authorization"></Link>Pre-Authorization
            </Menu.Item>
            <Menu.Item
              className="menu-item-content"
              key="Claims"
              icon={<FolderOpenOutlined style={{ fontSize: "1.3rem" }} />}
            >
              <Link className="routelink" to="/claims"></Link> Claims
            </Menu.Item>
            <Menu.Item
              className="menu-item-content"
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
              className="menu-item-content"
              icon={<TeamOutlined style={{ fontSize: "1.3rem" }} />}
            >
              <Link className="routelink" to="/users">
                Users
              </Link>
            </Menu.Item>
            <div className="user-div">
              <hr
                style={{
                  border: "1px solid #E6E9EF",
                  bottom: "0px",
                }}
              />
              <div className="profile-div">
                <UserOutlined
                  className={` ${
                    collapsed === true ? "active-profile" : "userProfile"
                  }`}
                />
                &nbsp;
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ lineHeight: "1.5715" }}>
                    <div className="user-name">Leroy Sane</div>
                    <div className="user-title">Doctor</div>
                  </div>
                  &nbsp; &nbsp;
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <span
                      className="ant-dropdown-link"
                      style={{
                        marginTop: "-5px",
                        display: "flex",
                        alignItems: "center",
                        color: "#959595",
                      }}
                      onClick={(e) => e.preventDefault()}
                    >
                      <DownOutlined
                        style={{ marginTop: "-5px", fontSize: "14px" }}
                      />
                    </span>
                  </Dropdown>
                </div>
              </div>
            </div>
          </Menu>
        </div>
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
