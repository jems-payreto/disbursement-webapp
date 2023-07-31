import { ThemeProvider } from "@mui/material";
// import { useGetUserQuery } from "./app/services/api";
import theme from "./theme";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
    // const { data, status, error } = useGetUserQuery();

    // console.log("data", data);
    // console.log("error", error);
    // console.log("status", status);
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
