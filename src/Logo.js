import React from 'react'
import classes from './Logo.module.css'

export default function Logo() {
    return (
        <div>
            <h1 className={classes.text}>Amazon</h1>
            <p className={classes.desc}>Get anything</p>
        </div>
    )
}
