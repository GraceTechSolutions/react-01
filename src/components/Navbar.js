import React from 'react'
import Logo from './Logo'
import Link from './Link'
import classes from './scss/Navbar.module.scss'

export default function Navbar() {
    let links_list = [
        {name: 'Home', id:1, endpoint: 'home'},
        {name: 'About', id:2, endpoint: 'about'}, 
        {name: 'Address', id:3, endpoint: 'address'}, 
        {name: 'Contact', id:4, endpoint: 'contact'}
    ]
    return (
        <div className={classes.navbar}>
            <Logo/>
            <div>
            {links_list.map(val =>{
                return <Link key={val.id} name={val.name} endpoint={val.endpoint}/>
            })}
            </div>
        </div>
    )
}
