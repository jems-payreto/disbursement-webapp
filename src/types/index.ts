import { Dayjs } from "dayjs";
import { ChangeEvent } from "react";

// Types
export type DisbursementFormValues = {
    dueDate: Dayjs | ChangeEvent;
    payee: string;
    costCenter: string;
    vendor: string;
    amount: number | undefined;
    particulars: string;
    paymentMode: string;
    requirements: {
        fileType: string;
        file: string | File;
    }[];
};

export type DisbursementFormFileValues = {
    requirements: {
        fileType: string;
        file: string | File;
    }[];
};
