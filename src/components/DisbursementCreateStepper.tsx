// React Hooks
import { ReactNode, useContext } from "react";

// MUI
import {
    Stack,
    Typography,
    Stepper,
    Step,
    StepLabel,
    Button,
} from "@mui/material";
import DisbursementCreateStepperContext from "@/contexts/DisbursementCreateStepperContext";

const DisbursementCreateStepper = () => {
    const { steps, activeStep, handleNext } = useContext(
        DisbursementCreateStepperContext
    );

    return (
        <Stack px="40px" py="19px">
            <Stepper
                activeStep={activeStep}
                alternativeLabel
                sx={{
                    "& .MuiStepLabel-label": {
                        fontSize: "0.8rem",
                    },
                }}
            >
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: ReactNode;
                        error?: boolean;
                    } = {};

                    if (index === 3) {
                        labelProps.optional = (
                            <Typography variant="caption" color="info.main">
                                (Submit Request)
                            </Typography>
                        );
                        // labelProps.error = true;
                    }

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Stack>
    );
};

export default DisbursementCreateStepper;
