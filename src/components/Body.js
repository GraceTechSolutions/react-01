import React, {useState} from 'react'
import BlogCard from './BlogCard'
import classes from './scss/Body.module.scss'

let mainData = [
    {
        id: 1,
        title: 'Title 1',
        author: 'Jay',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 2,
        title: 'Title 2',
        author: 'Raj',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 3,
        title: 'Title 3',
        author: 'Neha',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 4,
        title: 'Title 4',
        author: 'Neha 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 5,
        title: 'Title 2',
        author: 'Raj',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 6,
        title: 'Title 3',
        author: 'Neha',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 7,
        title: 'Title 4',
        author: 'Neha 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
]

export default function Body() {
    const [data, setData] = useState(mainData)
    return (
        <div className={classes.main}>
            {data.map(value => {
                return <BlogCard key={value.id} value={value}/>
            })}
        </div>
    )
}
