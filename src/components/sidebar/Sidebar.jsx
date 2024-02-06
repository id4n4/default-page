import { Button, Divider, Text, Title } from '@tremor/react'
import { MainIcon } from '../Icons/MainIcon'
import { navFooter, navigation } from '../../mocks/sidebar'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useMemo, useState } from 'react'
import { SidebarContext } from '../../context/sidebarProvider'
import { AiOutlineLeft, AiOutlineRight, AiOutlineMenu } from 'react-icons/ai'

export const Sidebar = () => {
  const { isSidebarVisible, handleSidebarVisibility } =
    useContext(SidebarContext)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const styleText = useMemo(
    () => ({
      transition: 'all 0.5s ease',
      opacity: (isSidebarVisible) ? 1 : 0, // Mostrar el texto si la barra lateral es visible
      width: isSidebarVisible ? 'auto' : 0, // Altura cero si la barra lateral no es visible
      overflow: 'hidden',
      display: 'inline-block'
    }),
    [isSidebarVisible]
  )
  const styleSidebar = useMemo(() => {
    if (isMobile) {
      return {
        overflow: 'hidden',
        width: isSidebarVisible ? '100%' : 0,
        padding: isSidebarVisible ? '1rem' : 0,
        position: 'absolute',
        top: 0,
        left: 0,
        transition: 'all 0.3s ease',
        zIndex: 50
      }
    }
    return {
      overflow: 'hidden',
      minWidth: isSidebarVisible ? '200px' : '75px', // '4rem
      maxWidth: '20rem',
      width: isSidebarVisible ? '20rem' : '75px',
      transition: 'all 0.3s ease',
      position: isMobile ? 'absolute' : 'relative'
    }
  }, [isSidebarVisible, isMobile])

  const changeScreenWith = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    window.addEventListener('resize', changeScreenWith)
    return () => {
      window.removeEventListener('resize', changeScreenWith)
    }
  }, [])
  return (
    <>
      <nav
        className='bg-customDark-background text-white w-[15rem] h-full p-5 flex flex-col'
        style={styleSidebar}
      >
        <div className='flex gap-2 items-center'>
          <MainIcon size={isSidebarVisible ? 'xl' : 'md'} />
          <Title className='text-customDark-main' style={styleText}>
            Gestión Inteligente de proyectos
          </Title>
        </div>
        <br />
        {/* MENU */}
        <div className='flex-grow flex flex-col overflow-hidden'>
          <ul className='flex-grow'>
            {navigation.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  className='flex items-center gap-x-2 text-customDark-main hover:text-customLight-stroke p-2 rounded-lg  hover:bg-customDark-main hover:font-medium duration-150'
                >
                  <div className='text-customDark-primary'>{item.icon}</div>
                  <div style={styleText}>
                    <Text className='text-current'>{item.name}</Text>
                  </div>
                </Link>
              </li>
            ))}
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
                  <div style={styleText}>
                    <Text className='text-current'>{item.name}</Text>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <br />
          <Button onClick={handleSidebarVisibility} className='px-1'>
            {isSidebarVisible ? <AiOutlineLeft /> : <AiOutlineRight />}
          </Button>
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
