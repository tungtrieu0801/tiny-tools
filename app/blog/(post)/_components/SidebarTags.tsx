import { TRENDING_TAGS } from "../../data";

export default function SidebarTags() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mt-6">
            <h3 className="font-bold text-gray-800 mb-4 text-xs uppercase">Chủ đề đề xuất</h3>
            <div className="flex flex-wrap gap-2">
                {TRENDING_TAGS.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded hover:bg-gray-200 cursor-pointer transition"
                    >
            {tag}
          </span>
                ))}
            </div>
        </div>
    );
}