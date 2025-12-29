import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-12 pt-10 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    {/* Cột 1: Thông tin */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/blog" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center font-bold text-xl">T</div>
                            <span className="font-bold text-xl tracking-tight">TinyBlog</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                            Nền tảng chia sẻ kiến thức lập trình, công nghệ dành cho Developer Việt Nam.
                            Nơi giao lưu, học hỏi và chia sẻ những kinh nghiệm thực tế.
                        </p>
                    </div>

                    {/* Cột 2: Tài nguyên */}
                    <div>
                        <h4 className="font-bold text-gray-800 mb-4 uppercase text-xs">Tài nguyên</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-blue-600">Bài viết mới</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Series hướng dẫn</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Hỏi đáp (Q&A)</Link></li>
                            <li><Link href="#" className="hover:text-blue-600">Authors</Link></li>
                        </ul>
                    </div>

                    {/* Cột 3: Liên hệ */}
                    <div>
                        <h4 className="font-bold text-gray-800 mb-4 uppercase text-xs">Liên hệ</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            {/* 👇 Sửa href="/blog/about" thành href="/about" */}
                            <li><Link href="/about" className="hover:text-blue-600">Về chúng tôi</Link></li>

                            {/* 👇 Tương tự với các link khác */}
                            <li><Link href="/terms" className="hover:text-blue-600">Điều khoản sử dụng</Link></li>
                            <li><Link href="/privacy" className="hover:text-blue-600">Chính sách bảo mật</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600">Góp ý & Báo lỗi</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Dòng Copyright */}
                <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© 2025 TinyTools Blog. All rights reserved.</p>
                    <div className="flex gap-4">
                        <span>Facebook</span>
                        <span>Github</span>
                        <span>Youtube</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}