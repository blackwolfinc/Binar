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
import { UseTest } from './Views/UseEfectTes/UseTest';



export const RouterTes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="hompage" element={<Hompage/>}/>
          <Route path="Belajar" element={<ReactHook/>}/>
          <Route path="use" element={<About/>}/>
          <Route path="contoh" element={<ContohUse/>}/>
          <Route path="LocalStorage" element={<LocalStorage/>}/>
          <Route path="axios" element={<AxiosHome/>}/>
        </Routes>
  </BrowserRouter>
  )
}
