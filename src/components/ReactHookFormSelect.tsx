import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { Controller, Control } from "react-hook-form";

import { ReactNode } from "react";

type Props = {
    name?: string;
    label?: string;
    control?: Control;
    defaultValue?: string | number | string[];
    children?: ReactNode;
};

const ReactHookFormSelect = ({
    name = "test",
    label = "test",
    control,
    defaultValue = "test",
    children,
    ...props
}: Props) => {
    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel id="selectOptionLabel">Select Option</InputLabel>
            <Controller
                name="selectOption"
                control={control}
                defaultValue=""
                rules={{ required: "This field is required" }}
                render={({ field }) => {
                    console.log("field", field);
                    return (
                        <Select
                            labelId="selectOptionLabel"
                            label="Select Option"
                            {...field}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>

                            <MenuItem value={"none"}>tae</MenuItem>
                        </Select>
                    );
                }}
            />
        </FormControl>
    );
};
export default ReactHookFormSelect;
