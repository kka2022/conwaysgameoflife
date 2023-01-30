import { useState } from 'react'

const Block = (props) => {
    const { status, indexes } = props

    const buttonStyle = {
        width: '30px',
        height: '30px',
        backgroundColor: status === "alive" ? '#00ff00' : '#888888'
    }

    return (
        <>
            <button style={buttonStyle}>{indexes.rowIndex}{indexes.colIndex}</button>
        </>
    )
}

export default Block