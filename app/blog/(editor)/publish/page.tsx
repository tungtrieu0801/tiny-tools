// app/blog/(editor)/publish/page.tsx
'use client';

import { createPost } from '../../../lib/actions';
import { useState } from 'react';
import TiptapEditor from "@/app/blog/(post)/_components/Editor";

export default function PublishPage() {
    const [content, setContent] = useState('');

    // Hàm chặn Enter ở ô tiêu đề để không bị submit nhầm
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Chặn hành vi submit mặc định
        }
    };

    return (
        <form action={createPost} className="min-h-screen bg-gray-50 flex flex-col">
            {/* HEADER */}
            <header className="h-16 bg-white border-b px-8 flex items-center justify-between sticky top-0 z-50 shadow-sm">
                <div className="font-bold text-xl text-gray-700">Viết bài mới</div>
                <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition shadow"
                >
                    Xuất bản ngay
                </button>
            </header>

            {/* BODY */}
            <div className="flex-1 max-w-4xl w-full mx-auto p-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 min-h-[80vh]">

                    {/* 1. TIÊU ĐỀ (Đã chặn Enter) */}
                    <input
                        name="title"
                        type="text"
                        placeholder="Tiêu đề bài viết lớn ở đây..."
                        className="w-full text-4xl font-extrabold border-none outline-none placeholder-gray-300 mb-6"
                        required
                        onKeyDown={handleKeyDown} // <--- QUAN TRỌNG: Chặn Enter
                    />

                    {/* 2. TAGS (Đã chặn Enter) */}
                    <input
                        name="tags"
                        type="text"
                        placeholder="Thêm tags (Enter để cách)..."
                        className="w-full text-sm border-b border-gray-100 py-2 outline-none text-gray-600 mb-8"
                        onKeyDown={handleKeyDown} // <--- Chặn Enter nốt
                    />

                    {/* 3. EDITOR */}
                    <div className="prose prose-lg max-w-none">
                        <TiptapEditor
                            content={content}
                            onChange={(newContent) => setContent(newContent)}
                        />
                    </div>

                    <input type="hidden" name="content" value={content} />
                </div>
            </div>
        </form>
    );
}