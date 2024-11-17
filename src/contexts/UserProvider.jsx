import { createContext } from "react"

export const UserContext = createContext();
const UserProvider = ({children}) => {

    const name = 'Daniel Godwin'
  return (
    <UserContext.Provider value={{name}}>
        {children}
      
    </UserContext.Provider>
  )
}

export default UserProvider
