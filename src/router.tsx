import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import PageLayout from "./layouts/PageLayout";
import DashboardPage from "./pages/DashboardPage";
import { DrawerContextProvider } from "./contexts/DrawerContext";
import { DisbursementCreateStepperContextProvider } from "./contexts/DisbursementCreateStepperContext";
import DisbursementCreate from "./pages/disbursement/Create";
import DisbursementCreateFile from "./pages/disbursement/CreateFile";
import ErrorrBoundary from "./components/ErrorrBoundary";

const routes = createRoutesFromElements(
    <Route path="/">
        <Route path="auth" element={<AuthLayout />}></Route>

        <Route
            element={
                <DrawerContextProvider>
                    <PageLayout />
                </DrawerContextProvider>
            }
        >
            {/* Dashboard */}
            <Route index element={<DashboardPage />} />

            {/* Disbursement */}
            <Route path="disbursement">
                <Route path="lists">
                    <Route path=":id">
                        <Route path="edit" />
                    </Route>
                </Route>
                <Route
                    path="create"
                    element={
                        <DisbursementCreateStepperContextProvider>
                            <DisbursementCreate />
                        </DisbursementCreateStepperContextProvider>
                    }
                />
                <Route
                    path="create-file"
                    element={<DisbursementCreateFile />}
                    errorElement={<ErrorrBoundary />}
                />
            </Route>

            {/* Reports */}
            <Route path="reports">
                <Route path="lists" />
            </Route>

            {/* Configuration */}
            <Route path="configuration">
                <Route path="vendors" />
                <Route path="cost-centers" />
                <Route path="payee-profile" />
                <Route path="user-management" />
            </Route>
        </Route>
    </Route>
);

const router = createBrowserRouter(routes, {
    future: {
        // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
        v7_normalizeFormMethod: true,
    },
});

export default router;
