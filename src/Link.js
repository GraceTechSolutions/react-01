import React from 'react'

export default function Link({value}) {
    return (
        <a href='#{value}' style={{padding: '20px'}}>{value}</a>
    )
}
