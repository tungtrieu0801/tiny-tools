'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { common, createLowlight } from 'lowlight'
import { useCallback } from 'react'

// Khởi tạo bộ highlight (chỉ nạp các ngôn ngữ phổ biến để nhẹ web)
const lowlight = createLowlight(common)

const TiptapEditor = ({ content, onChange }: { content: string, onChange: (html: string) => void }) => {
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                heading: { levels: [2, 3] }, // Giữ nguyên H2, H3
                codeBlock: false, // Tắt codeBlock mặc định để dùng cái xịn hơn (lowlight)
            }),
            // 1. Cấu hình Code Block có màu
            CodeBlockLowlight.configure({
                lowlight,
            }),
            // 2. Cấu hình Ảnh (cho phép chèn ảnh inline)
            Image.configure({
                inline: true,
                allowBase64: true,
            }),
            // 3. Cấu hình Link (tự động nhận diện link khi gõ/paste)
            Link.configure({
                openOnClick: false, // Tắt click để dễ sửa text
                autolink: true,
            }),
        ],
        content: content,
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] p-4 border rounded-b-lg [&_img]:max-w-full [&_img]:rounded-lg [&_pre]:bg-gray-900 [&_pre]:text-white',
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
    })

    // Hàm thêm ảnh (Dùng URL cho đơn giản, upload file cần backend xử lý riêng)
    const addImage = useCallback(() => {
        const url = window.prompt('Nhập đường dẫn ảnh (URL):')
        if (url && editor) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])

    // Hàm thêm/sửa Link
    const setLink = useCallback(() => {
        if (!editor) return
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL:', previousUrl)

        // Nếu user hủy hoặc xóa trắng thì bỏ link
        if (url === null) return
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run()
            return
        }

        // Thêm link mới
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }, [editor])

    if (!editor) return null

    // Style chung cho nút bấm
    const btnClass = (isActive: boolean) =>
        `px-3 py-1.5 rounded text-sm font-semibold transition-colors border ${
            isActive
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100'
        }`

    return (
        <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
            {/* --- THANH CÔNG CỤ --- */}
            <div className="flex flex-wrap gap-2 p-2 border-b bg-gray-50">

                {/* Nhóm Heading */}
                <div className="flex gap-1 mr-2 border-r pr-2 border-gray-300">
                    <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={btnClass(editor.isActive('heading', { level: 2 }))}>
                        H2
                    </button>
                    <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={btnClass(editor.isActive('heading', { level: 3 }))}>
                        H3
                    </button>
                </div>

                {/* Nhóm Format Text */}
                <div className="flex gap-1 mr-2 border-r pr-2 border-gray-300">
                    <button onClick={() => editor.chain().focus().toggleBold().run()} className={btnClass(editor.isActive('bold'))}>
                        B
                    </button>
                    <button onClick={() => editor.chain().focus().toggleItalic().run()} className={btnClass(editor.isActive('italic'))}>
                        I
                    </button>
                    <button onClick={() => editor.chain().focus().toggleStrike().run()} className={btnClass(editor.isActive('strike'))}>
                        S
                    </button>
                </div>

                {/* Nhóm Chức năng nâng cao */}
                <div className="flex gap-1">
                    <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={btnClass(editor.isActive('codeBlock'))} title="Chèn Code Block">
                        Code &lt;/&gt;
                    </button>

                    <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={btnClass(editor.isActive('blockquote'))} title="Trích dẫn">
                        Quote
                    </button>

                    <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={btnClass(editor.isActive('bulletList'))}>
                        List
                    </button>

                    <button onClick={setLink} className={btnClass(editor.isActive('link'))}>
                        Link 🔗
                    </button>

                    <button onClick={addImage} className={btnClass(false)}>
                        Ảnh 🖼️
                    </button>
                </div>

                {/* Undo/Redo (Nằm cuối) */}
                <div className="ml-auto flex gap-1">
                    <button onClick={() => editor.chain().focus().undo().run()} className="px-2 py-1 text-gray-500 hover:text-black" disabled={!editor.can().undo()}>
                        ↩
                    </button>
                    <button onClick={() => editor.chain().focus().redo().run()} className="px-2 py-1 text-gray-500 hover:text-black" disabled={!editor.can().redo()}>
                        ↪
                    </button>
                </div>
            </div>

            {/* --- KHUNG SOẠN THẢO --- */}
            <EditorContent editor={editor} />
        </div>
    )
}

export default TiptapEditor