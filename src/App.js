import './App.css';
import LeftSideMenu from './LeftSideMenu'
import ChatsCont from './ChatsTab/ChatsCont';
import ChatsTab from './ChatsTab';
import { Router, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <LeftSideMenu />
          <ChatsTab />
      </div>
      
      
  )}

export default App;
