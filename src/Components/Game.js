import React, { useState } from 'react'
import '../Styles/Game.css'
const Game = () => {


    const [turn, setTurn] = useState('X');

    const [sells, setSells] = useState(Array(9).fill(''));

    const [winner, setWinner] = useState();

    //Check Winner Logic

    const HandleWinnder = (squares) => {

        let combos = {
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]

            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]

            ],
            diagnol: [
                [0, 4, 8],
                [2, 4, 6]

            ]
        };

        for (let combo in combos) {
            combos[combo].forEach(element => {
                if (squares[element[0]] === '' || squares[element[0]] === '' || squares[element[0]] === '') {

                }
                else if (squares[element[0]] === squares[element[1]] && squares[element[1]] === squares[element[2]]) {
                    setWinner(squares[element[0]])
                }
            });
        }
    }

    const HandleClick = (num) => {

        if (sells[num] !== '') {

            return;
        }

        let squares = [...sells];

        if (turn == 'X') {
            squares[num] = 'X';
            setTurn('o')
        }
        else {
            squares[num] = 'O';
            setTurn('X')
        }
        HandleWinnder(squares)
        setSells(squares);

    }

    const handleRestart = () => {
        setWinner(null)
        setSells(Array(9).fill(''))
    }

    const Cell = ({ num }) => {
        return <td onClick={() => HandleClick(num)}>{sells[num]}</td>
    }
    return (
        <>
            <div className="container">
                <table>

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

                {winner && (
                    <>
                        <p>{winner} is Winner !</p>
                        <button onClick={() => handleRestart()}>Play Again</button>
                    </>
                )}
            </div>

        </>
    )
}

export default Game;
