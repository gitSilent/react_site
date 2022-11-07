import './App.css';
import LeftSideMenu from './LeftSideMenu'
import ChatsCont from './ChatsTab/ChatsCont';
import ChatsTab from './ChatsTab';
import { Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <LeftSideMenu />
      <Routes>
        <Route path="/chat/*" element={<ChatsTab />} />
      </Routes>
    </div>
  );}

export default App;
