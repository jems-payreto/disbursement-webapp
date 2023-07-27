// MUI
import { TextField, Stack, Typography, MenuItem } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// React Hook Form
import { Controller, UseFormReturn } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import type { DisbursementFormValues } from "@/types";

type Props = {
    form: UseFormReturn<DisbursementFormValues>;
};

const Create = ({ form }: Props) => {
    const { register, formState, control } = form;

    const { errors } = formState;

    return (
        <>
            {/* Input Fields */}
            <Stack py="16px" px="40px" gap="16px">
                {/* Due Date Field */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Controller
                        name="dueDate"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Stack gap="4px">
                                <Typography
                                    component="label"
                                    textTransform="uppercase"
                                    fontSize="14px"
                                    lineHeight="22px"
                                >
                                    due date
                                </Typography>
                                <DatePicker
                                    value={value}
                                    onChange={(e) => onChange(e)}
                                />
                            </Stack>
                        )}
                    />
                </LocalizationProvider>

                {/* Payee Field */}
                <Stack gap="4px">
                    <Typography
                        component="label"
                        textTransform="uppercase"
                        fontSize="14px"
                        lineHeight="22px"
                        color={
                            // eslint-disable-next-line no-extra-boolean-cast
                            !!errors.payee ? "error.main" : "primary.main"
                        }
                    >
                        payee
                    </Typography>
                    <TextField
                        type="text"
                        placeholder="Payee Name"
                        InputLabelProps={{ shrink: true }}
                        {...register("payee")}
                        error={!!errors.payee}
                        helperText={errors.payee?.message}
                    />
                </Stack>

                {/* Cost Center Field */}
                <Controller
                    name="costCenter"
                    control={control}
                    render={({ field }) => (
                        <Stack gap="4px">
                            <Typography
                                component="label"
                                textTransform="uppercase"
                                fontSize="14px"
                                lineHeight="22px"
                                color={
                                    // eslint-disable-next-line no-extra-boolean-cast
                                    !!errors.costCenter
                                        ? "error.main"
                                        : "primary.main"
                                }
                            >
                                cost center
                            </Typography>
                            <TextField
                                select
                                {...field}
                                error={!!errors.costCenter}
                                helperText={errors.costCenter?.message}
                            >
                                <MenuItem value={"none"} disabled>
                                    Select one...
                                </MenuItem>
                                <MenuItem value={"center1"}>Center 1</MenuItem>
                                <MenuItem value={"center2"}>Center 2</MenuItem>
                                <MenuItem value={"center3"}>Center 3</MenuItem>
                            </TextField>
                        </Stack>
                    )}
                />

                {/* Vendor Field */}
                <Controller
                    name="vendor"
                    control={control}
                    render={({ field }) => (
                        <Stack gap="4px">
                            <Typography
                                component="label"
                                textTransform="uppercase"
                                fontSize="14px"
                                lineHeight="22px"
                                color={
                                    // eslint-disable-next-line no-extra-boolean-cast
                                    !!errors.vendor
                                        ? "error.main"
                                        : "primary.main"
                                }
                            >
                                vendor
                            </Typography>
                            <TextField
                                select
                                InputLabelProps={{ shrink: true }}
                                {...field}
                                error={!!errors.vendor}
                                helperText={errors.vendor?.message}
                            >
                                <MenuItem value={"none"} disabled>
                                    Select one...
                                </MenuItem>
                                <MenuItem value={"vendor1"}>Vendor 1</MenuItem>
                                <MenuItem value={"vendor2"}>Vendor 2</MenuItem>
                                <MenuItem value={"vendor3"}>Vendor 3</MenuItem>
                            </TextField>
                        </Stack>
                    )}
                />

                {/* Amount Field */}
                <Stack gap="4px">
                    <Typography
                        component="label"
                        textTransform="uppercase"
                        fontSize="14px"
                        lineHeight="22px"
                        color={
                            // eslint-disable-next-line no-extra-boolean-cast
                            !!errors.amount ? "error.main" : "primary.main"
                        }
                    >
                        amount
                    </Typography>
                    <TextField
                        type="number"
                        placeholder="Enter amount..."
                        InputLabelProps={{ shrink: true }}
                        {...register("amount")}
                        error={!!errors.amount}
                        helperText={errors.amount?.message}
                    />
                </Stack>

                {/* Particulars Field */}
                <Stack gap="4px">
                    <Typography
                        component="label"
                        textTransform="uppercase"
                        fontSize="14px"
                        lineHeight="22px"
                        color={
                            // eslint-disable-next-line no-extra-boolean-cast
                            !!errors.particulars ? "error.main" : "primary.main"
                        }
                    >
                        particulars
                    </Typography>
                    <TextField
                        multiline
                        rows={10}
                        {...register("particulars")}
                        error={!!errors.particulars}
                        helperText={errors.particulars?.message}
                    />
                </Stack>

                {/* Payment Mode Field */}
                <Controller
                    name="paymentMode"
                    control={control}
                    render={({ field }) => (
                        <Stack gap="4px">
                            <Typography
                                component="label"
                                textTransform="uppercase"
                                fontSize="14px"
                                lineHeight="22px"
                                color={
                                    // eslint-disable-next-line no-extra-boolean-cast
                                    !!errors.paymentMode
                                        ? "error.main"
                                        : "primary.main"
                                }
                            >
                                payment mode
                            </Typography>
                            <TextField
                                select
                                {...field}
                                error={!!errors.paymentMode}
                                helperText={errors.paymentMode?.message}
                            >
                                <MenuItem value={"none"} disabled>
                                    Select a payment mode...
                                </MenuItem>
                                <MenuItem value={"mode1"}>Payment 1</MenuItem>
                                <MenuItem value={"mode2"}>Payment 2</MenuItem>
                                <MenuItem value={"mode3"}>Payment 3</MenuItem>
                            </TextField>
                        </Stack>
                    )}
                />
            </Stack>

            <DevTool control={control} />
        </>
    );
};

export default Create;
