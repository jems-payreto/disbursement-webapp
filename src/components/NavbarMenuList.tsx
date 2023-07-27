import { Stack } from "@mui/material";

import NavbarMenu from "./NavbarMenu";
import NavbarLogo from "./NavbarLogo";

const NavbarMenuList = () => {
    return (
        <Stack gap="48px">
            <NavbarLogo />
            <Stack sx={{ bgcolor: "primary.main" }}>
                <NavbarMenu />
            </Stack>
        </Stack>
    );
};

export default NavbarMenuList;
