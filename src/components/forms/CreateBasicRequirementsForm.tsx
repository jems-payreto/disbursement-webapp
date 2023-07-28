import { useContext } from "react";

// Contexts
import DisbursementCreateStepperContext from "@/contexts/DisbursementCreateStepperContext";

// MUI
import { TextField, Stack, Typography, MenuItem, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// React Hook Form
import { useForm, Controller, Resolver, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";

// Schema
import { createDisbursement } from "@/validations/createDisbursement";

// Types
import type { DisbursementBasicRequirementFormValues } from "@/types";
type DisbursementResolver = Resolver<DisbursementBasicRequirementFormValues>;

// Day JS
import dayjs from "dayjs";

const CreateBasicRequirementsForm = () => {
    const { handleNext } = useContext(DisbursementCreateStepperContext);

    const disbursementResolver: DisbursementResolver =
        yupResolver(createDisbursement);

    // Initial values
    // const formValues: DisbursementBasicRequirementFormValues = {
    //     dueDate: data?.dueDate || dayjs(Date.now()),
    //     payee: data?.payee || "",
    //     costCenter: data?.costCenter || "none",
    //     vendor: data?.vendor || "none",
    //     amount: data?.amount || 0,
    //     particulars: data?.particulars || "",
    //     paymentMode: data?.paymentMode || "none",
    // };

    const form = useForm<DisbursementBasicRequirementFormValues>({
        defaultValues: {
            dueDate: dayjs(Date.now()),
            payee: "",
            costCenter: "none",
            vendor: "none",
            amount: undefined,
            particulars: "",
            paymentMode: "none",
        },
        // values: formValues,
        resolver: disbursementResolver,
    });

    const { register, formState, control, handleSubmit } = form;

    const { errors } = formState;

    // eslint-disable-next-line @typescript-eslint/require-await
    const onSumbit: SubmitHandler<
        DisbursementBasicRequirementFormValues
    > = async (data) => {
        handleNext();
    };

    return (
        <Stack
            component="form"
            noValidate
            gap="16px"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={handleSubmit(onSumbit)}
        >
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

            {/* Submit Button */}
            <Stack
                alignItems="flex-end"
                bgcolor="rgba(221, 230, 237, 0.60)"
                px="40px"
                py="19px"
            >
                <Button
                    type="submit"
                    // onClick={() => handleNext()}
                    variant="contained"
                    sx={{ py: "8px" }}
                >
                    Next
                </Button>
            </Stack>

            <DevTool control={control} />
        </Stack>
    );
};

export default CreateBasicRequirementsForm;
