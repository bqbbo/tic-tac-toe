import { calculateWinner } from "./func";
import Square from "./Square";

export default function Board({ isXTurn, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        const newSquares = squares.slice();
        if (isXTurn) {
            newSquares[i] = "X";
        } else {
            newSquares[i] = "O";
        }

        onPlay(newSquares);
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
