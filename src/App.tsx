import { useEffect, useRef, useState } from 'react'

import UsersList from './components/UsersList'
import './App.css'

import { User } from './types'; // Asumiendo que User es una interfaz o un tipo definido en types.d


function App() {

  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)

  const originalUsers = useRef<User>([])

  const [filterCountry, setFilterCountry] = useState<string | null>(null)


  const toggleColors = () => {
    setShowColors(!showColors)
  }
  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState)
  }

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
        originalUsers.current = res.results
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  const filteredUsers =  filterCountry != null && filterCountry.length > 0
  ? users.filter(user => {
    return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
  })
  : users

  const sortedUsers = sortByCountry
    ? filteredUsers.toSorted((a, b) => {
      return a.location.country.localeCompare(b.location.country)
    })
    :
    filteredUsers

  //OTRA FORMA CORRECTA DE ORDENAR POR PAIS 
  // const sortedUsers = sortByCountry ? structuredClone(users).sort((a, b) => {
  //     return a.location.country.localeCompare(b.location.country)
  //   })
  //   :
  //   users

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email != email)
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }


  

  return (
    <div className='App'>
      <h1>Administrador de usuarios</h1>
      <header>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{gap: '10%'}}>
            <button onClick={toggleColors}>
              Colorear
            </button>
          </div>
          <div style={{gap: '10%'}}>
            <button onClick={toggleSortByCountry}>
              {
                sortByCountry ? 'No ordenar por pais' : 'Ordenar por pais'
              }
            </button>
          </div>
          <div style={{gap: '10%'}}>
            <button onClick={handleReset}>
              Resetear
            </button>
          </div>
          <div>
            <input placeholder='Buscar por pais' onChange={(e) => {
              setFilterCountry(e.target.value)
            }}>
            
            </input>
          </div>
        </div>
      </header>
      <main>
        <UsersList handleDelete={handleDelete} showColors={showColors} users={sortedUsers} />
      </main>
    </div>
  )
}

export default App
