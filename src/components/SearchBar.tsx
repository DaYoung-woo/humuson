import { MdSearch } from 'react-icons/md';

export const SearchBar = () => {
  return (
    <div className="w-full">
      <div className="bg-white border-b px-4 py-3">
        <div className="flex items-center space-x-4 justify-center">
          {/* Search Input */}
          <div className="flex-1 max-w-2xl flex items-center space-x-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="검색어를 입력해주세요"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <select className="px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500">
              <option>제목</option>
              <option>내용</option>
            </select>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors flex items-center justify-center">
              <MdSearch className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div> 
    </div>
  )
}
