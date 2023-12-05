import { useState } from "react";
import { Inputs } from "../../components/pages/ReactHooks/useState/inputs";
import { UseEffectComponent } from "../../components/pages/ReactHooks/useEffect";

export default function Hooks() {

    const [counter, setCounter] = useState(0);
    const [amount, setAmount] = useState();

    function handleIncrease() {
        setCounter((value) => value + 1);
    }

    function handleDecrease() {
        setCounter((value) => value - 1);
    }

    function handleClear() {
        setCounter(0);
    }

    function addNumber() {
        setCounter((value) => value + Number(amount));

    }

    function addTen() {
        setCounter((value) => value + 10);
    }

    function removeTen() {
        setCounter((value) => value - 10);
    }

    return (
        <>
            <div>
                <h2>useState</h2>
                <div className="flex gap-2">
                    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} ></input>
                    <button className="px-2 py-1 border bg-sky-800 rounded text-white" onClick={addNumber}>Enviar</button>
                </div>

                <div className="flex gap-2 items-center">
                <button className="px-2 py-1 border bg-sky-800 rounded text-white" onClick={removeTen}>-10</button>
                    <button className="px-2 py-1 border bg-sky-800 rounded text-white" onClick={handleDecrease}>-</button>
                    <p>{counter}</p>
                    <button className="px-2 py-1 border bg-sky-800 rounded text-white" onClick={handleIncrease}>+</button>
                    <button className="px-2 py-1 border bg-sky-800 rounded text-white" onClick={addTen}>+10</button>
                </div>

                <div className="flex gap-2 items-center">
                    
                    
                </div>
                <div className="flex gap-2 items-center">
                    <button className="px-2 py-1 border bg-sky-800 rounded text-white" onClick={handleClear}>Limpar</button>
                </div>
            </div>
        {/* <Inputs/> */}
        <UseEffectComponent/>
        </>
    )
}