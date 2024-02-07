import { Button, Divider, Title } from '@tremor/react'
import { MainIcon } from '../Icons/MainIcon'
import { Link } from 'react-router-dom'
import { AiOutlineLeft, AiOutlineRight, AiOutlineMenu } from 'react-icons/ai'
import { useSidebar } from './hooks/useSidebar'
import { Menu } from './components/Menu'
import { Footer } from './components/Footer'

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
          <ul className='flex-grow flex flex-col gap-2 overflow-auto'>
            <Menu />
          </ul>
          <Divider />
          {/* FOOTER */}
          <ul>
            <Footer />
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
