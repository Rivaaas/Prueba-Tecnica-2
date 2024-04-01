import { useEffect, useState } from 'react'

import UsersList from './components/UsersList'

import { User } from './types.d'; // Asumiendo que User es una interfaz o un tipo definido en types.d


function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4")
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])



  return (
    <div>
      <div className='App' >
        <h1>Prueba técnica</h1>
        <div>
          <UsersList users={users}/>
        </div>
      </div>
    </div>
  )
}

export default App
