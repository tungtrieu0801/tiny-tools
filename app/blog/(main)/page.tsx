// app/blog/(main)/page.tsx
import Link from 'next/link';
import { getPosts } from '../data';

export default async function HomePage({
    searchParams,
}: {
    searchParams: { tag?: string };
}) {
    const allPosts = await getPosts();

    const filteredPosts = searchParams.tag
        ? allPosts.filter((p) => p.tags.includes(searchParams.tag!))
        : allPosts;

    return (
        <div className="bg-[#f4f5f6] min-h-screen">
            <div className="container mx-auto px-4 py-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* FEED CHÍNH (TRÁI) */}
                    <div className="w-full lg:w-2/3">
                        {/* Tabs */}
                        <div className="flex items-center gap-6 mb-4 border-b border-gray-200">
                            <button className="pb-3 border-b-2 border-blue-600 font-bold text-gray-900 text-sm uppercase">Mới nhất</button>
                            <button className="pb-3 border-b-2 border-transparent hover:border-gray-300 font-medium text-gray-500 hover:text-gray-700 text-sm uppercase transition">Đang hot</button>
                            <button className="pb-3 border-b-2 border-transparent hover:border-gray-300 font-medium text-gray-500 hover:text-gray-700 text-sm uppercase transition">Videos</button>
                        </div>

                        {/* List Posts */}
                        <div className="space-y-4">
                            {filteredPosts.map((post) => (
                                <div key={post.id} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition border border-transparent hover:border-blue-200 group">
                                    {/* Header: Author + Date */}
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <img src={post.author.avatar} className="w-6 h-6 rounded-full" />
                                            <span className="text-sm text-gray-700 font-medium hover:text-blue-600 cursor-pointer">{post.author.name}</span>
                                            <span className="text-xs text-gray-400">• 2 giờ trước</span>
                                        </div>
                                    </div>

                                    {/* Title & Desc */}
                                    <div className="flex justify-between gap-4">
                                        <div className="flex-1">
                                            <Link href={`/p/${post.slug}`}>
                                                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 leading-snug mb-2 transition">
                                                    {post.title}
                                                </h2>
                                            </Link>
                                            <p className="text-gray-500 text-sm line-clamp-2">{post.description}</p>
                                        </div>
                                        {/* Nếu có ảnh thumbnail thì hiện ở đây */}
                                        {/* <div className="w-24 h-24 bg-gray-200 rounded-md flex-shrink-0"></div> */}
                                    </div>

                                    {/* Footer: Tags & Stats */}
                                    <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
                                        <div className="flex gap-2">
                                            {post.tags.map(tag => (
                                                <Link href={`/?tag=${tag}`} key={tag}>
                                                    <span className="bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 cursor-pointer">#{tag}</span>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="ml-auto flex items-center gap-3">
                                            <span className="flex items-center gap-1"><i className="text-gray-400">👁</i> 120</span>
                                            <span className="flex items-center gap-1"><i className="text-gray-400">💬</i> 4</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SIDEBAR (PHẢI) */}
                    <div className="hidden lg:block w-1/3 space-y-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase">Chủ đề nổi bật</h3>
                            <div className="flex flex-wrap gap-2">
                                {['JavaScript', 'React', 'DevOps', 'Machine Learning', 'Career'].map(t => (
                                    <Link href={`/?tag=${t}`} key={t}>
                                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition">
                                            {t}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-lg shadow-md text-white">
                            <h3 className="font-bold text-lg mb-2">Viết bài ngay!</h3>
                            <p className="text-sm opacity-90 mb-4">Chia sẻ kiến thức của bạn với cộng đồng.</p>
                            <button className="w-full py-2 bg-white text-blue-700 font-bold rounded hover:bg-gray-100 transition">
                                Tạo bài viết mới
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
