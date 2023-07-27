import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { routeMenu } from "@/utils/routeMenu";
import { NavLink } from "react-router-dom";
import NavbarNestedMenu from "./NavbarNestedMenu";

export default function NavbarMenu() {
    return (
        <List
            sx={{
                width: "100%",
                maxWidth: 360,
                color: "common.white",
                p: "24px 16px",
                boxSizing: "border-box",
                "& .MuiListItemIcon-root": {
                    color: "common.white",
                },
            }}
            aria-labelledby="nested-list-subheader"
        >
            {routeMenu.map((menu) => {
                if (!menu.nested) {
                    return (
                        <ListItemButton
                            key={menu.label}
                            component={NavLink}
                            to={menu.path}
                            sx={{
                                borderRadius: "4px",
                                px: "48px",
                                "&.active": {
                                    backgroundColor: "secondary.main",
                                    color: "primary.main",
                                    ".MuiListItemIcon-root": {
                                        color: "primary.main",
                                    },
                                },
                            }}
                        >
                            <ListItemIcon>{menu.icon}</ListItemIcon>
                            <ListItemText primary={menu.label} />
                        </ListItemButton>
                    );
                } else if (menu.nested) {
                    return <NavbarNestedMenu key={menu.label} menu={menu} />;
                }
            })}
        </List>
    );
}
