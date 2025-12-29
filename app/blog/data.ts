// app/blog/data.ts

// 1. Dữ liệu User (Dùng cho Header)
export const CURRENT_USER = {
    id: 'u1',
    name: 'Dev Quèn',
    avatar: 'https://ui-avatars.com/api/?name=Dev+Quen&background=0D8ABC&color=fff',
};

// 2. Dữ liệu Tags nổi bật (Dùng cho Sidebar bên phải)
export const TRENDING_TAGS = [
    "JavaScript", "React", "Next.js", "DevOps", "Docker",
    "Machine Learning", "Career", "System Design", "Algorithm"
];

// 3. Định nghĩa kiểu dữ liệu cho bài viết
export type Post = {
    id: string;
    slug: string;
    title: string;
    description: string;
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    tags: string[];
    stats?: { views: number; likes: number; comments: number };
    createdAt?: string;
    toc?: { id: string; title: string }[]; // Mục lục
};

// 4. Danh sách bài viết (Mock Data)
export const MOCK_POSTS: Post[] = [
    {
        id: '1',
        slug: 'nam-ro-java-lambda',
        title: 'Nắm rõ Java Lambda Expression cho người mới bắt đầu',
        description: 'Hướng dẫn chi tiết về Lambda trong Java 8, cách viết code gọn gàng hơn.',
        // Nội dung HTML có gắn id để TOC hoạt động
        content: `
      <h2 id="sec-1">1. Giới thiệu vấn đề</h2>
      <p>Java Lambda Expression là một tính năng mới quan trọng được giới thiệu trong Java 8, giúp việc viết code ngắn gọn hơn, đặc biệt khi làm việc với Collection.</p>
      
      <h2 id="sec-2">2. Tại sao nên dùng Lambda?</h2>
      <p>Trước Java 8, để sắp xếp một list, ta phải dùng Anonymous Class rất dài dòng. Với Lambda, chỉ cần 1 dòng code.</p>
      
      <h2 id="sec-3">3. Cú pháp cơ bản</h2>
      <pre><code class="language-java">list.forEach(item -> System.out.println(item));</code></pre>
      <p>Cú pháp gồm 3 phần: Argument List, Arrow Token, và Body.</p>
      
      <h2 id="sec-4">4. Kết luận</h2>
      <p>Lambda Expression là công cụ mạnh mẽ mà mọi Java Developer cần phải nắm vững.</p>
    `,
        author: { name: 'Viblo Coder', avatar: 'https://ui-avatars.com/api/?name=Viblo+Coder&background=random' },
        tags: ['Java', 'Backend', 'Spring Boot', 'Coding Standard'],
        stats: { views: 1250, likes: 45, comments: 12 },
        createdAt: '29/12/2025',
        // Dữ liệu Mục lục khớp với id trong content
        toc: [
            { id: 'sec-1', title: '1. Giới thiệu vấn đề' },
            { id: 'sec-2', title: '2. Tại sao nên dùng Lambda?' },
            { id: 'sec-3', title: '3. Cú pháp cơ bản' },
            { id: 'sec-4', title: '4. Kết luận' },
        ]
    },
    {
        id: '2',
        slug: 'nextjs-folder-structure',
        title: 'Cấu trúc thư mục Next.js 15 chuẩn cho dự án lớn',
        description: 'Phân tích cách chia Route Groups, Layout và Component trong App Router.',
        content: `
      <h2 id="route-group">1. Route Groups là gì?</h2>
      <p>Route Groups cho phép bạn gom nhóm các route mà không ảnh hưởng URL. Ký hiệu là dấu ngoặc đơn (folder).</p>
      
      <h2 id="dynamic-route">2. Dynamic Routes</h2>
      <p>Sử dụng ngoặc vuông [slug] để tạo đường dẫn động. Ví dụ: blog/[slug].</p>
    `,
        author: { name: 'NextMaster', avatar: 'https://ui-avatars.com/api/?name=Next+Master&background=random' },
        tags: ['Next.js', 'Frontend', 'React'],
        stats: { views: 890, likes: 32, comments: 5 },
        createdAt: '28/12/2025',
        toc: [
            { id: 'route-group', title: '1. Route Groups là gì?' },
            { id: 'dynamic-route', title: '2. Dynamic Routes' },
        ]
    },
    {
        id: '3',
        slug: 'react-hooks-co-ban',
        title: 'Tìm hiểu về React Hooks cho người mới',
        description: 'useState, useEffect và các hooks cơ bản khác trong React.',
        content: `
      <h2 id="intro">Giới thiệu</h2>
      <p>React Hooks là một tính năng từ React 16.8 cho phép bạn sử dụng state và các tính năng React khác mà không cần viết class.</p>
      <h2 id="usestate">useState</h2>
      <p>Hook cho phép bạn thêm state vào functional component.</p>
      <h2 id="useeffect">useEffect</h2>
      <p>Hook cho phép bạn thực hiện các side effect trong functional component.</p>
    `,
        author: { name: 'React Fan', avatar: 'https://ui-avatars.com/api/?name=React+Fan&background=random' },
        tags: ['React', 'Frontend'],
        stats: { views: 1500, likes: 100, comments: 20 },
        createdAt: '01/01/2026',
        toc: [
            { id: 'intro', title: 'Giới thiệu' },
            { id: 'usestate', title: 'useState' },
            { id: 'useeffect', title: 'useEffect' },
        ]
    },
    {
        id: '4',
        slug: 'quan-ly-trang-thai-trong-react',
        title: 'Các phương pháp quản lý trạng thái trong ứng dụng React',
        description: 'So sánh giữa Context API, Redux và Zustand.',
        content: `
      <h2 id="context-api">Context API</h2>
      <p>Giải pháp tích hợp sẵn của React để chia sẻ state giữa các component.</p>
      <h2 id="redux">Redux</h2>
      <p>Thư viện phổ biến để quản lý state toàn cục với một store duy nhất.</p>
      <h2 id="zustand">Zustand</h2>
      <p>Một giải pháp thay thế nhẹ nhàng và đơn giản hơn cho Redux.</p>
    `,
        author: { name: 'State Master', avatar: 'https://ui-avatars.com/api/?name=State+Master&background=random' },
        tags: ['React', 'State Management', 'Frontend'],
        stats: { views: 2000, likes: 150, comments: 35 },
        createdAt: '02/01/2026',
        toc: [
            { id: 'context-api', title: 'Context API' },
            { id: 'redux', title: 'Redux' },
            { id: 'zustand', title: 'Zustand' },
        ]
    }
];

// 5. Các hàm Helper lấy dữ liệu
export async function getPosts() {
    return MOCK_POSTS;
}

export async function getPostBySlug(slug: string) {
    return MOCK_POSTS.find((p) => p.slug === slug);
}
