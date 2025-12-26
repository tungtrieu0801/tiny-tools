// app/blog/layout.tsx
import React from 'react';

export const metadata = {
    title: 'Blog TinyTools',
    description: 'Blog chia sẻ kiến thức',
};

export default function BlogRootLayout({
                                           children,
                                       }: {
    children: React.ReactNode;
}) {
    return (
        <div className="blog-root-layout">
            {children}
        </div>
    );
}