import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

import "./Nav.css";
import { HamburgerIcon } from "@chakra-ui/icons";

function Nav() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
      navigate("/auth/login");
    } catch {
      console.log("Failed to log out");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setShow(true);
        } else setShow(false);
      });
    };
  }, []);

  return (
    <div className={`nav ${show ? "nav_black" : ""}`}>
      <div className="nav_logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="nav_avatar">
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
            _expanded={{ bg: "blue.400" }}
            _focus={{ boxShadow: "outline" }}
          >
            <HamburgerIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>
              Email:
              {currentUser?.email}
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={handleLogout}>Log Out</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default Nav;
