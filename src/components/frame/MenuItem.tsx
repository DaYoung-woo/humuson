import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';
import { MenuItemType } from '../../types';
import { useLocation, useNavigate } from 'react-router-dom';

const MenuItem = ({item}: {item: MenuItemType}) => {
  const [isOpen, setIsOpen] = useState(item.label === '게시판' ? true : false);
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const handleClick = (item: MenuItemType) => {
    if (item.subItems) {
      setIsOpen(!isOpen);
      return
    }
    navigate(item.link ?? '/');
  }   

  return (
    <div className="mb-1">
      {/* Main Menu Item */}
      <button
        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors ${pathname === item.link ? 'bg-gray-100' : ''}`}
        onClick={() => handleClick(item)}
      >
        <div className={`flex-shrink-0 ${pathname === item?.link ? 'text-emerald-600' : ''}`}>{item.icon}</div>
        <span className={`flex-1 text-left ${pathname === item?.link ? 'text-emerald-600' : ''}`}>{item.label}</span>
        {item.subItems && (
          <div className="flex-shrink-0">
            {isOpen ? (
              <MdKeyboardArrowUp className="w-5 h-5 text-gray-500" />
            ) : (
              <MdKeyboardArrowDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
        )}
      </button>

      {/* Sub Menu Items */}
      {item.subItems && isOpen && (
        <div className="ml-8 mr-4 mt-1 space-y-1">
          {item.subItems.map((subItem, index) => (
            <button
              key={index}
              onClick={() => navigate(subItem.link)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm ${pathname === subItem.link ? 'bg-gray-100' : ''}`}
            >
              <span className={`flex-1 text-left ${pathname === subItem.link ? 'text-emerald-600' : ''}`}>{subItem.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuItem