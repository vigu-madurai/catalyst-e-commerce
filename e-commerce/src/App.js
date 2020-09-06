import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Pod from './sharedComponents/Pod';

import './App.css';
import Placeholder from './sharedComponents/Placeholder';
import SharedModal from './sharedComponents/SharedModal';
import SearchBar from './components/SearchBar';
import SortBy from './components/SortBy';
import Filter from './components/Filter';


function App() {
  return (
    <div className="App">
      Hello
      <Header />
      <Pod/>
      <Placeholder />
      <SharedModal />
      <SearchBar />
      <SortBy />
      <Filter />
    </div>
  );
}

export default App;
