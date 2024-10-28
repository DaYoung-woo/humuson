
import { MdSearch, MdKeyboardArrowDown, MdMenu } from 'react-icons/md';

export const Header = () => {

  return (
    <div className="flex h-screen">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="w-full">
          {/* Main Header */}
          <div className="bg-emerald-600 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="hover:bg-emerald-700 p-1 rounded-lg transition-colors"
              >
                <MdMenu className="w-6 h-6" />
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-semibold">TMS</span>
                <span className="text-sm text-emerald-100">Tool Marketing Server</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">관리자님</span>
              <MdKeyboardArrowDown className="w-5 h-5" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

