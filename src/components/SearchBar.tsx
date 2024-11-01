import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdSearch } from 'react-icons/md';
import { ko } from 'date-fns/locale/ko';
import { useSearchContext } from "../context/SearchContext";

const selectOptions = [
  { value: 'id', label: 'ID' },
  { value: 'subject', label: '제목' },
  { value: 'writer', label: '작성자' },
]
const inputStyles = "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500";

export const SearchBar = () => {
  const { searchKeyword, filter, startDate, setSearchKeyword, setFilter, setStartDate, handleFilterData } = useSearchContext();
  
  return (
    <div className="w-full">
      <div className="bg-white border-b px-4 py-6">
        <div className="flex flex-row items-center space-x-4 justify-center">
          <div className="flex-1 max-w-2xl flex items-center space-x-2">
            <div className="basis-1/4">
              <DatePicker 
                placeholderText="등록일 기준"
                selected={startDate} 
                onChange={(date) => setStartDate(date)} 
                className={inputStyles}
                dateFormat="yyyy-MM-dd"
                locale={ko}
              />
            </div>
            <select 
              className="form-select appearance-none pr-8 pl-3 bg-no-repeat py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {selectOptions.map(el => <option value={el.value} key={el.value}>{el.label}</option>)}
            </select>
            <div className="flex-auto w-52">
              <input
                type="text"
                placeholder="검색어를 입력해주세요"
                className={inputStyles}
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onKeyUp ={(e) => e.key === 'Enter' && handleFilterData()}
              />
            </div>
            
            <button 
              className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors flex items-center justify-center"
              onClick={handleFilterData}
            >
              <MdSearch className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div> 
    </div>
  )
}
