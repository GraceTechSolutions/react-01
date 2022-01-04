import React from 'react'
import classes from './scss/Home.module.scss'
import Navbar from './components/Navbar'

export default function Main() {
    return (
        <div className={classes.body}>
            <Navbar/>
        </div>
    )
}
