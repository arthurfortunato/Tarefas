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

import { FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GrNotes } from "react-icons/gr";

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
              <MenuItem icon={<GrNotes />}>
                <Link to="/" className="link">
                  Editais
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