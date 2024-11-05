import React from 'react';
import '../../index.scss';
import categoriesData from '../../categories.json';
import Categories from '../../components/categories/Categories';

function App() {
  return (
    <div>
      <Categories categories={categoriesData} />
    </div>
  );
}

export default App;
