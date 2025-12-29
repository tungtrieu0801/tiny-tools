export const metadata = { title: 'Điều khoản sử dụng - TinyBlog' };

export default function TermsPage() {
    return (
        <article className="prose prose-sm max-w-none">
            <h1>Điều khoản sử dụng</h1>
            <p className="text-gray-500 italic">Cập nhật lần cuối: 29/12/2025</p>

            <h3>1. Chấp thuận điều khoản</h3>
            <p>
                Bằng việc truy cập và sử dụng TinyBlog, bạn đồng ý tuân thủ các điều khoản và điều kiện được quy định tại đây.
                Nếu không đồng ý, vui lòng ngừng sử dụng dịch vụ.
            </p>

            <h3>2. Quyền sở hữu trí tuệ</h3>
            <p>
                Tất cả nội dung trên TinyBlog (bài viết, hình ảnh, mã nguồn) đều thuộc quyền sở hữu của chúng tôi hoặc
                tác giả bài viết. Bạn không được sao chép, tái bản nhằm mục đích thương mại mà không có sự đồng ý.
            </p>

            <h3>3. Trách nhiệm người dùng</h3>
            <ul>
                <li>Không đăng tải nội dung vi phạm pháp luật, thuần phong mỹ tục.</li>
                <li>Không spam, quấy rối hoặc tấn công các thành viên khác.</li>
                <li>Chịu trách nhiệm về tính xác thực của thông tin mình đăng tải.</li>
            </ul>
        </article>
    );
}