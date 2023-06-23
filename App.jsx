import React, { Component } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from "./Footer"
import Navbar from "./Navbar"
import NewsItems from "./NewsItems"
export default class App extends Component{
    render(){
    return (
     <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route path='/' element={<NewsItems category='All'/>}></Route>
        <Route path='/politics' element={<NewsItems category='Politics'/>}></Route>
        <Route path='/crime' element={<NewsItems category='Crime'/>}></Route>
        <Route path='/science' element={<NewsItems category='Science'/>}></Route>
        <Route path='/technology' element={<NewsItems category='Technology'/>}></Route>
        <Route path='/sports' element={<NewsItems category='Sports'/>}></Route>
        <Route path='/education' element={<NewsItems category='Education'/>}></Route>
        <Route path='/entertainment' element={<NewsItems category='Entertainment'/>}></Route>
        <Route path='/jokes' element={<NewsItems category='Jokes'/>}></Route>
        </Routes>
     </BrowserRouter>
     <Footer/>
     </>
        
 )
}
}