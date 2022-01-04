import React from 'react'
import classes from './scss/Links.module.scss'

export default function Link({name, endpoint}) {
    return (
        <a href={endpoint} className={classes.link}>{name}</a>
    )
}
