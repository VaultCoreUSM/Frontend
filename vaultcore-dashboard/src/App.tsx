import React from 'react';
import Sidebar from './components/Sidebar';
import './index.css';

const App: React.FC = () => {
  return (
    <>
      <Sidebar />
      <div className='screen-container'>
      </div>
    </>
  );
};

export default App;
