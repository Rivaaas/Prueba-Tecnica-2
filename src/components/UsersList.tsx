import React from 'react'

import { User } from '../types.d'; // Asumiendo que User es una interfaz o un tipo definido en types.d


interface Props {
    users: User[]
    showColors: Boolean
    sortedUsers: Boolean
    handleDelete: (email: String) => void
}

const UsersList = ({ users, showColors, sortedUsers, handleDelete }: Props) => {

    return (
        <div>
            <table width="100%">
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Pais</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            const backgroundColor = index % 2 === 0 ? '#333' : '#555'
                            const color = showColors ? backgroundColor : 'transparent'
                            return (
                                <tr key={user.email} style={{ backgroundColor: color }}>
                                    <td>
                                        <img src={user.picture.thumbnail} />
                                    </td>
                                    <td>
                                        {user.name.first}
                                    </td>
                                    <td>
                                        {user.name.last}
                                    </td>
                                    <td>
                                        {user.location.country}
                                    </td>
                                    <td>
                                        <button onClick={() => {
                                            handleDelete(user.email)
                                        }}>Borrar</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersList



//Table, thead( cabecera ), tbody (cuerpo)
//tr -> Row
//td -> Celdas

