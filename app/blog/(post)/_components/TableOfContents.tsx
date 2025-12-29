// app/blog/_components/TableOfContents.tsx
'use client';
import { useEffect, useState } from 'react';

export default function TableOfContents({ items }: { items: { id: string; title: string }[] }) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        // Tạo Observer để theo dõi các thẻ heading
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '0px 0px -80% 0px', // Kích hoạt khi tiêu đề nằm ở vùng trên của màn hình
                threshold: 0.1,
            }
        );

        // Gắn observer vào các thẻ h2, h3 trong bài viết
        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Trừ đi chiều cao Header (80px) để không bị che mất tiêu đề
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4 border-b pb-2 text-sm uppercase">Mục lục</h3>
            <ul className="space-y-1 max-h-[70vh] overflow-y-auto custom-scrollbar relative">
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-sm cursor-pointer py-1.5 pl-3 border-l-2 transition-all line-clamp-2
              ${activeId === item.id
                            ? 'text-blue-600 border-blue-600 font-medium bg-blue-50 rounded-r'
                            : 'text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300'
                        }`}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}