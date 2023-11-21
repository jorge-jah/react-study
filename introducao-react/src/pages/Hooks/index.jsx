import { useState } from "react";

export default function Hooks() {

    const [counter, setCounter] = useState(0);

    function handleIncrease() {
        setCounter((value) => value + 1)
    }

    function handleDecrease() {
        setCounter((value) => value - 1)
    }

    function handleClear() {
        setCounter(0)
    }

    return (
        <>
        <div>
            <h2>useState</h2>
            <div className="flex gap-2 items-center">
                <button className="text-xl" onClick={handleDecrease}>-</button>
                <p>{counter}</p>
                <button className="text-xl" onClick={handleIncrease}>+</button>
            </div>
            <div className="flex gap-2 items-center">
                <button className="text-xl" onClick={handleClear}>Limpar</button>
            </div>
        </div>
        </>
    )
}