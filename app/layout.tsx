export const metadata = {
    title: 'TinyTools',
    description: 'Bộ sưu tập các công cụ nhỏ, nhanh, miễn phí.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi">
        <body>{children}</body>
        </html>
    );
}
