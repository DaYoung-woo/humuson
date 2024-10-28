import {  Routes, Route } from 'react-router-dom';
import {Layout} from './components/frame/Layout';
import Notice from './pages/Notice';
import Message from './pages/Message';
import Campaign from './pages/Campaign';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Notice />} />
        <Route path="about" element={<Message />} />
        <Route path="contact" element={<Campaign />} />
      </Route>
    </Routes>
  )
}

export default App
