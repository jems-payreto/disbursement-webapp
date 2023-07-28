// React
import { ChangeEvent } from "react";

// MUI
import {
    TextField,
    Button,
    Stack,
    Typography,
    MenuItem,
    Paper,
    IconButton,
} from "@mui/material";

// Mui Icons
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";

// React Hook Form
import { Controller, useFieldArray, UseFormReturn } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { DisbursementFormValues } from "@/types";

type Props = {
    form: UseFormReturn<DisbursementFormValues>;
};

const DisbursementCreateStepTwo = ({ form }: Props) => {
    const { handleSubmit, formState, control } = form;

    const { errors } = formState;

    const { fields, append, remove } = useFieldArray({
        name: "requirements",
        control,
    });

    const handleAdd = () => {
        append({ fileType: "none", file: "" });
    };

    const handleRemove = (index: number) => {
        remove(index);
    };

    const handleChangeFile = (
        e: ChangeEvent<HTMLInputElement>,
        onChange: (event: string | File | ChangeEvent<Element>) => void
    ) => {
        if (e.target.files && e.target.files.length > 0) {
            onChange(e.target.files[0]);
        }
    };

    return (
        <>
            {/* Input Fields */}
            <Stack py="16px" px="40px" gap="16px">
                {/* Files Field */}
                {fields.map((field, index) => {
                    return (
                        <Stack
                            key={field.id}
                            direction="row"
                            gap="8px"
                            // justifyContent="space-between"
                            alignItems="center"
                        >
                            <Stack direction="row" gap="8px" flex={1}>
                                <Controller
                                    name={`requirements.${index}.fileType`}
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            select
                                            {...field}
                                            placeholder="Select type..."
                                            sx={{ minWidth: "160px" }}
                                            error={
                                                !!errors.requirements?.[index]
                                                    ?.fileType
                                            }
                                            helperText={
                                                errors.requirements?.[index]
                                                    ?.fileType?.message
                                            }
                                        >
                                            <MenuItem value={"none"} disabled>
                                                Select type...
                                            </MenuItem>
                                            <MenuItem
                                                value={"official receipt"}
                                            >
                                                Official Receipt
                                            </MenuItem>
                                            <MenuItem value={"sales invoice"}>
                                                Sales Invoice
                                            </MenuItem>
                                            <MenuItem value={"bir form 2316"}>
                                                BIR Form 2316
                                            </MenuItem>
                                        </TextField>
                                    )}
                                />

                                <Controller
                                    name={`requirements.${index}.file`}
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            type="file"
                                            fullWidth
                                            error={
                                                !!errors.requirements?.[index]
                                                    ?.file
                                            }
                                            helperText={
                                                errors.requirements?.[index]
                                                    ?.file?.message
                                            }
                                            onChange={(
                                                e: ChangeEvent<HTMLInputElement>
                                            ) =>
                                                handleChangeFile(
                                                    e,
                                                    field.onChange
                                                )
                                            }
                                        />
                                    )}
                                />
                            </Stack>

                            <IconButton onClick={() => handleRemove(index)}>
                                <CancelIcon color="error" />
                            </IconButton>
                        </Stack>
                    );
                })}
            </Stack>

            <Stack px="40px" py="19px">
                <Button
                    variant="contained"
                    onClick={handleAdd}
                    sx={{ py: "8px" }}
                >
                    <AddIcon />
                </Button>
            </Stack>
        </>
    );
};

export default DisbursementCreateStepTwo;
