import React from 'react'
import Content from './main_content/Content'
import SideBar from './main_content/SideBar'

export default function Main() {
    return (
        <main className='container'>
            <SideBar />
            <Content />
        </main>
    )
}