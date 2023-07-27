import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";

type Submenu = {
    label: string;
    path: string;
};

type WithSubmenu = {
    nested: true;
    submenu: Submenu[];
};

type RouteMenu = {
    label: string;
    icon?: JSX.Element;
} & WithSubmenu;

type Props = {
    menu: RouteMenu;
};

const NavbarNestedMenu = ({ menu }: Props) => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton
                onClick={handleClick}
                sx={{
                    borderRadius: "4px",
                    px: "48px",
                }}
            >
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.label} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {menu.submenu.map((submenu) => (
                        <ListItemButton
                            key={submenu.label}
                            component={NavLink}
                            to={submenu.path}
                            sx={{
                                borderRadius: "4px",
                                px: "48px",
                                pl: 13,
                                "&.active": {
                                    backgroundColor: "secondary.main",
                                    color: "primary.main",
                                    ".MuiListItemIcon-root": {
                                        color: "primary.main",
                                    },
                                },
                            }}
                        >
                            <ListItemText primary={submenu.label} />
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </>
    );
};

export default NavbarNestedMenu;
