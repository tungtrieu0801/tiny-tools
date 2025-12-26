// app/blog/layout.tsx
import React from "react";

// 1. Định nghĩa kiểu props (nếu dùng TypeScript)
interface BlogLayoutProps {
    children: React.ReactNode;
}

// 2. Export default function (BẮT BUỘC)
export default function BlogLayout({ children }: BlogLayoutProps) {
    // 3. Phải có return JSX
    return (
        <div className="blog-root">
            {children}
        </div>
    );
}