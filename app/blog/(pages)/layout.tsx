// app/blog/(pages)/layout.tsx
import Header from "../../blog/(post)/_components/Header";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <div className="bg-[#f4f5f6] min-h-screen font-sans py-10">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}