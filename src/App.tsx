import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/frame/Layout';
import { Notice } from './pages/Notice';
import Message from './pages/Message';
import Campaign from './pages/Campaign';
import { Qna } from './pages/Qna';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Notice />} />
        <Route path="/qna" element={<Qna />} />
        <Route path="/message" element={<Message />} />
        <Route path="/campaign" element={<Campaign />} />
      </Route>
    </Routes>
  )
}

export default App
