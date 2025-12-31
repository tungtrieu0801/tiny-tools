// app/blog/utils/parseTOC.ts
import slugify from 'slugify';

export function parseTOC(htmlContent: string) {
    const toc: { id: string; text: string; level: number }[] = [];

    // --- SỬA REGEX TẠI ĐÂY ---
    // Cũ (Sai): /<(h[23])>(.*?)<\/\1>/g  <- Chỉ bắt được <h2>
    // Mới (Đúng): /<(h[23])[^>]*>(.*?)<\/\1>/g  <- Bắt được cả <h2 id="abc" class="xyz">
    const regex = /<(h[23])[^>]*>(.*?)<\/\1>/g;

    const content = htmlContent.replace(regex, (match, tag, text) => {
        // text có thể chứa HTML con (ví dụ: <strong>Tiêu đề</strong>), cần lọc sạch
        const cleanText = text.replace(/<[^>]*>/g, "");

        // Tạo ID chuẩn từ nội dung text (để đảm bảo link click được)
        const id = slugify(cleanText, { lower: true, strict: true, locale: 'vi' });

        toc.push({
            id,
            text: cleanText,
            level: tag === 'h2' ? 2 : 3,
        });

        // Trả về HTML đã được gắn ID mới (ghi đè ID cũ trong DB để đồng bộ)
        return `<${tag} id="${id}">${text}</${tag}>`;
    });

    return { toc, content };
}