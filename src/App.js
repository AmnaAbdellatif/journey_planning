import {SearchBar} from './components/SearchBar';
import React from 'react';
import SearchList from './components/SearchList';



function App() {
console.log('hiii');
  return (
    <div className="App">
     <div className="search-bar-container">

        <SearchList/>
      </div>
    </div>
  );
}

export default App;
