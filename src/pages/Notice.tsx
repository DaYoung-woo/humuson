import { useState } from 'react';
import { SearchBar } from '../components/SearchBar'
import { MdAdd, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import noticeList from '../mock/noticeList.json';

const Notice = () => { 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 페이지네이션 계산
  const totalPages = Math.ceil(noticeList.length / itemsPerPage);

  return (
    <div style={{width: 'calc(100% - 223px)'}} className='overflow-y-auto' >
      <SearchBar/>
      <div className="p-6 bg-gray-50">
        {/* Table Controls */}
        <div className="mb-4 flex justify-between items-center">
          <div className="text-gray-600">
            전체 <span className="text-emerald-600 font-medium">{noticeList.length}</span>건
          </div>
          <button 
            className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
            onClick={() => console.log('Add new item')}
          >
            <MdAdd className="w-5 h-5" />
            <span>추가</span>
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  제목
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  작성자
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  작성일
                </th>
              </tr>
            </thead>
            <tbody>
              {noticeList.map((row, index) => (
                <tr 
                  key={row.id}
                  className={`
                    border-b last:border-b-0 hover:bg-gray-50 transition-colors
                    ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                  `}
                >
                  <td className="px-6 py-3 text-sm text-gray-600">
                    {row.id}
                  </td>
                  <td className="px-6 py-3">
                    <button className="text-sm text-gray-900 hover:text-emerald-600 transition-colors">
                      {row.title}
                    </button>
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-600">
                    {row.author}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-600">
                    {row.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty State */}
          {noticeList.length === 0 && (
            <div className="py-12 text-center text-gray-500">
              데이터가 없습니다.
            </div>
          )}
        </div>

        {/* Pagination */}
        {noticeList.length > 0 && (
          <div className="flex items-center justify-center space-x-2 py-4 border-t">
            <button
              disabled={currentPage === 1}
              className={`p-2 rounded-md ${
                currentPage === 1
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <MdKeyboardArrowLeft className="w-5 h-5" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === i + 1
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              className={`p-2 rounded-md ${
                currentPage === totalPages
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <MdKeyboardArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Notice