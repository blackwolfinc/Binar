import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { About } from './Views/About/About';
import { ReactHook } from './Views/BelajarReactHook/ReactHook';
import { Hompage } from './Views/Homepage/Hompage';
import { LoginPage } from './Views/LoginPage/LoginPage';


export const RouterTes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="hompage" element={<Hompage/>}/>
          <Route path="Belajar" element={<ReactHook/>}/>

        </Routes>
  </BrowserRouter>
  )
}
