import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export const Pagination = ({currentPage, setCurrentPage, filteredDataLength, itemsPerPage}) => {
  const totalPages = Math.ceil(filteredDataLength / itemsPerPage);

  const handleClickPage = (page: number) => {
    setCurrentPage(page + 1)
  }
  
  const handleClickPrevPage = () => {
    if (currentPage === 1) return
    setCurrentPage(currentPage - 1)
  }

  const handleClickNextPage = () => {
    if (currentPage === Math.ceil(filteredDataLength / itemsPerPage)) return
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className="flex items-center justify-center space-x-2 py-4 border-t">
      <button
        disabled={currentPage === 1}
        onClick={handleClickPrevPage}
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
          onClick={() => handleClickPage(i)}
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
        onClick={handleClickNextPage}
        className={`p-2 rounded-md ${
          currentPage === totalPages
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <MdKeyboardArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}
