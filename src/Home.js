import React from 'react'
import classes from './scss/Home.module.scss'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { Route, Switch } from 'react-router-dom'


export default function Main() {
    return (
        <div className={classes.body}>
            <Navbar/>
            <Switch>
                <Route to='/' component={Body} exact/>
                {/* <Route to='/article' component={Article}/> */}
            </Switch>
        </div>
    )
}
