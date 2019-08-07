import React from 'react';
import AppBar from './components/AppBar/AppBar'
import SearchBar from './components/SearchBar/searchBar'
import MainScreen from './components/MainScreen/mainScreen'
import './App.css';

function App() {
  return (
    <div className="App">
     <AppBar/>
     <SearchBar/>
     <MainScreen/>
    </div>
  );
}

export default App;
