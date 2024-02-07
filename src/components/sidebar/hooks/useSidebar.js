import { useContext, useEffect, useMemo, useState } from 'react'
import { SidebarContext } from '../../../context/sidebarProvider'

export const useSidebar = () => {
  const { isSidebarVisible, handleSidebarVisibility } =
    useContext(SidebarContext)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
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
      width: '22rem',
      maxWidth: '300px',
      position: 'relative'
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

  return {
    isSidebarVisible,
    styleSidebar,
    handleSidebarVisibility,
    isMobile
  }
}
