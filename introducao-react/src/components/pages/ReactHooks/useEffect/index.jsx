import { useEffect, useState } from "react";
import axios from "axios";


export function UseEffectComponent() {
    // const [name, setName] = useState('Nome atual');

    const [users, setUsers] = useState([]);
    

    async function fetchAllUsers() {
        const response = await axios.get(
            "https://656e487ebcc5618d3c24bf2a.mockapi.io/api/users"
        );
        // const result = await response.json();
        setUsers(response.data);
    }

  

    useEffect(() => {
       fetchAllUsers();
       console.log(users)
    }, []); // array vazio só executar apenas uma vez na página

    return (
        <div className="border-t p-3 mt-2 border-black" >
            <h2>Utilizando useEffect</h2>
            {/* <h3>Nome: { user.name }</h3>
            <h3>Sobrenome: {user.lastName }</h3> */}
            
        </div>
    );
}