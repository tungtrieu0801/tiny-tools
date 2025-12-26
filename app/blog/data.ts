// app/blog/data.ts

export type Post = {
    id: string;
    slug: string;
    title: string;
    description: string;
    content: string; // Giả lập HTML hoặc Markdown
    author: {
        name: string;
        avatar: string;
    };
    toc: { id: string; title: string }[]; // Mục lục cho Sidebar B
    tags: string[];
};

export const MOCK_POSTS: Post[] = [
    {
        id: '1',
        slug: 'nam-ro-java-lambda',
        title: 'Nắm rõ Java Lambda Expression cho người mới bắt đầu',
        description: 'Hướng dẫn chi tiết về Lambda trong Java 8, cách viết code gọn gàng hơn.',
        content: `
      <p>Java Lambda Expression là một tính năng mới quan trọng được giới thiệu trong Java 8...</p>
      <h2>1. Lambda Expression là gì?</h2>
      <p>Nó là một hàm nặc danh (anonymous function) không có tên...</p>
      <h2>2. Tại sao nên dùng?</h2>
      <p>Giúp code ngắn gọn hơn, dễ đọc hơn khi làm việc với Collection...</p>
    `,
        author: { name: 'Viblo Coder', avatar: 'https://via.placeholder.com/40' },
        tags: ['Java', 'Backend'],
        toc: [
            { id: '1', title: '1. Lambda Expression là gì?' },
            { id: '2', title: '2. Tại sao nên dùng?' },
        ]
    },
    {
        id: '2',
        slug: 'nextjs-folder-structure',
        title: 'Cấu trúc thư mục Next.js 15 chuẩn cho dự án lớn',
        description: 'Phân tích cách chia Route Groups, Layout và Component trong App Router.',
        content: `
      <p>Việc tổ chức thư mục trong Next.js App Router rất linh hoạt...</p>
      <h2>1. Route Groups là gì?</h2>
      <p>Route Groups cho phép bạn gom nhóm các route mà không ảnh hưởng URL...</p>
      <h2>2. Dynamic Routes</h2>
      <p>Sử dụng ngoặc vuông [slug] để tạo đường dẫn động...</p>
    `,
        author: { name: 'NextMaster', avatar: 'https://via.placeholder.com/40' },
        tags: ['Next.js', 'Frontend'],
        toc: [
            { id: '1', title: '1. Route Groups là gì?' },
            { id: '2', title: '2. Dynamic Routes' },
        ]
    }
];

// Hàm giả lập lấy data (Sau này thay bằng gọi API/DB)
export async function getPosts() {
    return MOCK_POSTS;
}

export async function getPostBySlug(slug: string) {
    return MOCK_POSTS.find((p) => p.slug === slug);
}