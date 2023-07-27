import {
    TextField,
    Button,
    Stack,
    Typography,
    MenuItem,
    FormControl,
} from "@mui/material";

import * as React from "react";

type Props = {
    label: string;
    children: React.ReactElement;
};

const CustomFormInput = ({ label, children }: Props) => {
    return (
        <FormControl sx={{ gap: "4px" }}>
            <Typography
                component="label"
                htmlFor="test"
                lineHeight="22px"
                textTransform="uppercase"
                fontSize="14px"
            >
                {label}
            </Typography>
            {children}
        </FormControl>
    );
};

export default CustomFormInput;
