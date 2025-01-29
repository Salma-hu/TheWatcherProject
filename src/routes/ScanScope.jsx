import { useTheme } from "@/hooks/use-theme";  
import React from 'react';


const ScanScope = () => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="title">Scan Scope</h1>
            <div>
              Applay filter
            </div>
        </div>
    );
};

export default ScanScope;