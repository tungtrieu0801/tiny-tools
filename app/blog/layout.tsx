// app/blog/layout.tsx
import React from "react";
import "../globals.css";
import Header from "./(post)/_components/Header"; // Import Header
import Footer from "./(post)/_components/Footer";
export const metadata = { title: 'TinyBlog Tech' };

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="font-sans text-gray-900 bg-[#f4f5f6]">
            {/* Header sẽ hiện ở MỌI TRANG trong blog (trừ trang Editor nếu mình group khéo, nhưng tạm thời để chung cũng được) */}
            {/* Tuy nhiên, ở trên mình đã tách Group (editor) riêng layout, nên Header này chỉ hiện ở (main) và (post) nếu ta đặt nó vào trong layout con.
          NHƯNG để tiện, ta cứ đặt ở đây, rồi dùng CSS ẩn đi ở trang Editor nếu cần, hoặc tốt nhất là:
      */}
            {children}
            <Footer />
        </div>
    );
}