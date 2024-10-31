import React from 'react';
import Header from './components/Header.js';
import Feed from './components/Feed.js';
import Sidebar from './components/Sidebar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Feed />
      <Footer />
    </div>
  );
}

export default App;
