import { SearchBar } from '../components/SearchBar'
import { SearchProvider } from '../context/SearchContext';
import { NoticeTable } from '../components/NoticeTable';

export const Notice = () => { 

  return (
    <div style={{width: 'calc(100% - 223px)'}} className='overflow-y-auto h-full bg-gray-50'>
      <SearchProvider >
        <SearchBar/>
        <NoticeTable/>
      </SearchProvider>
    </div>
  )
}
