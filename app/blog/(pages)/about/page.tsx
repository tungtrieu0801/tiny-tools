export const metadata = { title: 'Về chúng tôi - TinyBlog' };

export default function AboutPage() {
    return (
        <article className="prose prose-blue max-w-none">
            <h1>Về TinyBlog</h1>
            <p className="lead">
                TinyBlog là nơi chia sẻ kiến thức, kinh nghiệm và những câu chuyện thú vị xoay quanh thế giới Lập trình & Công nghệ.
            </p>

            <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Team working"
                className="rounded-lg shadow-md my-6 w-full object-cover h-64"
            />

            <h3>Sứ mệnh của chúng tôi</h3>
            <p>
                Chúng tôi tin rằng kiến thức là để sẻ chia. TinyBlog ra đời với mong muốn xây dựng một cộng đồng
                Open, nơi mọi Developer từ Newbie đến Senior đều có thể tìm thấy những điều bổ ích.
            </p>

            <h3>Đội ngũ phát triển</h3>
            <p>
                Được xây dựng và vận hành bởi những người đam mê mã nguồn mở. Chúng tôi luôn lắng nghe
                ý kiến đóng góp của các bạn để hoàn thiện sản phẩm mỗi ngày.
            </p>
        </article>
    );
}