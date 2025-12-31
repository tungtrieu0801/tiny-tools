// app/blog/(post)/p/[slug]/page.tsx

import { prisma } from '@/app/lib/prisma';
import { notFound } from 'next/navigation';
import '@/app/globals.css';
import { parseTOC } from "@/app/blog/utils/parseTOC";
import TableOfContents from "@/app/blog/(post)/_components/TableOfContents";

export default async function PostDetailPage({
                                                 params
                                             }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug);

    const post = await prisma.posts.findUnique({
        where: { slug: decodedSlug },
        include: { users: true },
    });

    if (!post) return notFound();

    const { toc, content } = parseTOC(post.content);

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* ... Phần Header giữ nguyên ... */}
            <div className="max-w-4xl mx-auto pt-10 px-6">
                <h1 className="text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
                {/* ... Tác giả, ngày tháng ... */}
            </div>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-10 mt-8">

                {/* CỘT NỘI DUNG CHÍNH */}
                <div className="lg:col-span-3">
                    <article
                        className="prose prose-lg max-w-none prose-a:text-blue-600 prose-img:rounded-xl prose-headings:scroll-mt-24"
                        // prose-headings:scroll-mt-24 giúp khi click link nó không bị che mất bởi Header dính
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>

                {/* CỘT MỤC LỤC (Gọi Component Client ở đây) */}
                <aside className="hidden lg:block lg:col-span-1 relative">
                    <TableOfContents toc={toc} />
                </aside>

            </div>
        </div>
    );
}