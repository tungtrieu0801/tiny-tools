export const metadata = { title: 'Chính sách bảo mật - TinyBlog' };

export default function PrivacyPage() {
    return (
        <article className="prose prose-sm max-w-none">
            <h1>Chính sách bảo mật</h1>

            <h3>1. Thu thập thông tin</h3>
            <p>
                Chúng tôi chỉ thu thập các thông tin cần thiết để vận hành hệ thống như: Email, Tên hiển thị (khi bạn đăng ký)
                và Cookie (để lưu trạng thái đăng nhập).
            </p>

            <h3>2. Sử dụng thông tin</h3>
            <p>Thông tin của bạn được sử dụng để:</p>
            <ul>
                <li>Cung cấp và duy trì dịch vụ.</li>
                <li>Thông báo về các thay đổi của hệ thống.</li>
                <li>Hỗ trợ khách hàng.</li>
            </ul>

            <h3>3. Bảo mật dữ liệu</h3>
            <p>
                Chúng tôi cam kết không bán, trao đổi hoặc chia sẻ thông tin cá nhân của bạn cho bên thứ ba
                nếu không có sự đồng ý của bạn, trừ khi pháp luật yêu cầu.
            </p>
        </article>
    );
}