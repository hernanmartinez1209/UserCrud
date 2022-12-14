import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './compuones/FormUsers'
import UserCard from './compuones/UserCard'
const BASEURL ='https://users-crud1.herokuapp.com'
function App() {
   const [users, setUsers] = useState()
   const [upgradeInfoUser, setUpgradeInfoUser] = useState()
   
//---------este es para ver la API -----
   const getAllUsers = () =>{
   const URL =`${BASEURL}/users/`
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
   }

   useEffect (() => {
    getAllUsers()
   }, [])
   console.log(users);
//------ PARA CREAR UN USERS--------

const createUser = data =>{
  const URL = `${BASEURL}/users/`
  axios.post(URL, data)
  .then(res =>{
    console.log(res.data)
  getAllUsers()
  } )
  .catch(err => console.log(err))
}
//-------PARA ELIMINAR UN USER------
const deleteUserById = id =>{
  const URL = `${BASEURL}/users/${id}/`
  axios.delete(URL)
  .then(res =>{
    console.log(res.data)
  getAllUsers()
  } )
  .catch(err => console.log(err))
}
//-------PARA ACTUALIZAR UN USER------
const upgradeUserById = (id,data) =>{
  const URL = `${BASEURL}/users/${id}/`
  axios.put(URL, data)
  .then(res =>{
    console.log(res.data)
  getAllUsers()
  } )
  .catch(err => console.log(err))
}
   return (
    <div className="App">
   <div >
   <FormUsers 
     createUser={createUser}
     upgradeInfoUser={upgradeInfoUser}
     upgradeUserById={upgradeUserById}
     setUpgradeInfoUser={setUpgradeInfoUser}
    />
   </div>
    <div className='contedorUser'>
    {
      users?.map( user => (
        <UserCard
        key={user.id}
        user={user}
        deleteUserById={deleteUserById}
        setUpgradeInfoUser={setUpgradeInfoUser}
        />
      ))
    }
    </div>
    </div>
  )
}

export default App
