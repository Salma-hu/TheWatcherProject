import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/Component/layout";
import HomePage from "@/Component/home/page";
import AnalyticsOverviewScanner from "@/Component/analyticsScanner/AnalyticsOverviewScanner";
import AnalyticsOverviewTrading from "@/Component/analyticsTrading/AnalyticsOverviewTrading";
import ScanScope from "@/Component/ScanScope";
import LoginPage from "@/Component/home/LoginPage";
import RiskManagement from "@/Component/analyticsTrading/RiskManagement";
// import SignUpPage from "@/Component/home/SignUpPage";


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
                    path: "AnalyticsOverviewScanner",
                    element: <AnalyticsOverviewScanner />,
                },
                {
                    path: "AnalyticsOverviewTrading",
                    element: <AnalyticsOverviewTrading />,
                },
                {
                    path: "ScanScope",
                    element: <ScanScope />
                },
                {
                    path: "products",
                    element: <h1 className="title">Trading Bot</h1>,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings</h1>,
                },
                {
                    path: "login", 
                    element: <LoginPage />,
                },
<<<<<<< Updated upstream

                {
                    path: "RiskManagement", 
                    element: <RiskManagement />,
                },
=======
>>>>>>> Stashed changes
                // {
                //     path: "SignUp", 
                //     element: <SignUpPage />,
                // },
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



