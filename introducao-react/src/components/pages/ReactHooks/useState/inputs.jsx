import { useEffect, useState } from "react";

export function Inputs() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    const [user, setUser] = useState({
        name: "",
        lastName: "",
        age: "",
        email: "",
        date: "",
    });


    function handleName(e) {
        setName(e.target.value);
    }

    function handleLastName(e) {
        setLastName(e.target.value);
    }
    function handleInput(e) {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    }

    function handleDateShow(value) {
        const date = new Date(value).toLocaleDateString('pt-BR', {
            // dateStyle: 'short',
            hour12: false,
            timeZone: 'UTC'
        })
        return date;
    }

    useEffect(() => {
        console.log(user)
    }, [user]
    );
  

    return (
        <>
            <h2>Inputs no React com useState</h2>
            <div className="flex flex-col gap-2">
                <input type="text" name="name" placeholder="Nome" className="border border-black rounded px-2 py-1 outline-none" value={user.name} onChange={handleInput}></input>
                <input type="text" name="lastName" placeholder="Sobrenome" className="border border-black rounded px-2 py-1 outline-none" value={user.lastName} onChange={handleInput}></input>
                <input type="number" name="age" placeholder="Idade" className="border border-black rounded px-2 py-1 outline-none" value={user.age} onChange={handleInput}></input>
                <input type="email" name="email" placeholder="Email" className="border border-black rounded px-2 py-1 outline-none" value={user.email} onChange={handleInput}></input>
                <input type="date" name="date" placeholder="Data de Nascimento" className="border border-black rounded px-2 py-1 outline-none" value={user.date} onChange={handleInput}></input>

            </div>
            <div className="flex gap-1">
                <p>Nome: {user.name} {user.lastName}</p>


            </div>
            <div>
                <p>Idade: {user.age}</p>
                <p>Email: {user.email}</p>
                <p>Data de Nascimento: { user.date ? handleDateShow(user.date) : "" }</p>

            </div>
        </>
    )
}