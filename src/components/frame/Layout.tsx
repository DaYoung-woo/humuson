import { useState } from "react";
import { Outlet } from 'react-router-dom';
import { MdSpaceDashboard} from 'react-icons/md';
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { IoAccessibility } from "react-icons/io5";
import { MenuItemType } from "../../types";
import { Header } from "./Header";
import MenuItem from "./MenuItem";

const menuItems: MenuItemType[] = [
  {
    icon: <MdSpaceDashboard className="w-5 h-5" />,
    label: '게시판',
    subItems: [
      { label: '공지사항', link:'/'},
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

export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen">
      {/* 헤더 */}
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex" style={{height: 'calc(100% - 56px)'}}>
        {/* 메뉴 네비게이션 */}
        <div className={` border-r transition-all duration-300 ${isSidebarOpen ? 'w-56' : 'w-0'} overflow-hidden`}>
          <div className="py-2">
            <div className="space-y-2">
              {menuItems.map((item: MenuItemType, index: number) => (
                <MenuItem key={index} item={item} /> 
              ))}
            </div>
          </div>
        </div>
        <Outlet /> {/* 자식 컴포넌트가 렌더링될 위치 */}
      </div>
    </div>
  )
}
