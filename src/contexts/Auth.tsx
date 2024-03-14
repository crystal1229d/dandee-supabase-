import supabase from '@/lib/supabase'
import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session)
      //   setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session)

      //   setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <>{children}</>
    // <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}
