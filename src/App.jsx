import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import HomePage from "@/routes/home/page";
import ChartDay from "@/routes/analytics/ChartDay";
import ChartYesterday from "@/routes/analytics/ChartYesterday";
import ChartWeek from "@/routes/analytics/ChartWeek";
import ScanScope from "@/routes/ScanScope";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "ChartDay",
                    element: <ChartDay />,
                },

                {
                    path: "ChartYesterday",
                    element: <ChartYesterday />,
                },
                {
                    path: "ChartWeek",
                    element: <ChartWeek />,
                },
                {
                    path: "ScanScope",
                    element: <ScanScope />
                },
                {
                    path: "products",
                    element: <h1 className="title">Products</h1>,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings</h1>,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;



