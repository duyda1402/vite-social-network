import { useAppSelector, useAppDispatch } from '../../libs/redux/hooks'
import type { RootState } from '../../libs/redux/store'
import { toast } from 'react-toastify'
import { logout, login, authenticate, register } from '../../libs/redux/features/auth/authSlice'
import { SigninRequest } from '../../types'
import { axiosAuth } from '../../libs/api/auth.axios'

export function useAuthController() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state: RootState) => state.auth)

  function onSignup(data: SigninRequest) {
    try {
      dispatch(register(data))
      toast.success('Register success!')
    } catch (err) {
      // @ts-ignore
      toast.error(err.message)
    }
  }
  function onAuthenticate() {
    try {
      dispatch(authenticate())
    } catch (err) {
      // @ts-ignore
      toast.error(err.message)
    }
  }
  function onSignin(email: string, password: string) {
    try {
      dispatch(login({ email, password }))
    } catch (err) {
      // @ts-ignore
      toast.error(err.message)
    }
  }

  async function onLogout() {
    axiosAuth
      .logout()
      .then(() => {
        dispatch(logout())
        toast.success('Logout success!')
      })
      .catch((err) => {
        // @ts-ignore
        toast.error(err.message)
      })
  }
  return {
    state,
    onSignup,
    onSignin,
    onLogout,
    onAuthenticate,
  }
}
