import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import HomePage from "@/routes/home/page";
import HourlyChart from "@/routes/analytics/HourlyChart";
import YesterdayChart from "@/routes/analytics/YesterdayChart";
import ChartWeek from "@/routes/analytics/ChartWeek";
import ScanScope from "@/routes/ScanScope";
import LoginPage from "@/routes/home/LoginPage";

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
                    path: "HourlyChart",
                    element: <HourlyChart />,
                },

                {
                    path: "YesterdayChart",
                    element: <YesterdayChart />,
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



