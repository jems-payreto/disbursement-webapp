import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GridViewIcon from "@mui/icons-material/GridView";

type Submenu = {
    label: string;
    path: string;
};

type WithSubmenu = {
    nested: true;
    submenu: Submenu[];
};

type WithoutSubmenu = {
    path: string;
    nested: false;
};
type RouteMenu = {
    label: string;
    icon?: JSX.Element;
} & (WithSubmenu | WithoutSubmenu);

export const routeMenu: RouteMenu[] = [
    {
        label: "Dashboard",
        path: "/",
        icon: <DashboardIcon />,
        nested: false,
    },
    {
        label: "Disbursement",
        // path: "/disbursement",
        submenu: [
            { label: "Create", path: "/disbursement/create" },
            { label: "List", path: "/disbursement/lists" },
        ],
        icon: <InsertDriveFileIcon />,
        nested: true,
    },
    {
        label: "Reports",
        path: "/reports",
        icon: <AssessmentIcon />,
        nested: false,
    },
    {
        label: "Configuration",
        // path: "/configuration",
        submenu: [
            { label: "Vendors", path: "/configuration/vendors" },
            { label: "Cost Centers", path: "/configuration/cost-centers" },
            { label: "Payee Profile", path: "/configuration/payee-profile" },
            {
                label: "User Management",
                path: "/configuration/user-management",
            },
        ],
        icon: <GridViewIcon />,
        nested: true,
    },
];
