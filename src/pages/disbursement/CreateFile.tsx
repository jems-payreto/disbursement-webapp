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
import {
    useForm,
    SubmitHandler,
    Controller,
    useFieldArray,
    Resolver,
} from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";

// Types
import type { DisbursementFormFileValues } from "@/types";
type FileDisbursementResolver = Resolver<DisbursementFormFileValues>;

// Schema
import { createFileDisbursement } from "@/validations/createFileDisbursement";

const fileDisbursementResolver: FileDisbursementResolver = yupResolver(
    createFileDisbursement
);

const CreateFile = () => {
    const form = useForm<DisbursementFormFileValues>({
        defaultValues: {
            requirements: [{ fileType: "none", file: "" }],
        },
        // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // // @ts-ignore
        resolver: fileDisbursementResolver,
    });

    const { handleSubmit, formState, control } = form;

    const { errors } = formState;

    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/require-await
    const onSumbit: SubmitHandler<DisbursementFormFileValues> = async (
        data
        // eslint-disable-next-line @typescript-eslint/require-await
    ) => {
        console.log("data", data);
    };

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

            {/* Create Form */}
            <Stack
                component="form"
                noValidate
                gap="16px"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onSubmit={handleSubmit(onSumbit)}
            >
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
                                                    !!errors.requirements?.[
                                                        index
                                                    ]?.fileType
                                                }
                                                helperText={
                                                    errors.requirements?.[index]
                                                        ?.fileType?.message
                                                }
                                            >
                                                <MenuItem
                                                    value={"none"}
                                                    disabled
                                                >
                                                    Select type...
                                                </MenuItem>
                                                <MenuItem
                                                    value={"official receipt"}
                                                >
                                                    Official Receipt
                                                </MenuItem>
                                                <MenuItem
                                                    value={"sales invoice"}
                                                >
                                                    Sales Invoice
                                                </MenuItem>
                                                <MenuItem
                                                    value={"bir form 2316"}
                                                >
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
                                                    !!errors.requirements?.[
                                                        index
                                                    ]?.file
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

export default CreateFile;
