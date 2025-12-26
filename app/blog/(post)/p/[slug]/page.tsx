// app/blog/(post)/p/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getPostBySlug } from '../../../data'; // Đảm bảo đường dẫn import đúng cấp
// Nếu file data.ts nằm ở app/blog/data.ts thì phải lùi ra 4 cấp: ../../../../
// Nếu không chắc, hãy thử xóa dòng import và gõ lại để VS Code gợi ý.

interface Props {
    params: Promise<{ slug: string }>; // Next.js 15: params là Promise
}

export default async function PostDetailPage({ params }: Props) {
    // 1. Phải await params trước khi dùng
    const { slug } = await params;

    console.log("--- DEBUG BLOG POST ---");
    console.log("Slug nhận được:", slug);

    // 2. Tìm bài viết
    const post = await getPostBySlug(slug);
    console.log("Kết quả tìm bài:", post ? "Đã tìm thấy" : "Không thấy (NULL)");

    // 3. Nếu không thấy -> Trả về 404
    if (!post) {
        return notFound();
    }

    return (
        <article className="prose max-w-none">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-500 italic mb-6">{post.description}</p>

            <div
                className="mt-4"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
}