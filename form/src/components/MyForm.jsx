import { useState } from 'react'
import './Myform.css'

export const MyForm = ({ user }) => {

    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState( user ? user.role : '');

    const handleName = (e) => {
        setName(e.target.value)
    };

    // console.log(name);
    // console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('enviando formulário')
        console.log('nome: ' + name)
        console.log('email: ' + email)
        console.log('bio: ' + bio)
        console.log('role: ' + role)
        setName('')
        setEmail('')
        setBio('')
        setRole()
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        type="text"
                        name='name'
                        placeholder='Digite seu nome'
                        onChange={handleName}
                        value={name}
                    />
                </div>
                <label>
                    <span>E-mail</span>
                    <input
                        type="email"
                        name='email'
                        placeholder='Digite seu e-mail'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Bio: </span>
                    <textarea
                        name="bio"
                        placeholder='Bio do usuário'
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    ></textarea>
                </label>
                <label>
                    <span>função do sitema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value='enviar' />
            </form>
        </div>
    )
}
