import { useState } from "react";
import Square from "./Square";

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    function handleClick(i) {
        const newBoard = squares.slice();
        if (calculateWinner(newBoard) || newBoard[i]) {
            return;
        }
        newBoard[i] = isXTurn ? "X" : "O";

        setSquares(newBoard);
        setIsXTurn(!isXTurn);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else if (squares.every((square) => square)) {
        status = "It's a draw!";
    } else {
        status = `Next player: ${isXTurn ? "X" : "O"}`;
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square
                    clickFunction={() => handleClick(0)}
                    value={squares[0]}
                />
                <Square
                    clickFunction={() => handleClick(1)}
                    value={squares[1]}
                />
                <Square
                    clickFunction={() => handleClick(2)}
                    value={squares[2]}
                />
            </div>
            <div className="board-row">
                <Square
                    clickFunction={() => handleClick(3)}
                    value={squares[3]}
                />
                <Square
                    clickFunction={() => handleClick(4)}
                    value={squares[4]}
                />
                <Square
                    clickFunction={() => handleClick(5)}
                    value={squares[5]}
                />
            </div>
            <div className="board-row">
                <Square
                    clickFunction={() => handleClick(6)}
                    value={squares[6]}
                />
                <Square
                    clickFunction={() => handleClick(7)}
                    value={squares[7]}
                />
                <Square
                    clickFunction={() => handleClick(8)}
                    value={squares[8]}
                />
            </div>
        </>
    );
}
