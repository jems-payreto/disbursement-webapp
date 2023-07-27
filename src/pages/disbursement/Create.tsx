// React
import { useState } from "react";

// MUI
import { Button, Stack, Typography, Paper } from "@mui/material";

// Day JS
import dayjs from "dayjs";

// React Hook Form
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";

// Api
import {
    useCreateDisbursementMutation,
    useGetDisbursementQuery,
} from "@/app/services/api";

import DisbursementCreateStepper from "@components/DisbursementCreateStepper";

import DisbursementCreateStepOne from "@components/DisbursementCreateStepOne";

// Types
import type { DisbursementFormValues } from "@/types";
type DisbursementResolver = Resolver<DisbursementFormValues>;

// Validations
import { createDisbursement } from "@/validations/createDisbursement";

const Create = () => {
    // Initialize create api
    const [create] = useCreateDisbursementMutation();

    // Fetch initial values
    const { data } = useGetDisbursementQuery(undefined, {
        selectFromResult: ({ data }) => ({
            // Format duedate
            data: { ...data, dueDate: dayjs(data?.dueDate) },
        }),
    });

    const disbursementResolver: DisbursementResolver =
        yupResolver(createDisbursement);

    // Initial values
    const formValues: DisbursementFormValues = {
        dueDate: data?.dueDate || dayjs(Date.now()),
        payee: data?.payee || "",
        costCenter: data?.costCenter || "none",
        vendor: data?.vendor || "none",
        amount: data?.amount || 0,
        particulars: data?.particulars || "",
        paymentMode: data?.paymentMode || "none",
        requirements: [{ fileType: "none", file: "" }],
    };

    const form = useForm<DisbursementFormValues>({
        defaultValues: {
            dueDate: dayjs(Date.now()),
            payee: "",
            costCenter: "none",
            vendor: "none",
            amount: undefined,
            particulars: "",
            paymentMode: "none",
            requirements: [{ fileType: "none", file: "" }],
        },
        // values: formValues,
        resolver: disbursementResolver,
    });

    const { handleSubmit, control } = form;

    const onSumbit: SubmitHandler<DisbursementFormValues> = async (data) => {
        await create(data)
            .unwrap()
            .then((res) => console.log("res", res))
            .catch((err) => console.log("err", err));
    };

    return (
        <Paper sx={{ my: "24px" }}>
            <Stack px="40px" py="19px" bgcolor="rgba(221, 230, 237, 0.60)">
                <Typography
                    component="h3"
                    textTransform="uppercase"
                    fontSize="14px"
                    lineHeight="22px"
                >
                    request for payment
                </Typography>
            </Stack>

            {/* Stepper */}
            <DisbursementCreateStepper />

            {/* Create Form */}
            <Stack
                component="form"
                noValidate
                gap="16px"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onSubmit={handleSubmit(onSumbit)}
            >
                {/* Input Fields */}
                <DisbursementCreateStepOne form={form} />

                {/* Submit Button */}
                <Stack
                    alignItems="flex-end"
                    bgcolor="rgba(221, 230, 237, 0.60)"
                    px="40px"
                    py="19px"
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ py: "8px" }}
                    >
                        Next
                    </Button>
                </Stack>

                <DevTool control={control} />
            </Stack>
        </Paper>
    );
};

export default Create;
