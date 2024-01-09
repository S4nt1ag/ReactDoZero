import { useState } from "react";

export const ListRender = () => {

    const [list] = useState(['Matheus', 'Pedro', 'Josias', 'Santiago'])

    const [users, setUsers] = useState([
        { id: 1, name: 'Matheus', age: 31 },
        { id: 2, name: 'Pedro', age: 28 },
        { id: 3, name: 'Josias', age: 44 },
        { id: 4, name: 'Santiago', age: 18 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random</button>
        </div>
    )
}