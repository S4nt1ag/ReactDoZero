import { useState } from "react"

export const ListRender = () => {

    const [list] = useState(['Matheus', 'Pedro', 'Josias', 'Santiago'])

    const [users] = useState([
        { id: 1, name: 'Matheus', age: 31 },
        { id: 35416451, name: 'Pedro', age: 28 },
        { id: 654654, name: 'Josias', age: 44 },
        { id: 71, name: 'Santiago', age: 18 },
    ]);

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
        </div>
    )
}