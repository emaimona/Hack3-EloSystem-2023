import React from 'react'
import Header from './components/Header'
import Content from './components/main_content/Content'
import SideBar from './components/main_content/SideBar'
//import Footer from './components/Footer'
import './style.css'

export default function App() {
    
    return (
        <div className='container'>
            <Header/>
            <SideBar />
            <Content />
        </div>
        
    )
}