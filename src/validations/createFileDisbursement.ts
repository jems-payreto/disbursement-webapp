import * as yup from "yup";

type FormValues = {
    requirements: {
        fileType: string;
        file: string | File;
    }[];
};

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

export const createFileDisbursement: yup.ObjectSchema<FormValues> = yup
    .object()
    .shape({
        requirements: yup
            .array()
            .of(RequirementSchema)
            .required("Requirements are required."),
    });
