import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate, NavLink } from "react-router-dom";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import CommentIcon from "@mui/icons-material/Comment";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CreateIcon from "@mui/icons-material/Create";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const Navbar = () => {
  const navigate = useNavigate();
  const pages = [
    {
      name: "Home",
      path: "/",
      icon: HomeWorkIcon,
    },
    {
      name: "GET Posts",
      path: "/getposts",
      icon: MarkAsUnreadIcon,
    },
    {
      name: "GET Comments",
      path: "/getcomments",
      icon: CommentIcon,
    },
    {
      name: "POST Posts",
      path: "/postposts",
      icon: PostAddIcon,
    },
    {
      name: "PUT Posts",
      path: "/putposts",
      icon: CreateIcon,
    },
    {
      name: "DELETE Posts",
      path: "/deleteposts",
      icon: DeleteForeverIcon,
    },
  ];

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            {pages.map((page) => (
              <NavLink
                key={page.name}
                style={({ isActive }) =>
                  isActive
                    ? {
                        fontWeight: "1000",
                        fontSize: "18px",
                        fontFamily: "roboto",
                        color: "black",
                        flexGrow: 1,
                        textDecoration: "none",
                      }
                    : {
                        fontWeight: "lighter",
                        fontSize: "18px",
                        fontFamily: "roboto",
                        color: "inherit",
                        flexGrow: 1,
                        textDecoration: "none",
                      }
                }
                hidden={page.hidden}
                to={page.path}
              >
                <page.icon style={{ verticalAlign: "middle" }} />
                {page.name}
              </NavLink>
            ))}
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </div>
  );
};
export default Navbar;
