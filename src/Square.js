export default function Square({ value, clickFunction }) {
    return (
        <button className="square" onClick={clickFunction}>
            {value}
        </button>
    );
}
