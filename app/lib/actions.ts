// app/lib/actions.ts
'use server';

import prisma from './prisma';
import slugify from 'slugify';
import { redirect } from 'next/navigation';

// 1. Hàm lấy danh sách bài viết cho Trang chủ
export async function getPosts() {
    const posts = await prisma.posts.findMany({
        where: { published: true },
        orderBy: { created_at: 'desc' },
        include: {
            users: true, // Join bảng Author
            post_tags: { // Join bảng Tags
                include: {
                    tags: true
                }
            }
        }
    });
    return posts;
}

// 2. Hàm lấy chi tiết bài viết theo Slug
export async function getPostBySlug(slug: string) {
    const post = await prisma.posts.findUnique({
        where: { slug },
        include: {
            users: true,
            post_tags: {
                include: { tags: true }
            },
            // Lấy số liệu vote (nếu cần tính toán phức tạp hơn thì dùng aggregate)
        }
    });
    return post;
}

// 3. Hàm TẠO BÀI VIẾT MỚI (Quan trọng)
export async function createPost(formData: FormData) {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const rawTags = formData.get('tags') as string; // Nhập tag cách nhau dấu phẩy

    // Tạo Slug tự động
    const slug = slugify(title, { lower: true, strict: true }) + '-' + Date.now();

    // Tự động tạo TOC từ thẻ H2 trong content (Regex đơn giản)
    const toc = [];
    const regex = /<h2 id="(.*?)">(.*?)<\/h2>/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        toc.push({ id: match[1], title: match[2] });
    }

    // Xử lý Tags (Tách chuỗi -> mảng)
    const tagNames = rawTags.split(',').map(t => t.trim()).filter(t => t);

    // Lưu vào DB
    // Lưu ý: ID tác giả đang fix cứng vì chưa làm login.
    // Sau này thay bằng session.user.id
    const authorId = 'a0000000-0000-0000-0000-000000000001';

    await prisma.$transaction(async (tx) => {
        // 1. Tạo bài viết
        const newPost = await tx.posts.create({
            data: {
                title,
                slug,
                content,
                published: true, // Public luôn
                toc: toc, // Prisma tự convert sang JSONB
                author_id: authorId,
                excerpt: content.substring(0, 150) + "...", // Tạo mô tả ngắn
            }
        });

        // 2. Xử lý Tags (Nếu tag chưa có thì tạo mới, có rồi thì lấy ID)
        for (const tagName of tagNames) {
            const tagSlug = slugify(tagName, { lower: true });

            // Upsert Tag: Tìm thấy thì lấy, không thấy thì tạo
            let tag = await tx.tags.findUnique({ where: { slug: tagSlug } });
            if (!tag) {
                tag = await tx.tags.create({ data: { name: tagName, slug: tagSlug } });
            }

            // 3. Link Post với Tag (Vào bảng post_tags)
            await tx.post_tags.create({
                data: {
                    post_id: newPost.id,
                    tag_id: tag.id
                }
            });
        }
    });

    // Chuyển hướng về trang bài viết vừa tạo
    redirect(`/p/${slug}`);
}