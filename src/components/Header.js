import React from 'react'


export default function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <img src='./assets/images/esport_manager.png' alt='logo'></img>
            </div>
            <div className='header-search'>
                <div className='header--input-search'>
                    <img src='sea' alt='search icon'/>
                    <input type="text" className="" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </div>
        </header>
    )
}