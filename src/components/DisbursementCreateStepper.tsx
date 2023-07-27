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
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: ReactNode;
                        error?: boolean;
                    } = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
        </Stack>
    );
};

export default DisbursementCreateStepper;
