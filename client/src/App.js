import React from 'react';
import Header from './Header.js';
import Feed from './Feed.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex', gap: '10px' }}>
        <Sidebar />
        <Feed />
      </div>
      <Footer />
    </div>
  );
}

export default App;
