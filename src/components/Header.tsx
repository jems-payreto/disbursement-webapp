import { useContext } from "react";
import { Toolbar, IconButton, Stack, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerContext from "@/contexts/DrawerContext";
import HeaderSearch from "./HeaderSearch";
import HeaderProfile from "./HeaderProfile";

const Header = () => {
    const { toggleDrawer } = useContext(DrawerContext);

    return (
        <Toolbar sx={{ py: 2 }}>
            <Container maxWidth="lg">
                <Stack direction="row" gap="8px">
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleDrawer}
                        sx={{
                            mr: 2,
                            display: { md: "none" },
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Stack
                        direction="row"
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        flex={1}
                        gap="10px"
                    >
                        <HeaderSearch />

                        <HeaderProfile />
                    </Stack>
                </Stack>
            </Container>
        </Toolbar>
    );
};

export default Header;
