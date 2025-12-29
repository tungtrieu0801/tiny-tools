'use client';
import Link from 'next/link';
import { useState } from 'react';
import { CURRENT_USER } from '../../data';

export default function Header() {
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/blog" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded text-white flex items-center justify-center font-bold text-xl">T</div>
                    <span className="font-bold text-xl tracking-tight">TinyBlog</span>
                </Link>

                {/* SEARCH BAR */}
                <div className={`hidden md:flex flex-1 mx-8 max-w-lg transition-all ${isSearchFocused ? 'ring-2 ring-blue-100' : ''}`}>
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Tìm kiếm trên TinyBlog..."
                            className="w-full bg-gray-100 text-sm border-none rounded-full py-2 px-4 pl-10 focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-500 transition-colors"
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setIsSearchFocused(false)}
                        />
                        <span className="absolute left-3 top-2.5 text-gray-400">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </span>
                    </div>
                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-4">
                    <Link href="/publish" className="hidden sm:flex items-center gap-1 text-gray-500 hover:text-blue-600 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        <span className="text-sm font-medium">Viết bài</span>
                    </Link>

                    {/* User Avatar & Dropdown Mock */}
                    <div className="flex items-center gap-3 pl-4 border-l">
                        <button className="relative p-1 rounded-full text-gray-400 hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                        </button>

                        <img src={CURRENT_USER.avatar} alt="Me" className="w-8 h-8 rounded-full border border-gray-200 cursor-pointer hover:ring-2 hover:ring-blue-500 transition" />
                    </div>
                </div>
            </div>
        </header>
    );
}