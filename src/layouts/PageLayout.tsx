import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Box, CssBaseline, Toolbar, Container } from "@mui/material";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

import DrawerContext from "@/contexts/DrawerContext";

export default function PageLayout() {
    const { drawerWidth } = useContext(DrawerContext);

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` },
                    bgcolor: "background.default",
                }}
            >
                <Header />
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                aria-label="site navigations"
            >
                <Navbar />
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    height: "100vh",
                }}
            >
                <Container maxWidth="lg" sx={{ pb: "24px" }}>
                    <Toolbar />
                    <Outlet />
                </Container>
            </Box>
        </Box>
    );
}
