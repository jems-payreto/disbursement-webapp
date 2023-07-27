import type { CSSProperties } from "react";

declare module "@mui/material/styles" {
    // New Theme Option
    interface Theme {
        status: string;
    }

    interface ThemeOptions {
        status: {
            danger: CSSProperties["color"];
        };
    }

    // New Palette Option
    interface Palette {
        neutral?: PaletteColor;
    }

    interface PaletteOptions {
        neutral?: PaletteColorOptions;
    }

    // New Palette Color
    interface SimplePalleteColorOptions {
        darker?: string;
    }

    interface PaletteColor {
        darker?: string;
    }
}
