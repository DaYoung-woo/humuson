// SearchContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import noticeList from '../mock/noticeList.json';
import { SearchContextType } from '../types';


const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filter, setFilter] = useState('id');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [filteredData, setFilterdData] = useState([...noticeList])

   // 검색어 및 필터를 기준으로 데이터 필터링
   const handleFilterData = () => {
    setFilterdData(noticeList.filter((item) => {
      const isMatchingDate = !startDate || new Date(item.date) >= startDate;
      const isMatchingFilter =
        (filter === 'id' && item.id.toString().includes(searchKeyword)) ||
        (filter === 'subject' && item.title.includes(searchKeyword)) ||
        (filter === 'writer' && item.author.includes(searchKeyword));
      return isMatchingDate && isMatchingFilter;
    }))
  }

  return (
    <SearchContext.Provider value={{ handleFilterData, searchKeyword, filter, startDate, filteredData, setSearchKeyword, setFilter, setStartDate, setFilterdData }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error('useSearchContext must be used within a SearchProvider');
  return context;
};
