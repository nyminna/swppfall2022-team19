import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductDetailPage from './containers/ProductDetailPage/ProductDetailPage';
import React from 'react';

// for debug (Minji) 아직 페이지 따로 안 만들어서 컴포넌트 별로 확인하려고 넣음
// have to install 'yarn add react-select' for Survey
import ProductBlock from "./components/ProductBlock/ProductBlock";


import Login from './containers/UserSurvey/Login'
import SignupSurvey from './containers/UserSurvey/SignupSurvey'
import Home from './containers/Home/Home'
import Category from './containers/Category/Category'

// 
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/signup' element={<SignupSurvey />} />
          <Route path="/:productId/ProductDetail" element={<ProductDetailPage />} />
          <Route path="/productList/:companyID" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
