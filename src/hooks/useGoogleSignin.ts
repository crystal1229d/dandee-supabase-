import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '@/lib/supabase'

function useGoogleSignin() {
  const navigate = useNavigate()

  const signin = useCallback(async () => {
    try {
      const { data } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      })

      // 이미 가입한 유저
      if (data) {
        // const { data, error } = await supabase.auth.signUp({
        //   email: 'example@email.com',
        //   password: 'example-password',
        // })
      }

      navigate('/')
    } catch (error) {
      throw new Error('fail to signin')
    }
  }, [navigate])

  const signout = useCallback(async () => {
    await supabase.auth.signOut()
  }, [])

  return { signin, signout }
}

export default useGoogleSignin
