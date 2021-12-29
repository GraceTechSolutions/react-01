import React from 'react'
import classes from './Main.module.scss'
import Navbar from './Navbar'

export default function Main() {
    return (
        <div className={classes.body}>
            <Navbar/>
        </div>
    )
}
