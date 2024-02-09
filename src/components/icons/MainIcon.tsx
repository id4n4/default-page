import { Icon } from '@tremor/react'
import { SiOpenproject } from 'react-icons/si'

export const MainIcon = ({ ...props }) => {
  return (
    <Icon
      icon={SiOpenproject}
      size='xl'
      variant='solid'
      className='border-none ring-customDark-primary'
      {...props}
    />
  )
}
