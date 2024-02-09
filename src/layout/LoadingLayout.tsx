import { Text } from '@tremor/react'
import { CustomLoading } from '../components/loadings'
export const LoadingLayout = () => {
  return (
    <section className='w-screen h-screen flex flex-col justify-center items-center bg-customDark-background'>
      <CustomLoading />
      <Text className='text-customDark-main'>Cargando...</Text>
    </section>
  )
}
