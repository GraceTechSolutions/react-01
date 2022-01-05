import React, {useState} from 'react'
import BlogCard from './BlogCard'
import classes from './scss/Body.module.scss'

let mainData = [
    {
        id: 1,
        title: 'Title 1',
        author: 'Jay',
        content: 'My Blog 1'
    },
    {
        id: 2,
        title: 'Title 2',
        author: 'Raj',
        content: 'My Blog 2'
    },
    {
        id: 3,
        title: 'Title 3',
        author: 'Neha',
        content: 'My Blog 3'
    },
    {
        id: 4,
        title: 'Title 4',
        author: 'Neha 2',
        content: 'My Blog 4'
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
