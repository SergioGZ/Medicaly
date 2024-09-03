import { createContext, useState, useEffect } from "react"
import { Token, User } from "@/api"

const tokenCtrl = new Token()
const userCtrl = new User()

export const AuthContext = createContext()

export function AuthProvider(props) {
  const { children } = props
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const token = tokenCtrl.getToken()

      if (!token) {
        logout()
        setLoading(false)
        return
      }

      if (tokenCtrl.hasExpired(token)) {
        logout()
      } else {
        await login(token)
      }
    })()
  }, [])

  const login = async (token) => {
    try {
      tokenCtrl.setToken(token) // Set token in local storage
      const response = await userCtrl.getMe() // Get user data
      setUser(response) // Set user in state user
      setToken(token) // Set token in state token
      setLoading(false) // Set loading to false
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  const logout = () => {
    tokenCtrl.removeToken()
    setUser(null)
    setToken(null)
  }

  const updateUser = (key, value) => {
    setUser({ ...user, [key]: value })
  }

  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser,
  }

  if (loading) {
    return null
  }

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
