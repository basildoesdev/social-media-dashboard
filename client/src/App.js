import React from 'react';
import Header from './Header.js';
import Feed from './Feed.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';

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
