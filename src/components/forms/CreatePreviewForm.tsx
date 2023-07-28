// React
import { useContext } from "react";

// MUI
import { Button, Stack, Grid, Typography } from "@mui/material";

// React Hook Form
import { useForm, SubmitHandler } from "react-hook-form";

// Types
import type {
    DisbursementFileRequirementFormValues,
    DisbursementFormValues,
} from "@/types";

// Contexts
import DisbursementCreateStepperContext from "@/contexts/DisbursementCreateStepperContext";

const CreatePreviewForm = () => {
    const { handleNext } = useContext(DisbursementCreateStepperContext);

    const form = useForm<DisbursementFormValues>({
        defaultValues: {
            requirements: [{ fileType: "none", file: "" }],
        },
    });

    const { handleSubmit } = form;

    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/require-await
    const onSumbit: SubmitHandler<
        DisbursementFileRequirementFormValues
    > = async (
        data
        // eslint-disable-next-line @typescript-eslint/require-await
    ) => {
        console.log("data", data);
        handleNext();
    };

    return (
        <Stack
            component="form"
            noValidate
            gap="16px"
            height="100%"
            minHeight="100vh"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={handleSubmit(onSumbit)}
        >
            <Stack flex={1}>
                <Grid container spacing="24px" px="40px" py="19px">
                    <Grid item xs={6}>
                        <Stack gap="2px">
                            <Typography
                                fontSize="12px"
                                lineHeight="20px"
                                textTransform="uppercase"
                                fontWeight={300}
                            >
                                due date
                            </Typography>
                            <Typography
                                fontSize="16px"
                                lineHeight="24px"
                                fontWeight={400}
                            >
                                08/01/2023
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack gap="2px">
                            <Typography
                                fontSize="12px"
                                lineHeight="20px"
                                textTransform="uppercase"
                                fontWeight={300}
                            >
                                due created
                            </Typography>
                            <Typography
                                fontSize="16px"
                                lineHeight="24px"
                                fontWeight={400}
                            >
                                07/21/2023
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack gap="2px">
                            <Typography
                                fontSize="12px"
                                lineHeight="20px"
                                textTransform="uppercase"
                                fontWeight={300}
                            >
                                payee
                            </Typography>
                            <Typography
                                fontSize="16px"
                                lineHeight="24px"
                                fontWeight={400}
                            >
                                Johnny Silverhand
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack gap="2px">
                            <Typography
                                fontSize="12px"
                                lineHeight="20px"
                                textTransform="uppercase"
                                fontWeight={300}
                            >
                                vendor
                            </Typography>
                            <Typography
                                fontSize="16px"
                                lineHeight="24px"
                                fontWeight={400}
                            >
                                National Bookstore
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack gap="2px">
                            <Typography
                                fontSize="12px"
                                lineHeight="20px"
                                textTransform="uppercase"
                                fontWeight={300}
                            >
                                cost center
                            </Typography>
                            <Typography
                                fontSize="16px"
                                lineHeight="24px"
                                fontWeight={400}
                            >
                                Office Administration - 5000
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack gap="2px">
                            <Typography
                                fontSize="12px"
                                lineHeight="20px"
                                textTransform="uppercase"
                                fontWeight={300}
                            >
                                amount
                            </Typography>
                            <Typography
                                fontSize="16px"
                                lineHeight="24px"
                                fontWeight={400}
                            >
                                Php 11,000.00
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack gap="2px">
                            <Typography
                                fontSize="12px"
                                lineHeight="20px"
                                textTransform="uppercase"
                                fontWeight={300}
                            >
                                particulars
                            </Typography>
                            <Typography
                                fontSize="16px"
                                lineHeight="24px"
                                fontWeight={400}
                            >
                                Neque porro quisquam est, qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit, sed
                                qu
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack gap="2px">
                            <Typography
                                fontSize="12px"
                                lineHeight="20px"
                                textTransform="uppercase"
                                fontWeight={300}
                            >
                                primary requirements
                            </Typography>
                            <Typography
                                fontSize="16px"
                                lineHeight="24px"
                                fontWeight={400}
                            >
                                Neque porro quisquam est, qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit, sed
                                qu
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack gap="2px">
                            <Typography
                                fontSize="12px"
                                lineHeight="20px"
                                textTransform="uppercase"
                                fontWeight={300}
                            >
                                secondary requirements
                            </Typography>
                            <Typography
                                fontSize="16px"
                                lineHeight="24px"
                                fontWeight={400}
                            >
                                Neque porro quisquam est, qui dolorem ipsum quia
                                dolor sit amet, consectetur, adipisci velit, sed
                                qu
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
            {/* Submit Button */}
            <Stack
                alignItems="flex-end"
                bgcolor="rgba(221, 230, 237, 0.60)"
                px="40px"
                py="19px"
            >
                <Button type="submit" variant="contained" sx={{ py: "8px" }}>
                    Submit
                </Button>
            </Stack>
        </Stack>
    );
};

export default CreatePreviewForm;
