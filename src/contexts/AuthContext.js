import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'

import { recoverUserInformation, signInRequest } from "../services/auth";
import { api } from "../services/api";

const User = {
  name: null,
  email: null
}

const SignInData = {
  email: null,
  password: null,
}

const AuthContextType = {
  isAuthenticated: false,
  user: User,
  signIn: SignInData
}

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(User)

  const isAuthenticated = user.email!==null;

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
    //   recoverUserInformation().then(response => {
    //     setUser(response.user)
    //   })
    // setUser({name:"teste",email:'teste@teste.com'})
    }
  }, [])

  async function signIn({ email, password }) {
    const {access_token,detail} = await signInRequest({
      email,
      password,
    })
    if(access_token){

      setCookie(undefined, 'nextauth.token', access_token, {
        maxAge: 60 * 60 * 1, // 1 hour
      })

      api.defaults.headers['Authorization'] = `Bearer ${access_token}`;

      setUser({email:email})

      Router.push('/membros');
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}