import { DisbursementFormValues } from "@/types";
import { Dayjs } from "dayjs";
import * as yup from "yup";

export const createDisbursement: yup.ObjectSchema<DisbursementFormValues> = yup
    .object()
    .shape({
        dueDate: yup.mixed<Dayjs>().required("Date is required"),
        payee: yup.string().required("Payee is required."),
        costCenter: yup
            .string()
            .test("required", "Cost Center is required.", (value) => {
                if (value === "none") {
                    return false;
                }

                return true;
            }),
        vendor: yup
            .string()
            .test("required", "Vendor is required.", (value) => {
                if (value === "none") {
                    return false;
                }

                return true;
            }),
        amount: yup
            .string()
            .test("required", "Amount is required.", (value) => {
                if (value === "") {
                    return false;
                }

                return true;
            }),
        particulars: yup.string().required("Particulars is required."),
        paymentMode: yup
            .string()
            .test("required", "Payment Mode is required.", (value) => {
                if (value === "none") {
                    return false;
                }

                return true;
            }),
    });
