import React from 'react';
import './App.css';
import Header from './components/Header';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import SearchBar from './components/SearchBar';
import Group from './components/Group'

function App() {
  return (
    <div className="App">
     <Header />
     <main className='main-container'>
       <div className='left-container'>
          <Heading/>
          <Paragraph />
          <SearchBar/>
       </div>
       <div className='right-container'>
        <Group />
       </div>
     </main>
    </div>
  );
}

export default App;
