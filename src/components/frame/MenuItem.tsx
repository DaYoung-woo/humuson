import { useState } from 'react';
import { MenuItemType } from '../types'
import { MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md';

const MenuItem = ({item}: {item: MenuItemType}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-1">
      {/* Main Menu Item */}
      <button
        className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-800"
        onClick={() => item.subItems && setIsOpen(!isOpen)}
      >
        <div className="flex-shrink-0">{item.icon}</div>
        <span className="flex-1 text-left text-gray-800">{item.label}</span>
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
        <div className="ml-8 mt-1 space-y-1">
          {item.subItems.map((subItem, index) => (
            <button
              key={index}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm text-gray-600"
            >
              <span className="flex-1 text-left">{subItem.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuItem