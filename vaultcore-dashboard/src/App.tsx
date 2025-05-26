import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/header/header';
import { useSidebar } from './context/SidebarContext';
import './index.css';

const App: React.FC = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  return (
    <>
      <div className='app-container'>
        {sidebarOpen && (
          <Sidebar />
        )}
        <div className={`screen-container${sidebarOpen ? '' : ' full-width'}`}>
          <Header sidebarOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        </div>
      </div>
    </>
  );
};

export default App;
