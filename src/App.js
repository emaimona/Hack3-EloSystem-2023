import React from 'react'
import Header from './components/Header'
import Content from './components/main_content/Content'
import SideBar from './components/main_content/SideBar'
//import Footer from './components/Footer'
import './style.css'

export default function App() {
    const [formId, setFormId] = React.useState(1)

    return (
        <div className='container'>
            <Header setFormId={setFormId} />
            <SideBar setFormId={setFormId} formId={formId} />
            <Content formId={formId} setFormId={setFormId} />
        </div>
        
    )
}