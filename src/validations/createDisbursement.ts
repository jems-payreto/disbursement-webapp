import { DisbursementFormValues } from "@/types";
import { Dayjs } from "dayjs";
import * as yup from "yup";

const MAX_FILE_SIZE = 102400; //100KB

const validFileExtensions = {
    image: [
        "jpg",
        "gif",
        "png",
        "jpeg",
        "svg",
        "webp",
        "pdf",
        "doc",
        "docx",
        "csv",
    ],
};

function isValidFileType(fileName, fileType) {
    return (
        fileName &&
        validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
    );
}

const RequirementSchema = yup.object().shape({
    fileType: yup
        .string()
        .required()
        .test("required", "File type is required.", (value) => {
            if (value === "none") {
                return false;
            }

            return true;
        }),
    file: yup
        .mixed<string | File>()
        .required()
        .test("required", "File is required", (value) => {
            if (!value) {
                return false;
            }

            return true;
        })
        .test("is-valid-type", "Not a valid image type", (value) =>
            isValidFileType(value && value.name.toLowerCase(), "image")
        )
        .test(
            "is-valid-size",
            "Max allowed size is 100KB",
            (value) => value && value.size <= MAX_FILE_SIZE
        ),
});

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
        requirements: yup
            .array()
            .of(RequirementSchema)
            .required("Requirements are required."),
    });
