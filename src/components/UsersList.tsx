import React from 'react'

import { User } from '../types.d'; // Asumiendo que User es una interfaz o un tipo definido en types.d



const UsersList = ({ users }) => {

    return (
        <>
            <table>
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
                        users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>
                                        <img src={ } />||
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            )
                        })
                    }
                </tbody>



            </table>
        </>
    )
}

export default UsersList



//Table, thead( cabecera ), tbody (cuerpo)
//tr -> Row
//td -> Celdas

