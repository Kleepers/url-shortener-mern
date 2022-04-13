import React from 'react'
import useRoutes from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Toaster} from "react-hot-toast";
import Navbar from "./Components/Navbar";

function App() {
    const {token, login, logout, userId} = useAuth()
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated);
  return (
      <AuthContext.Provider value={{token,login,logout, userId, isAuthenticated}}>
          { isAuthenticated && <Navbar />}
          <div>
              {routes}
          </div>
          <Toaster />
      </AuthContext.Provider>

  )
}

export default App
