import { Callout, Dialog, DialogPanel, Title } from '@tremor/react'
import { Outlet } from 'react-router-dom'
import { MainIcon } from '../components/Icons/MainIcon'
import { IoWarning } from 'react-icons/io5'
import { useContext, useMemo } from 'react'
import { AuthContext } from '../context/authProvider'

export const LoginLayout = () => {
  const { user, logout } = useContext(AuthContext)
  const modalInfo = useMemo(() => {
    console.log(user.errorMessage)
    return {
      visible: !!user.errorMessage,
      message: user.errorMessage
    }
  }, [user.errorMessage])
  return (
    <section className='w-screen h-screen bg-customDark-background flex flex-col justify-center items-center'>

      <MainIcon />
      <Title className='text-customDark-main'>
        Gestor Inteligente de Proyectos
      </Title>

      <br />

      <Outlet />

      <Dialog open={modalInfo.visible} onClose={logout}>
        <DialogPanel>
          <Callout
            title='Error'
            icon={IoWarning}
            color='rose'
          >
            {modalInfo.message}
          </Callout>
        </DialogPanel>
      </Dialog>
    </section>
  )
}
