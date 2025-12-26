// app/blog/(main)/page.tsx
import Link from 'next/link';
import { getPosts } from '../data';

export default async function HomePage() {
    const posts = await getPosts();

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6 border-b pb-2">Bài viết mới nhất</h1>

            <div className="space-y-6">
                {posts.map((post) => (
                    <div key={post.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white">
                        <div className="flex items-center gap-2 mb-2 text-sm text-gray-600">
                            <span className="font-semibold text-blue-600">{post.author.name}</span>
                        </div>

                        <Link href={`/p/${post.slug}`}>
                            <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer">
                                {post.title}
                            </h2>
                        </Link>

                        <p className="text-gray-600 mt-2 line-clamp-2">{post.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}