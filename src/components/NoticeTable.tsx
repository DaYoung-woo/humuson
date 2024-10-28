import { useEffect, useState } from "react";
import { useSearchContext } from "../context/SearchContext";
import { MdAdd } from 'react-icons/md';
import { Pagination } from "./Pagination";
const itemsPerPage = 5;

export const NoticeTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { filteredData } = useSearchContext()
  const tableData = [...filteredData].splice((currentPage - 1) * itemsPerPage, itemsPerPage);

  useEffect(() => {
    setCurrentPage(1)
  }, [filteredData])

  return (
    <div className="p-6">
      {/* Table Controls */}
      <div className="mb-4 flex justify-between items-center">
        <div className="text-gray-600">
          전체 <span className="text-emerald-600 font-medium">{filteredData.length}</span>건
        </div>
        <button 
          className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
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
              {['ID', '제목', '작성자', '작성일'].map(el => (
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500" key={el}>{el}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr 
                key={row.id}
                className={`
                  border-b last:border-b-0 hover:bg-gray-50 transition-colors
                  ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                `}
              >
                <td className="px-6 py-3 text-sm text-gray-600">{row.id}</td>
                <td className="px-6 py-3">
                  <button className="text-sm text-gray-900 hover:text-emerald-600 transition-colors">
                    {row.title}
                  </button>
                </td>
                <td className="px-6 py-3 text-sm text-gray-600">{row.author}</td>
                <td className="px-6 py-3 text-sm text-gray-600">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {tableData.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            데이터가 없습니다.
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredData.length > 0 && 
        <Pagination 
          setCurrentPage={setCurrentPage} 
          filteredDataLength={filteredData.length} 
          currentPage={currentPage} 
          itemsPerPage={itemsPerPage} 
        />
      }
    </div>
  )
}

