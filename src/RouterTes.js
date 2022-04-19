import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { About } from './Views/About/About';
import { AxiosHome } from './Views/AxiosBelajar/AxiosHome';
import { ReactHook } from './Views/BelajarReactHook/ReactHook';
import { ContohUse } from './Views/contoh/ContohUse';
import { Hompage } from './Views/Homepage/Hompage';
import { LocalStorage } from './Views/LocalStorage/LocalStorage';
import { LoginPage } from './Views/LoginPage/LoginPage';
import Page1 from './Views/PageBelajar/Page1';
import Page2 from './Views/PageBelajar/Page2';
import PageReduxDefaut from './Views/pageRedux/PageReduxDefaut';
import { UseTest } from './Views/UseEfectTes/UseTest';



export const RouterTes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/redux" element={<PageReduxDefaut/>}/>
        </Routes>
  </BrowserRouter>
  )
}
