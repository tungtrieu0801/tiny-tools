'use client';
import { useState } from 'react';

export default function PublishPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <div className="flex-1 flex overflow-hidden">
            {/* CỘT TRÁI: VIẾT (Markdown) */}
            <div className="w-1/2 p-6 border-r overflow-y-auto">
                <input
                    type="text"
                    placeholder="Tiêu đề bài viết..."
                    className="w-full text-4xl font-bold border-none outline-none placeholder-gray-300 mb-6"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="w-full h-[calc(100vh-200px)] resize-none outline-none text-lg leading-relaxed text-gray-700 placeholder-gray-300 font-mono"
                    placeholder="Nội dung bài viết (Markdown)..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>

            {/* CỘT PHẢI: PREVIEW */}
            <div className="w-1/2 p-8 bg-gray-50 overflow-y-auto">
                <div className="prose prose-lg max-w-none">
                    <h1>{title || 'Tiêu đề...'}</h1>
                    {content
                        ? <div dangerouslySetInnerHTML={{__html: content.replace(/\n/g, '<br/>')}} />
                        : <p className="text-gray-400 italic">Bản xem trước sẽ hiện ở đây...</p>
                    }
                </div>
            </div>
        </div>
    );
}