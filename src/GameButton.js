export default function GameButton({ name, gameFunction }) {
    return (
        <button className="undo-button" onClick={gameFunction}>
            {name}
        </button>
    );
}
