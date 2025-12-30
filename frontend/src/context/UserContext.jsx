import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthDataContext } from './AuthContext.jsx'
import axios from 'axios'

export const UserDataContext = createContext()

function UserContext({ children }) {
  const [userData, setUserData] = useState("")
  const { serverUrl } = useContext(AuthDataContext)

  const getCurrentUser = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/user/getcurrentuser", { withCredentials: true })
      setUserData(result.data)
      console.log(result.data)
    } catch (error) {
      setUserData(null)
      console.log(error)
    }
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  const value = {
    userData,
    setUserData,
    getCurrentUser
  }

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserContext
