// app/blog/(main)/page.tsx
// app/blog/(main)/page.tsx
import Link from 'next/link';
import { getPosts } from '../../lib/actions'; // Gọi DB thật

export default async function HomePage() {
    const posts = await getPosts();

    return (
        <div className="bg-[#f4f5f6] min-h-screen">
            <div className="container mx-auto px-4 py-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-6">

                    {/* FEED CHÍNH */}
                    <div className="w-full lg:w-2/3 space-y-4">
                        {posts.length === 0 && <p className="text-center text-gray-500 mt-10">Chưa có bài viết nào.</p>}

                        {posts.map((post) => (
                            <div key={post.id} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition border border-transparent hover:border-blue-200 group">
                                <div className="flex items-center gap-2 mb-3">
                                    <img src={post.users.avatar || ''} className="w-6 h-6 rounded-full" />
                                    <span className="text-sm text-gray-700 font-medium">{post.users.name}</span>
                                    <span className="text-xs text-gray-400">• {new Date(post.created_at).toLocaleDateString('vi-VN')}</span>
                                </div>

                                <div className="flex justify-between gap-4">
                                    <div className="flex-1">
                                        <Link href={`/p/${post.slug}`}>
                                            <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 leading-snug mb-2 transition">
                                                {post.title}
                                            </h2>
                                        </Link>
                                        <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
                                    <div className="flex gap-2">
                                        {post.post_tags.map(pt => (
                                            <span key={pt.tags.id} className="bg-gray-100 px-2 py-1 rounded">#{pt.tags.name}</span>
                                        ))}
                                    </div>
                                    <div className="ml-auto flex items-center gap-3">
                                        <span>👁 {post.view_count}</span>
                                        <span>👍 {post.vote_score}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
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
