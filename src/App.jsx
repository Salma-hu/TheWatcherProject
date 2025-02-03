import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/Component/layout";
import HomePage from "@/Component/home/page";
import AnalyticsOverview from "@/Component/analytics/AnalyticsOverview";
import ScanScope from "@/Component/ScanScope";
import LoginPage from "@/Component/home/LoginPage";

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
                    path: "AnalyticsOverview",
                    element: <AnalyticsOverview />,
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
                {
                    path: "login", 
                    element: <LoginPage />,
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



