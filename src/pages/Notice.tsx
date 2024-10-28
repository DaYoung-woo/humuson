import { SearchBar } from '../components/SearchBar'
import { SearchProvider } from '../context/SearchContext';
import { NoticeTable } from '../components/NoticeTable';


export const Notice = () => { 

  return (
    <SearchProvider >
      <SearchBar/>
      <NoticeTable/>
    </SearchProvider>
  )
}
