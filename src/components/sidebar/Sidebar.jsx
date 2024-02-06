import { Button, Divider, Text, Title } from '@tremor/react'
import { MainIcon } from '../Icons/MainIcon'
import { navFooter } from '../../mocks/sidebar'
import { Link } from 'react-router-dom'
import { AiOutlineLeft, AiOutlineRight, AiOutlineMenu } from 'react-icons/ai'
import { useSidebar } from './hooks/useSidebar'
import { Menu } from './components/Menu'

export const Sidebar = () => {
  const {
    styleSidebar,
    handleSidebarVisibility,
    isSidebarVisible,
    isMobile
  } = useSidebar()
  return (
    <>
      <nav
        className='bg-customDark-background text-white w-[15rem] h-full px-2 py-5 flex flex-col'
        style={styleSidebar}
      >
        <Link to='/' className='flex gap-2 items-center'>
          <MainIcon size={isSidebarVisible ? 'xl' : 'md'} />
          <Title className='text-customDark-main'>
            Gestión Inteligente de proyectos
          </Title>
        </Link>
        <Divider />
        {/* MENU */}
        <div className='flex-grow flex flex-col overflow-hidden'>
          <ul className='flex-grow flex flex-col gap-2'>
            <Menu />
          </ul>
          <Divider />
          {/* FOOTER */}
          <ul>
            {navFooter.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className='flex items-center gap-x-2 text-customDark-main hover:text-customLight-stroke p-2 rounded-lg  hover:bg-gray-50 hover:font-medium duration-150'
                >
                  <div className='text-customDark-primary'>{item.icon}</div>
                  <div>
                    <Text className='text-current select-none'>
                      {item.name}
                    </Text>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {
            isMobile && (
              <Button onClick={handleSidebarVisibility} className='px-1 mt-5'>
                {isSidebarVisible ? <AiOutlineLeft /> : <AiOutlineRight />}
              </Button>
            )
          }
        </div>
      </nav>
      {isMobile && !isSidebarVisible && (
        <Button
          className='absolute top-5 left-5 p-3 z-40'
          onClick={handleSidebarVisibility}
        >
          <AiOutlineMenu className='p-0' />
        </Button>
      )}
    </>
  )
}
