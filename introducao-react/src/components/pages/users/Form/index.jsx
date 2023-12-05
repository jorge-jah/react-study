import { userUsersForm } from "./useUsersForm"

export function Form() {

    const { user, handleUser, handleSubmit } = userUsersForm();
    return (
        <form className="flex flex-col gap-2 py-4 px-4 border rounded-md justify-center items-center bg-white shadow" onSubmit={ handleSubmit }>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Nome: </label>
                    <input type="text" placeholder="Seu nome" id="name" name="name" className="border border-black rounded px-2 py-1 outline-none" onChange={handleUser} value={user.name}></input>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="lasName">Sobrenome: </label>
                    <input type="text" placeholder="Seu sobrenome" id="lastName" name="lastName" className="border border-black rounded px-2 py-1 outline-none" onChange={handleUser} value={user.lastName}></input>
                </div>
                <button className="w-full h-10 flex my-2 justify-center items-center text-white bg-sky-950 rounded shadow">Enviar</button>
            </form>
    )
}