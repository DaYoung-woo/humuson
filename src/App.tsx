import { useState } from "react";
import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"
import { MdSpaceDashboard} from 'react-icons/md';
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { IoAccessibility } from "react-icons/io5";
import { MenuItemType } from "./types";
import MenuItem from "./components/MenuItem";

const menuItems: MenuItemType[] = [
  {
    icon: <MdSpaceDashboard className="w-5 h-5" />,
    label: '게시판',
    link: '/',
    subItems: [
      { label: '공지사항', link:'/notice'},
      { label: 'Q&A', link: '/qna'},
    ]
  },
  {
    icon: <BiSolidMessageAltDetail className="w-5 h-5" />,
    label: '메시지',
    link: '/message'
  },
  {
    icon: <IoAccessibility className="w-5 h-5" />,
    label: '캠페인',
    link: '/campaign'
  },
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen">
      {/* 헤더 */}
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex h-full">
        {/* 메뉴 네비게이션 */}
        <div className={`bg-gray-50 border-r transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
          <div className="p-4">
            <div className="space-y-2">
              {menuItems.map((item: MenuItemType, index: number) => (
                <MenuItem key={index} item={item} /> 
              ))}
            </div>
          </div>
        </div>
        {/* 검색 영역 */}
        <SearchBar />
      </div>
    </div>
  )
}

export default App
