// React
import { useContext, useEffect } from "react";

// MUI
import { Button, Stack, Typography, Paper } from "@mui/material";

// Day JS
import dayjs from "dayjs";

// React Hook Form
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";

// Api
// import {
//     useCreateDisbursementMutation,
//     useGetDisbursementQuery,
// } from "@/app/services/api";

// Components
import DisbursementCreateStepper from "@components/DisbursementCreateStepper";
import DisbursementCreateStepOne from "@components/DisbursementCreateStepOne";

import CreateBasicRequirementsForm from "@components/forms/CreateBasicRequirementsForm";
import CreateFileRequirementsForm from "@components/forms/CreateFileRequirementsForm";

// Types
import type { DisbursementFormValues } from "@/types";
type DisbursementResolver = Resolver<DisbursementFormValues>;

// Contexts
import DisbursementCreateStepperContext from "@/contexts/DisbursementCreateStepperContext";
import CreatePreviewForm from "@/components/forms/CreatePreviewForm";
import StatusForm from "@/components/forms/StatusForm";
import { ScrollRestoration } from "react-router-dom";
import { useTestQuery } from "@/features/disbursement/disbursementApiSlice";

const Create = () => {
    const { activeStep } = useContext(DisbursementCreateStepperContext);

    // Initialize create api
    // const [create] = useCreateDisbursementMutation();

    // // Fetch initial values
    // const { data } = useGetDisbursementQuery(undefined, {
    //     selectFromResult: ({ data }) => ({
    //         // Format duedate
    //         data: { ...data, dueDate: data?.dueDate },
    //     }),
    // });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activeStep]);

    const { data, error } = useTestQuery(null);

    console.log("data", data);
    console.log("error", error);

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

            {activeStep === 0 && (
                // Basic Requirements Form
                <CreateBasicRequirementsForm />
            )}

            {activeStep === 1 && (
                // Primary File Requirements Form
                <CreateFileRequirementsForm />
            )}

            {activeStep === 2 && (
                // Secondary File Requirements Form
                <CreateFileRequirementsForm />
            )}
            {activeStep === 3 && (
                // Preview
                <CreatePreviewForm />
            )}
            {activeStep === 4 && (
                // Status
                <StatusForm />
            )}

            <ScrollRestoration />
        </Paper>
    );
};

export default Create;
