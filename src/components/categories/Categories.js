import React from 'react';
import './Categories.scss';
import Category from '../category-item/Category';
export default function Categories({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category key={category.id} category={category}></Category>
      ))}
    </div>
  );
}
