import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
const DuplicateComponent = () => {

const { userData,someNumber} =useContext(UserContext)   


  return (
    <div>

    <p>Followers - {userData.followers} </p>
    <p>Following - {userData.following}</p>
    <div className="text-center p-2 bg-white rounded shadow">
        <span className="text-gray-600">{someNumber}</span>
          
        </div>
     
    </div>
  )
}

export default DuplicateComponent