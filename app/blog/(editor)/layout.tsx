export default function EditorLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Editor Header riêng biệt */}
            <header className="h-14 border-b flex items-center justify-between px-6 bg-white sticky top-0 z-50">
                <div className="font-bold text-gray-500">TinyBlog Draft</div>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm font-semibold hover:bg-blue-700 transition">
                    Xuất bản
                </button>
            </header>
            {children}
        </div>
    );
}