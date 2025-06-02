import { useState } from "react";

import Board from "./Board";
import GameButton from "./GameButton";

export default function App() {
    const [isXTurn, setIsXTurn] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [previousHistory, setPreviousHistory] = useState([
        Array(9).fill(null),
    ]);
    const currentSquares = history[history.length - 1];

    function handlePlay(newBoard) {
        setIsXTurn(!isXTurn);
        setHistory([...history, newBoard]);
        setPreviousHistory([...history, newBoard]);
    }

    function undo() {
        if (history.length > 1) {
            const newHistory = history.slice(0, -1);
            setHistory(newHistory);
            setIsXTurn(newHistory.length % 2 === 1);
        }
    }

    function redo() {
        if (previousHistory.length > history.length) {
            const newBoard = previousHistory[history.length];
            setHistory([...history, newBoard]);
            setIsXTurn(!isXTurn);
        }
    }

    return (
        <div className="game">
            <div className="header">
                <h1>Tic Tac Toe</h1>
                <p>
                    Created by <a href="https://github.com/bqbbo">bqbbo</a>
                </p>
            </div>
            <div className="game-board">
                <GameButton name="Undo" gameFunction={undo} />
                <GameButton name="Redo" gameFunction={redo} />
                <Board
                    isXTurn={isXTurn}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
        </div>
    );
}
