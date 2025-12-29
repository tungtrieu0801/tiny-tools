import Header from '../(post)/_components/Header';
export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header /> {/* Thêm Header vào đây */}
            <div className="container mx-auto px-4 py-6">
                {/* ... code chia cột cũ ... */}
                {children}
            </div>
        </>
    );
}