import { Text } from '@tremor/react'
import { Item } from './Item'
import { type FC, useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { VscDebugBreakpointData } from 'react-icons/vsc'
import { type Items } from '@/Interfaces'

interface Props {
  name: string
  Icon: FC
  subOptions?: Items[]
}

export const SubMenu: FC<Props> = ({ name, Icon, subOptions }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubMenu = () => { setIsOpen(last => !last) }
  return (
    <li>
      <div
        className='flex items-center gap-2 text-customDark-main cursor-pointer hover:text-customLight-stroke p-2 rounded-lg  hover:bg-customDark-main duration-300'
        onClick={handleSubMenu}
      >
        <div className='text-customDark-primary text-xl'>
          <Icon />
        </div>
        <div className='flex-grow'>
          <Text className='text-current transition-all duration-150 ease-in-out select-none'>{name}</Text>
        </div>
        <div>
          {
            isOpen
              ? <AiOutlineUp />
              : <AiOutlineDown />
          }
        </div>
      </div>
      <ul
        className='ml-5 ' style={{
          overflow: 'hidden',
          maxHeight: isOpen ? '1000px' : '0',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        {
          subOptions?.map((item, idx) => (
            <Item
              key={idx}
              path={item.path}
              Icon={VscDebugBreakpointData}
              name={item.name}
            />
          ))
        }
      </ul>
    </li>
  )
}
