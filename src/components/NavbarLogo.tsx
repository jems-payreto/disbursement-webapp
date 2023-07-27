import { Toolbar, Typography, Stack } from "@mui/material";

import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";

const NavbarLogo = () => {
    return (
        <Toolbar sx={{ py: 2 }}>
            <Stack direction="row" gap="8px" alignItems="center">
                <BusinessCenterOutlinedIcon sx={{ color: "common.white" }} />
                <Typography
                    fontSize="24px"
                    fontWeight={600}
                    color="common.white"
                    textTransform="uppercase"
                >
                    Disbursement
                </Typography>
            </Stack>
        </Toolbar>
    );
};

export default NavbarLogo;
