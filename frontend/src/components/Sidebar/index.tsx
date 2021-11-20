import React, { useState } from "react";
import { Link } from 'react-router-dom';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SidebarFooter
} from "react-pro-sidebar";

import { FaUsers, FaBars } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";

import "react-pro-sidebar/dist/scss/styles.scss";
import './styles.scss';

import { useAuth } from '../../contexts/auth'

const Sidebar = () => {

  const [menuCollapse, setMenuCollapse] = useState(false)

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const { Logout } = useAuth();

  return (
    <>
      <div id="sidebar">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
              <FaBars />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
                <Link to="/" className="link">
                  Home
                </Link>
              </MenuItem>
              <MenuItem icon={<FaUsers />}>
                <Link to="/users" className="link">
                  Users
                </Link>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={Logout}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;