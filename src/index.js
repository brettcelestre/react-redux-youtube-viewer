import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCf3Tv9pOzYXfa43frj6zg9171kqPpvM-A';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);