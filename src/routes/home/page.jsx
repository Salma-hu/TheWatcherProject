import { useTheme } from "@/hooks/use-theme";

const HomePage = () => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="title">Home</h1>
            <div className="flex flex-col gap-y-4">
            </div>
        </div>
    );
};

export default HomePage;
