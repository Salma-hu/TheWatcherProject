import { useTheme } from "@/hooks/use-theme";

const LoginPage = () => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col gap-y-2 w-full max-w-md text-center my-0"> 
                <h1 className="title" class="mb-6 text-4xl font-bold">Login</h1>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                </div> 
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                </div>
                <button className="w-full bg-blue-600 text-white text-lg font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition duration-300">
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginPage;