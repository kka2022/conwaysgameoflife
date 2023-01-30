import { useState } from 'react'

const Block = (props) => {
    const { status, indexes } = props

    const buttonStyle = {
        width: '20px',
        height: '20px',
        backgroundColor: status === "alive" ? '#00ff00' : '#888888',
        border: '1px solid #444444',
        margin: '0',
        padding: '0'
    }

    return (
        <>
            <button style={buttonStyle}></button>
        </>
    )
}

export default Block