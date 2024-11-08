import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import SignIn from './routes/signin/SignIn';
const Shop = () => <h1>Shop</h1>;
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}
