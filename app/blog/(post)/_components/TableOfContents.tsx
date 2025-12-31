// app/blog/_components/TableOfContents.tsx
'use client';

import { useEffect, useState } from 'react';

type TocItem = {
    id: string;
    text: string;
    level: number;
};

export default function TableOfContents({ toc }: { toc: TocItem[] }) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                // rootMargin quan trọng:
                // Nó tạo ra một "đường kẻ vô hình" cách đỉnh màn hình 100px.
                // Khi thẻ H2 chạm vào vùng này, nó sẽ được tính là active.
                rootMargin: '-100px 0px -40% 0px',
                threshold: 1.0,
            }
        );

        // Gắn observer vào các thẻ Heading có ID tương ứng
        toc.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [toc]);

    // Xử lý click để cuộn mượt mà
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Cuộn đến vị trí element + trừ hao Header (80px)
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });

            // Set active ngay lập tức cho đỡ lag
            setActiveId(id);
        }
    };

    if (toc.length === 0) return <p className="text-gray-400 text-sm">Bài viết ngắn.</p>;

    return (
        <nav className="sticky top-24 max-h-[calc(100vh-100px)] overflow-y-auto custom-scrollbar">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Mục lục</h3>
            <ul className="space-y-1 relative border-l border-gray-200">
                {toc.map((item) => (
                    <li key={item.id} className="relative">
                        <a
                            href={`#${item.id}`}
                            onClick={(e) => handleClick(e, item.id)}
                            className={`block py-1.5 pr-2 text-sm transition-all duration-200 border-l-2 -ml-[2px] ${
                                item.level === 3 ? 'pl-6' : 'pl-4'
                            } ${
                                activeId === item.id
                                    ? 'border-blue-600 text-blue-600 font-bold bg-blue-50/50 rounded-r' // Style khi Active
                                    : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300' // Style thường
                            }`}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}