import { Text } from '@tremor/react'
import { Link } from 'react-router-dom'

export const Item = ({ path, Icon, name }) => {
  return (
    <li>
      <Link
        to={path}
        className='flex items-center gap-2 text-customDark-main hover:text-customLight-stroke p-2 rounded-lg  hover:bg-customDark-main'
      >
        <div className='text-customDark-primary text-xl'>
          {
            Icon
              ? <Icon />
              : null
          }
        </div>
        <Text className='text-current transition-all duration-500 ease-in-out select-none'>{name}</Text>
      </Link>
    </li>
  )
}
