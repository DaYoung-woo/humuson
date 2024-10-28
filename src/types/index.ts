export interface MenuItemType {
  icon: React.ReactNode;
  label: string;
  link?: string;
  subItems?: {label: string, link: string}[];
}
export interface noticeItemType { 
  id: number, 
  title: string, 
  author: string, 
  date: string 
}
export interface SearchContextType {
  searchKeyword: string;
  filter: string;
  startDate: Date | null;
  filteredData: noticeItemType[];
  setSearchKeyword: (keyword: string) => void;
  setFilter: (filter: string) => void;
  setStartDate: (date: Date | null) => void;
  setFilterdData: (data: noticeItemType[]) => void 
  handleFilterData: () => void
}
