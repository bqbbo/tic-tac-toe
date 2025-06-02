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

    function renderSquare(i) {
        return (
            <Square clickFunction={() => handleClick(i)} value={squares[i]} />
        );
    }

    function renderRow(startIndex) {
        return (
            <div className="board-row">
                {[0, 1, 2].map((offset) => renderSquare(startIndex + offset))}
            </div>
        );
    }

    function renderRows() {
        return [0, 3, 6].map((startIndex) => renderRow(startIndex));
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
            <div className="board">{renderRows()}</div>
        </>
    );
}
