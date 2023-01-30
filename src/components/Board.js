import { useState, useEffect } from 'react'
import Block from './Block'

const Board = () => {
    const [board, setBoard] = useState(new Array(30).fill(new Array(60).fill('dead')))

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
        setInterval(() => {

            setBoard(board => {
                const currentBoard = board.map((row, rowIndex) => {
                    return row.map((col, colIndex) => {
                        return col
                    })
                })
                return board.map((row, rowIndex) => {
                    return row.map((status, colIndex) => {
                        let numberOfAliveNeighbors = 0
                        if (currentBoard[rowIndex - 1] !== undefined) {
                            if (currentBoard[rowIndex - 1][colIndex - 1] !== undefined && currentBoard[rowIndex - 1][colIndex - 1] === 'alive') {
                                numberOfAliveNeighbors += 1
                            }
                            
                            if (currentBoard[rowIndex - 1][colIndex] !== undefined && currentBoard[rowIndex - 1][colIndex] === 'alive') {
                                numberOfAliveNeighbors += 1
                            }
                            
                            if (currentBoard[rowIndex - 1][colIndex + 1] !== undefined && currentBoard[rowIndex - 1][colIndex + 1] === 'alive') {
                                numberOfAliveNeighbors += 1
                            }
                        }

                        if (row[colIndex - 1] !== undefined && row[colIndex - 1] === 'alive') {
                            numberOfAliveNeighbors += 1
                        }
                        if (row[colIndex + 1] !== undefined && row[colIndex + 1] === 'alive') {
                            numberOfAliveNeighbors += 1
                        }
                        
                        if (currentBoard[rowIndex + 1] !== undefined) {
                            if (currentBoard[rowIndex + 1][colIndex - 1] !== undefined && currentBoard[rowIndex + 1][colIndex - 1] === 'alive') {
                                numberOfAliveNeighbors += 1
                            }
                            
                            if (currentBoard[rowIndex + 1][colIndex] !== undefined && currentBoard[rowIndex + 1][colIndex] === 'alive') {
                                numberOfAliveNeighbors += 1
                            }
                            
                            if (currentBoard[rowIndex + 1][colIndex + 1] !== undefined && currentBoard[rowIndex + 1][colIndex + 1] === 'alive') {
                                numberOfAliveNeighbors += 1
                            }
                        }

                        if (status === 'dead' && numberOfAliveNeighbors === 3) {
                            return 'alive'
                        }

                        if (status === 'alive' && (numberOfAliveNeighbors <= 1 || numberOfAliveNeighbors >= 4)) {
                            return 'dead'
                        }

                        if (status === 'alive' && (numberOfAliveNeighbors === 2 || numberOfAliveNeighbors === 3)) {
                            return 'alive'
                        }
                        return status
                    })
                })
            })
        }, 200);
    }


    const universe = board.map((row, rowIndex) => {
        return <div key={Math.random().toString()} style={{display: 'flex'}}>
            {row.map((status, colIndex) => {
                return <Block key={Math.random().toString()} status={status} indexes={{rowIndex, colIndex}}/>
            })}
        </div>
    })

    return (
        <div style={{marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            {universe}
            <button style={{ margin: '20px', fontSize: '2em' }} onClick={timeForward}>Begin</button>
        </div>
    )
}

export default Board