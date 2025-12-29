'use client';
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Giả lập gửi API
        setTimeout(() => setSubmitted(true), 500);
    };

    if (submitted) {
        return (
            <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h2 className="text-2xl font-bold mb-2">Đã gửi thành công!</h2>
                <p className="text-gray-600">Cảm ơn bạn đã đóng góp ý kiến. Chúng tôi sẽ phản hồi sớm nhất.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-blue-600 hover:underline">
                    Gửi phản hồi khác
                </button>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-2">Liên hệ & Góp ý</h1>
            <p className="text-gray-500 mb-8">
                Phát hiện lỗi bug? Hay có ý tưởng tính năng mới? Hãy cho chúng tôi biết nhé.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tên của bạn</label>
                        <input type="text" required className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Nguyễn Văn A" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email liên hệ</label>
                        <input type="email" required className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="email@example.com" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Vấn đề gặp phải</label>
                    <select className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                        <option>Báo lỗi (Bug Report)</option>
                        <option>Góp ý tính năng (Feature Request)</option>
                        <option>Hợp tác / Quảng cáo</option>
                        <option>Khác</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung chi tiết</label>
                    <textarea required rows={5} className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Mô tả chi tiết vấn đề..."></textarea>
                </div>

                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700 transition w-full md:w-auto">
                    Gửi tin nhắn
                </button>
            </form>
        </div>
    );
}