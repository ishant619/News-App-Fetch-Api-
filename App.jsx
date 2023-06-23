import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer'

import Navbar from "./Navbar"
import NewsItems from "./NewsItems"
export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<NewsItems category='all' />}></Route>
                    <Route path='/politics' element={<NewsItems category='politics' />}></Route>
                    <Route path='/crime' element={<NewsItems category='crime' />}></Route>
                    <Route path='/science' element={<NewsItems category='science' />}></Route>
                    <Route path='/technology' element={<NewsItems category='technology' />}></Route>
                    <Route path='/sport' element={<NewsItems category='sport' />}></Route>
                    <Route path='/education' element={<NewsItems category='education' />}></Route>
                    <Route path='/entertainment' element={<NewsItems category='entertainment' />}></Route>
                    <Route path='/jokes' element={<NewsItems category='jokes' />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}
