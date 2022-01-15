import React from 'react'
import classes from './scss/Links.module.scss'
import { Link as _Link } from 'react-router-dom'


export default function Link({name, endpoint, index, setIndex, currentIndex}) {
    let style = (index===currentIndex) ? {borderBottomColor: '#FFF'}: {borderBottomColor: '#000'}
    return (
        <_Link style={style} to={endpoint} onClick={()=>{ setIndex(currentIndex); console.log(currentIndex) }} className={classes.link}>{name}</_Link>
    )
}
