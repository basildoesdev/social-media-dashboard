import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

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
