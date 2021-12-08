import React, { useState } from 'react'
import '../Styles/Game.css'
const Game = () => {


    const [turn, setTurn] = useState('X');

    const [sells, setSells] = useState(Array(9).fill(''));

    const HandleClick = (num) => {

        let squares = [...sells];

        if (turn == 'X') {
            squares[num] = 'X';
            setTurn('o')
        }
        else {
            squares[num] = 'O';
            setTurn('X')
        }
        setSells(squares);
        console.log(squares)
    }

    const Cell = ({ num }) => {
        return <td onClick={() => HandleClick(num)}>{sells[num]}</td>
    }
    return (
        <>
            <div className="container">
                <table>
                    Turn : {turn}
                    <tbody>
                        <tr>

                            <Cell num={0} />
                            <Cell num={1} />
                            <Cell num={2} />

                        </tr>
                        <tr>

                            <Cell num={3} />
                            <Cell num={4} />
                            <Cell num={5} />

                        </tr>
                        <tr>

                            <Cell num={6} />
                            <Cell num={7} />
                            <Cell num={8} />

                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Game;
