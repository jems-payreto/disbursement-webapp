import { createContext, useReducer } from "react";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

type State = {
    steps: string[];
    activeStep: number;
    handleNext: () => void;
    handlePrevious: () => void;
    handleReset: () => void;
};

type Action = {
    type: "nextStep" | "previousStep" | "resetStep";
};

// eslint-disable-next-line react-refresh/only-export-components
export const initialValues = {
    steps: ["Basic requirements", "File requirements", "Preview", "Status"],
    activeStep: 0,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleNext: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handlePrevious: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    handleReset: () => {},
};

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "nextStep":
            return { ...state, activeStep: state.activeStep + 1 };
        case "previousStep":
            return { ...state, activeStep: state.activeStep - 1 };
        case "resetStep":
            return { ...state, activeStep: 0 };

        default:
            return state;
    }
}

const DisbursementCreateStepperContext = createContext(initialValues);

export const DisbursementCreateStepperContextProvider = ({
    children,
}: Props) => {
    const [state, dispatch] = useReducer(reducer, initialValues);

    return (
        <DisbursementCreateStepperContext.Provider
            value={{
                steps: state.steps,
                activeStep: state.activeStep,
                handleNext: () => {
                    dispatch({ type: "nextStep" });
                },
                handlePrevious: () => {
                    dispatch({ type: "previousStep" });
                },
                handleReset: () => {
                    dispatch({ type: "resetStep" });
                },
            }}
        >
            {children}
        </DisbursementCreateStepperContext.Provider>
    );
};

export default DisbursementCreateStepperContext;
