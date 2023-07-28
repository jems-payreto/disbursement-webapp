import DisbursementCreateStepperContext from "@/contexts/DisbursementCreateStepperContext";
import { Stack, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const StatusForm = () => {
    const { handleReset } = useContext(DisbursementCreateStepperContext);
    const handleCreateNew = () => {
        handleReset();
    };

    return (
        <Stack gap="16px" height="100%" minHeight="100vh">
            <Stack px="40px" py="19px" flex={1}>
                <Stack gap="30px" p="16px" bgcolor="#526D82" borderRadius="4px">
                    <Typography
                        component="p"
                        color="#DDE6ED"
                        fontSize="16px"
                        fontWeight={400}
                        lineHeight="24px"
                    >
                        Your reference ID is{" "}
                        <Typography component="span" fontWeight={700}>
                            RPF-2023-0001.
                        </Typography>
                    </Typography>
                    <Stack>
                        <Typography
                            component="p"
                            color="#DDE6ED"
                            fontSize="16px"
                            fontWeight={400}
                            lineHeight="24px"
                        >
                            The request has been submitted and is{" "}
                            <Typography component="span" fontWeight={700}>
                                awaiting verification
                            </Typography>
                            .
                        </Typography>
                        <Typography
                            component="p"
                            color="#DDE6ED"
                            fontSize="16px"
                            fontWeight={400}
                            lineHeight="24px"
                        >
                            Please allow 24-48 hours for processing then check
                            back later.
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            {/* Buttons */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                bgcolor="rgba(221, 230, 237, 0.60)"
                px="40px"
                py="19px"
            >
                <Button
                    onClick={handleReset}
                    variant="contained"
                    sx={{ py: "8px" }}
                >
                    Create New
                </Button>

                <Button
                    component={NavLink}
                    to="/disbursement/lists"
                    variant="contained"
                    sx={{ py: "8px" }}
                >
                    List
                </Button>
            </Stack>
        </Stack>
    );
};

export default StatusForm;
