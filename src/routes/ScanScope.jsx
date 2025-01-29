import { useTheme } from "@/hooks/use-theme";  
import React, { useEffect } from "react";


const ScanScope = () => {
    const { theme } = useTheme();
    const formatWithDots = (inputId) => {
        const input = document.getElementById(inputId);
    
        if (input) {
            input.addEventListener("input", () => {
                let value = input.value.replace(/\./g, ""); // Remove existing dots
                
                if (!isNaN(parseFloat(value)) && value !== "") {
                    // Add dots every 3 digits
                    input.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
            });
        }
    };

    useEffect(() => {
        formatWithDots("marketCapFrom");
        formatWithDots("marketCapTo");
        formatWithDots("liquidityFrom");
        formatWithDots("liquidityTo");
        formatWithDots("burnedSolFrom");
        formatWithDots("burnedSolTo");
    }, []);

    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="title">Scan Scope</h1>
            <div>
            
            </div> 
              <form>
                <table class="w-[800px]">
                    <tr>
                        <div class="grid gap-6 mb-0 md:grid-cols-2">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marcket cap(USD)</label>
                    </div>                     
                    </tr>
                    <tr>
                        <td class="px-6 w-1/4">
                        <div>
                            <span class="ms-3 text-xs font-normal text-gray-900 dark:text-gray-300 mr-10">From</span>
                            <input type="number" id="" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        </td>
                        <td class="px-6 w-1/4">
                        <div>
                            <span class="ms-3 text-xs font-normal text-gray-900 dark:text-gray-300 mr-10">To</span>
                            <input type="number" id="" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <div class="grid gap-6 mb-0 mt-5 md:grid-cols-2">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Liquidity(USD)</label>
                    </div>                     
                    </tr>
                    <tr>
                        <td class="px-6 w-1/4">
                        <div>
                            <span class="ms-3 text-xs font-normal text-gray-900 dark:text-gray-300 mr-10">From</span>
                            <input type="number" id="" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        </td>
                        <td class="px-6 w-1/4">
                        <div>
                            <span class="ms-3 text-xs font-normal text-gray-900 dark:text-gray-300 mr-10">To</span>
                            <input type="number" id="" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <div class="grid gap-6 mb-0 mt-5 md:grid-cols-2">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Burned SOL</label>
                    </div>                     
                    </tr>
                    <tr>
                        <td class="px-6 w-1/4">
                        <div>
                            <span class="ms-3 text-xs font-normal text-gray-900 dark:text-gray-300 mr-10">From</span>
                            <input type="number" id="" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        </td>
                        <td class="px-6 w-1/4">
                        <div>
                            <span class="ms-3 text-xs font-normal text-gray-900 dark:text-gray-300 mr-10">To</span>
                            <input type="number" id="" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                        </div>
                        </td>
                    </tr>
                    <tr>
                    <div class="mt-7">
                            <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"/>
                            <span class="text-sm font-medium text-gray-900 dark:text-gray-300 mr-20">Locked Liquidity</span>
                            <div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none ring-4 ring-blue-200 
                            dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                            rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 
                            after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all 
                            dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                            </label>
                        </div>                   
                    </tr>
                    <tr>
                    <div class="mt-7">
                            <label class="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer"/>
                            <span class="text-sm font-medium text-gray-900 dark:text-gray-300 mr-20">Freezable Token</span>
                            <div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none  ring-4 ring-blue-200 
                            dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
                            rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 
                            after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all 
                            dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                            </label>
                        </div>                   
                    </tr>
                    <tr>
                        <td class="pt-10 w-1/4">
                            <div class="mt-7">
                                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  mr-10 ">Apply</button>  
                                <button type="" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset</button>  
                            </div> 
                        </td>
                        <td>
                        </td>                     
                    </tr>
                
                </table>
                </form>
            
        </div>
    );
};
export default ScanScope;