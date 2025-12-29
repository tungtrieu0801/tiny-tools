import { notFound } from 'next/navigation';
import { getPostBySlug } from '../../../data'; // Check đường dẫn import
import VoteButton from '../../_components/VoteButton'; // Check đường dẫn import
import TableOfContents from '../../_components/TableOfContents'; // Import mới
import SidebarTags from '../../_components/SidebarTags'; // Import mới

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function PostDetailPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) return notFound();

    return (
        <div className="flex flex-col lg:flex-row gap-6 justify-center">

            {/* --- CỘT 1: TOOLBAR (VOTE) --- */}
            <aside className="hidden xl:flex flex-col gap-6 w-16 sticky top-24 h-fit items-center z-10">
                <VoteButton initialVotes={post.stats?.likes || 0} />
                <button className="p-3 bg-white rounded-full shadow-md text-gray-400 hover:text-blue-600 transition" title="Lưu bài viết">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                </button>
                <button className="p-3 bg-white rounded-full shadow-md text-gray-400 hover:text-blue-600 transition" title="Chia sẻ Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </button>
            </aside>

            {/* --- CỘT 2: NỘI DUNG CHÍNH --- */}
            <main className="w-full lg:w-3/4 xl:w-2/3 bg-white p-8 rounded-lg shadow-sm min-h-[80vh]">
                {/* Meta Header */}
                <div className="flex items-center gap-3 mb-6">
                    <img src={post.author.avatar} alt="ava" className="w-12 h-12 rounded-full ring-2 ring-blue-50" />
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-800 hover:text-blue-600 cursor-pointer text-lg">{post.author.name}</span>
                            <button className="text-xs text-blue-600 border border-blue-600 px-2 py-0.5 rounded hover:bg-blue-50 font-medium">Follow</button>
                        </div>
                        <p className="text-sm text-gray-500">Đăng ngày 29/12/2025 • 5 phút đọc</p>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                    {post.title}
                </h1>

                {/* Tags Bài viết */}
                <div className="mb-8 flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded hover:bg-gray-200 cursor-pointer transition">
                  #{tag}
               </span>
                    ))}
                </div>

                {/* Nội dung Render HTML */}
                <div
                    className="prose prose-lg prose-blue max-w-none
           prose-headings:font-bold prose-headings:text-gray-800
           prose-img:rounded-lg prose-img:shadow-md"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </main>

            {/* --- CỘT 3: SIDEBAR (MỤC LỤC & TAGS) --- */}
            <aside className="hidden lg:block w-full lg:w-1/4">
                {/* 👇 QUAN TRỌNG: Gom tất cả vào 1 div sticky top-24 */}
                <div className="sticky top-24 space-y-6">

                    {/* 1. Component Mục lục */}
                    {post.toc && post.toc.length > 0 && (
                        <TableOfContents items={post.toc} />
                    )}

                    {/* 2. Component Tags đề xuất */}
                    <SidebarTags />

                    {/* 3. Quảng cáo / Banner */}
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-lg text-white shadow-md text-center">
                        <p className="font-bold text-lg mb-2">TinyTools Premium</p>
                        <button className="bg-white text-indigo-600 px-4 py-2 rounded text-sm font-bold hover:bg-gray-100 w-full">Xem ngay</button>
                    </div>

                </div>
            </aside>

        </div>
    );
}