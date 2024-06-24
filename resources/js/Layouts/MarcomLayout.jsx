import MarcomNav from "@/Components/MarcomNav.jsx";
import MarcomFooter from "@/Components/MarcomFooter.jsx";

export default function Marcom({ children }) {
    return (
        <main>
            <MarcomNav />
            {children}
            <MarcomFooter />
        </main>
    );
}
