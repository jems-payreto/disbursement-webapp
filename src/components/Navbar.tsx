import { useContext } from "react";
import { Drawer } from "@mui/material";
import NavbarMenuList from "./NavbarMenuList";
import DrawerContext from "@/contexts/DrawerContext";

const Navbar = () => {
    const { mobileOpen, drawerWidth, toggleDrawer } = useContext(DrawerContext);

    return (
        <div>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={toggleDrawer}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        bgcolor: (theme) => theme.palette.primary.main,
                    },
                }}
            >
                <NavbarMenuList />
            </Drawer>

            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", md: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        bgcolor: (theme) => theme.palette.primary.main,
                    },
                }}
                open
            >
                <NavbarMenuList />
            </Drawer>
        </div>
    );
};

export default Navbar;
