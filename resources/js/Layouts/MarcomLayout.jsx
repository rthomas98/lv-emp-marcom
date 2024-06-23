import MarcomNav from "@/Components/MarcomNav.jsx";

export default function Marcom({ children }) {
    return (
        <main>
            <MarcomNav />
            {children}
        </main>
    );
}
