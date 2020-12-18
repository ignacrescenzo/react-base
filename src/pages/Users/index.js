import React, { useEffect, useState } from 'react'
import './styles.css'
import data from 'data/users.json'
import MuiTable from 'components/Mui-Table/MuiTable'
import CustomMaterialTable from 'components/CustomMaterialTable/CustomMaterialTable'

function Users () {
  const [users, setUsers] = useState([])

  const columns1 = [{
    name: 'name',
    label: 'Nombre'
  },
  {
    name: 'lastname',
    label: 'Apellido'
  },
  {
    name: 'document',
    label: 'Documento'
  }]

  const columns2 = [{
    field: 'name',
    title: 'Nombre'
  },
  {
    field: 'lastname',
    title: 'Apellido'
  },
  {
    field: 'document',
    title: 'Documento'
  }]

  useEffect(() => {
    getUsers()
  }, [])

  function getUsers () {
    const users = data.usuarios.map(u => {
      return ({
        name: u.nombre,
        lastname: u.apellido,
        document: u.dni
      })
    })
    setUsers(users)
  }

  return (
    <>
      {/* <MuiTable title='Users' data={users} columns={columns1} /> */}
      <CustomMaterialTable title='Users' data={users} columns={columns2} />
    </>)
}

export default Users
