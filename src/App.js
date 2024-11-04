import React from 'react';
import categoriesData from './categories.json';
import Categories from './components/categories/Categories';

function App() {
  return <Categories categories={categoriesData} />;
}

export default App;
