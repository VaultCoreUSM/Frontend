import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/header/header';
import Home from './pages/home/home';
import { useSidebar } from './context/SidebarContext';
import './index.css';

const App: React.FC = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  return (
    <>
      <Router>
        <div className="flex h-screen">
          {sidebarOpen && <Sidebar />}
          <div className="flex flex-col flex-1">
            <Header
              sidebarOpen={sidebarOpen}
              toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />
            <main className="flex-1 overflow-y-auto p-4">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
