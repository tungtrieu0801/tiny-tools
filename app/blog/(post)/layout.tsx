// app/blog/(post)/layout.tsx
// Lưu ý: Layout nhận children là nội dung bài viết
export default function PostLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row gap-8">

                {/* CỘT TRÁI: Nội dung bài viết (chiếm 75%) */}
                <main className="w-full lg:w-3/4 bg-white p-6 rounded shadow-sm min-h-screen">
                    {children}
                </main>

                {/* CỘT PHẢI: Sidebar dành riêng cho trang Post (Mục lục) */}
                <aside className="w-full lg:w-1/4">
                    <div className="sticky top-4 bg-gray-50 p-4 rounded border">
                        <h3 className="font-bold text-lg mb-4 text-gray-700">Mục lục</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Mục lục này có thể lấy động</li>
                            <li>Hoặc render từ Client Component</li>
                            <li className="pl-4 border-l-2 border-blue-500 text-blue-600">Đang đọc phần này...</li>
                        </ul>
                    </div>
                </aside>

            </div>
        </div>
    );
}