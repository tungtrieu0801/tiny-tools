// app/blog/(post)/layout.tsx
import Header from "../(post)/_components/Header";

export default function PostLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <div className="bg-[#f4f5f6] min-h-screen font-sans">
                {/* Layout chỉ chịu trách nhiệm căn giữa, còn chia cột để Page lo */}
                <div className="container mx-auto px-4 py-8 max-w-7xl">
                    {children}
                </div>
            </div>
        </>
    );
}