import { Text } from '@tremor/react'
import { type FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  path: string | undefined
  Icon: FC
  name: string
}

export const Item: FC<Props> = ({ path, Icon, name }) => {
  return (
    <li>
      <Link
        to={path ?? '/'}
        className='flex items-center gap-2 text-customDark-main hover:text-customLight-stroke p-2 rounded-lg  hover:bg-customDark-main'
      >
        <div className='text-customDark-primary text-xl'>
          <Icon />
        </div>
        <Text className='text-current select-none'>{name}</Text>
      </Link>
    </li>
  )
}
