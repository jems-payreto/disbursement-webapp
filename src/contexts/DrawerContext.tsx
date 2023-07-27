import { createContext, useReducer } from "react";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

type State = {
    mobileOpen: boolean;
    drawerWidth: number;
    toggleDrawer: () => void;
};

type Action = {
    type: "toggle";
};

// eslint-disable-next-line react-refresh/only-export-components
export const initialValues = {
    mobileOpen: false,
    drawerWidth: 348,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleDrawer: () => {},
};

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "toggle":
            return { ...state, mobileOpen: !state.mobileOpen };

        default:
            return state;
    }
}

const DrawerContext = createContext(initialValues);

export const DrawerContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(reducer, initialValues);

    return (
        <DrawerContext.Provider
            value={{
                mobileOpen: state.mobileOpen,
                drawerWidth: state.drawerWidth,
                toggleDrawer: () => {
                    dispatch({ type: "toggle" });
                },
            }}
        >
            {children}
        </DrawerContext.Provider>
    );
};

export default DrawerContext;
