import React from 'react'
import Logo from './Logo'
import Link from './Link'

export default function Navbar() {
    let links_list = ['Home', 'About', 'Address', 'Contact']
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
            <Logo/>
            <div className='container'>
            {links_list.map(val =>{
                return <Link value={val}/>
            })}
            </div>
        </div>
    )
}
