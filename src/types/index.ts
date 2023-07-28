import { Dayjs } from "dayjs";
import { ChangeEvent } from "react";

// Types
export type DisbursementBasicRequirementFormValues = {
    dueDate: Dayjs | ChangeEvent;
    payee: string;
    costCenter: string;
    vendor: string;
    amount: number | undefined;
    particulars: string;
    paymentMode: string;
};

export type DisbursementFileRequirementFormValues = {
    requirements: {
        fileType: string;
        file: string | File;
    }[];
};

export type DisbursementFormValues = DisbursementBasicRequirementFormValues &
    DisbursementFileRequirementFormValues;
