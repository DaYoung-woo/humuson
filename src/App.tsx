import { useState } from "react";
import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <SearchBar/>
    </div>
  )
}

export default App
