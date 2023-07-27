import { createTheme, colors } from "@mui/material";

const theme = createTheme({
    status: {
        danger: "#e53e3e",
    },
    palette: {
        primary: { main: "#27374D" },
        secondary: { main: "#526D82" },
        neutral: { main: colors.red["500"], darker: colors.red["900"] },
        background: {
            default: "#F8F8F8",
        },
    },
    typography: {
        fontFamily: "'Lexend', 'sans-serif';",
    },
    breakpoints: {
        values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    },
});

export default theme;
