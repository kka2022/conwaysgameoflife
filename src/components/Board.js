import { useState, useEffect } from 'react'
import Block from './Block'

const Board = () => {
    const [board, setBoard] = useState(new Array(10).fill(new Array(10).fill('dead')))

    useEffect(() => {
        setBoard(board => {
            return board.map(row => {
                return row.map(block => {
                    const random = Math.random()
                    return (random > 0.8 ? 'alive' : 'dead')
                })
            })
        })
    }, [])
    

    const timeForward = () => {
        // setInterval(() => {

            setBoard(board => {
                const currentBoard = board.map((row, rowIndex) => {
                    return row.map((col, colIndex) => {
                        return col
                    })
                })
                return board.map((row, rowIndex) => {
                    return row.map((status, colIndex) => {
                        let numberOfAliveNeighbors = 0
                        if (row[colIndex - 1] !== undefined && row[colIndex - 1] === 'alive') {
                            numberOfAliveNeighbors += 1
                        }
                        if (row[colIndex + 1] !== undefined && row[colIndex + 1] === 'alive') {
                            numberOfAliveNeighbors += 1
                        }
                        if (currentBoard[rowIndex - 1] !== undefined) 
                        console.log(numberOfAliveNeighbors);
                        return numberOfAliveNeighbors === 2 ? 'alive' : status
                    })
                })
            })
        // }, 2000);
    }


    const universe = board.map((row, rowIndex) => {
        return <div key={Math.random().toString()}>
            {row.map((status, colIndex) => {
                return <Block key={Math.random().toString()} status={status} indexes={{rowIndex, colIndex}}/>
            })}
        </div>
    })

    return (
        <div style={{marginTop: '30px'}}>
            {universe}
            <button style={{ margin: '20px', fontSize: '2em' }} onClick={timeForward}>Forward</button>
        </div>
    )
}

export default Board